import { NextResponse } from "next/server";
import { fetchPublications } from "@/lib/pubmed";

export const revalidate = 86400; // 24 hours

export async function GET() {
  try {
    const publications = await fetchPublications();
    return NextResponse.json({ publications, count: publications.length });
  } catch (error) {
    console.error("Publications API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch publications" },
      { status: 500 }
    );
  }
}
