import { XMLParser } from "fast-xml-parser";

export interface Publication {
  pmid: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
}

const PUBMED_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";

// ─── Search term ─────────────────────────────────────────────────────────────
// "Sareen Dhruv[Author]" is the correct server-queryable equivalent of the
// My NCBI bibliography. The [myncbi] field tag requires an authenticated
// browser session and returns 0 results from any server-side fetch (verified).
const ESEARCH_URL =
  `${PUBMED_BASE}/esearch.fcgi` +
  `?db=pubmed` +
  `&term=${encodeURIComponent("Sareen Dhruv[Author]")}` +
  `&retmax=200` +
  `&retmode=json` +
  `&sort=pub+date`;

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  isArray: (tagName) =>
    ["PubmedArticle", "Author", "AbstractText", "ELocationID"].includes(tagName),
});

export async function fetchPublications(): Promise<Publication[]> {
  try {
    // ── Step 1: esearch — get all PMIDs sorted newest first ──────────────────
    const searchRes = await fetch(ESEARCH_URL, {
      next: { revalidate: 86400 }, // ISR: revalidate every 24 hours
    });

    if (!searchRes.ok) throw new Error(`esearch failed: ${searchRes.status}`);

    const searchData = await searchRes.json();
    const ids: string[] = searchData?.esearchresult?.idlist ?? [];

    if (ids.length === 0) return [];

    // ── Step 2: efetch — full citation XML for all PMIDs ────────────────────
    const efetchUrl =
      `${PUBMED_BASE}/efetch.fcgi` +
      `?db=pubmed` +
      `&id=${ids.join(",")}` +
      `&retmode=xml` +
      `&rettype=abstract`;

    const fetchRes = await fetch(efetchUrl, {
      next: { revalidate: 86400 },
    });

    if (!fetchRes.ok) throw new Error(`efetch failed: ${fetchRes.status}`);

    const xml = await fetchRes.text();
    const parsed = xmlParser.parse(xml);
    const articles: unknown[] = parsed?.PubmedArticleSet?.PubmedArticle ?? [];

    // Build a map keyed by PMID for fast lookup
    const articleMap = new Map<string, Publication>();

    for (const article of articles) {
      try {
        const a = article as Record<string, unknown>;
        const citation = a?.MedlineCitation as Record<string, unknown>;
        const art = citation?.Article as Record<string, unknown>;
        if (!citation || !art) continue;

        // PMID
        const pmidRaw = citation?.PMID as Record<string, unknown> | string | number;
        const pmid = String(
          typeof pmidRaw === "object" ? pmidRaw?.["#text"] : pmidRaw
        ).trim();
        if (!pmid || pmid === "undefined") continue;

        // Title
        const titleRaw = art?.ArticleTitle;
        const title = (
          typeof titleRaw === "object"
            ? (titleRaw as Record<string, string>)?.["#text"] ?? ""
            : String(titleRaw ?? "")
        ).replace(/\.$/, "");

        // Authors — "LastName Initials", up to 6 then et al.
        const authorNode = (art?.AuthorList as Record<string, unknown>)?.Author;
        const authorList = Array.isArray(authorNode) ? authorNode : authorNode ? [authorNode] : [];
        const authors =
          (authorList as Record<string, string>[])
            .slice(0, 6)
            .map((au) => {
              if (au.CollectiveName) return String(au.CollectiveName);
              const last = au.LastName ?? "";
              const init = au.Initials ?? "";
              return init ? `${last} ${init}` : last;
            })
            .filter(Boolean)
            .join(", ") + (authorList.length > 6 ? ", et al." : "");

        // Journal
        const journal = String(
          (art?.Journal as Record<string, unknown>)?.Title ??
          (art?.Journal as Record<string, unknown>)?.ISOAbbreviation ??
          (citation?.MedlineJournalInfo as Record<string, unknown>)?.MedlineTA ??
          ""
        );

        // Year
        const journalIssue = (art?.Journal as Record<string, unknown>)
          ?.JournalIssue as Record<string, unknown> | undefined;
        const pubDate = journalIssue?.PubDate as Record<string, unknown> | undefined;
        const articleDate = art?.ArticleDate as Record<string, unknown> | undefined;
        const year = String(
          articleDate?.Year ??
          pubDate?.Year ??
          String(pubDate?.MedlineDate ?? "").slice(0, 4) ??
          ""
        );

        // Volume / Issue / Pages
        const volume = journalIssue?.Volume ? String(journalIssue.Volume) : undefined;
        const issue = journalIssue?.Issue ? String(journalIssue.Issue) : undefined;
        const pages = (art?.Pagination as Record<string, unknown>)?.MedlinePgn
          ? String((art.Pagination as Record<string, unknown>).MedlinePgn)
          : undefined;

        // DOI from ELocationID array
        const eLocations = art?.ELocationID as Record<string, string>[] | undefined;
        const eLocArr = Array.isArray(eLocations) ? eLocations : eLocations ? [eLocations] : [];
        const doiEntry = (eLocArr as Record<string, string>[]).find(
          (e) => e?.["@_EIdType"] === "doi"
        );
        const doi = doiEntry?.["#text"] ? String(doiEntry["#text"]) : undefined;

        articleMap.set(pmid, { pmid, title, authors, journal, year, volume, issue, pages, doi });
      } catch {
        // Skip malformed records silently
      }
    }

    // Return in esearch order (pub date descending — newest first)
    return ids
      .map((id) => articleMap.get(id))
      .filter((p): p is Publication => Boolean(p));
  } catch (error) {
    console.error("Error fetching publications:", error);
    return [];
  }
}
