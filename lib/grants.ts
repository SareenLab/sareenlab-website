export interface Grant {
  agency: string;
  title: string;
  amount?: string;
  role: string;
  period: string;
  status: "active" | "past";
}

export const activeGrantsPI: Grant[] = [
  {
    agency: "Breakthrough T1D",
    title: "Scalable GMP manufacturing of iPSC-derived insulin-producing cells",
    amount: "$600K",
    role: "PI",
    period: "2026–2028",
    status: "active",
  },
  {
    agency: "Breakthrough T1D / UHN",
    title: "Process development with clinical-grade iPSC lines for beta cell biomanufacturing facility",
    amount: "$871K",
    role: "Co-PI",
    period: "2025–2026",
    status: "active",
  },
  {
    agency: "DoD / MTEC",
    title: "Quality management processes for hiPSC-derived vascular cell therapies",
    amount: "$3.12M",
    role: "PI",
    period: "2020–2024",
    status: "active",
  },
  {
    agency: "NASA / Space Tango",
    title: "Stem cell production capabilities for ISS",
    amount: "$500K",
    role: "PI",
    period: "2020–2024",
    status: "active",
  },
];

export const activeGrantsCoI: Grant[] = [
  {
    agency: "CIRM INFR5",
    title: "CGT Manufacturing Network — comprehensive biomanufacturing center",
    amount: "$7.96M total",
    role: "Co-I",
    period: "2023–2028",
    status: "active",
  },
  {
    agency: "NIH NIDDK",
    title: "Personalized cystic fibrosis therapy — iPSC CF organ models",
    amount: "$1.24M/yr",
    role: "Co-I",
    period: "2025–2028",
    status: "active",
  },
  {
    agency: "NIH NHLBI",
    title: "Mechanisms of sex-biased risk in aneurysm — Marfan iPSC models",
    amount: "$1.67M",
    role: "Co-I",
    period: "2022–2026",
    status: "active",
  },
  {
    agency: "NIH NICHD",
    title: "Placental organoids to model preeclampsia",
    amount: "$2.09M",
    role: "Co-I",
    period: "2022–2027",
    status: "active",
  },
  {
    agency: "NIH NCI",
    title: "Nanoimmunodrug for glioma — GMP translation",
    amount: "$2.73M",
    role: "Co-I",
    period: "2023–2027",
    status: "active",
  },
  {
    agency: "NIH NIDDK",
    title: "Advanced in vitro model systems — digestive disease research core",
    amount: "$1.43M",
    role: "Co-I",
    period: "2026–2030",
    status: "active",
  },
];

export const pastGrants: Grant[] = [
  {
    agency: "CIRM Infrastructure",
    title: "Biomanufacturing center solving CGT bottlenecks",
    amount: "$2M",
    role: "PI",
    period: "2023–2025",
    status: "past",
  },
  {
    agency: "Answer ALS",
    title: "ALS iPSC and motor neuron biorepository",
    amount: "$2.85M",
    role: "Co-I",
    period: "2016–2024",
    status: "past",
  },
  {
    agency: "NIH LINCS",
    title: "NeuroLINCS multi-omics — neuron and glial signatures",
    amount: "$196K (CSMC)",
    role: "Co-I",
    period: "2014–2020",
    status: "past",
  },
  {
    agency: "CIRM Translational",
    title: "Personalized cell therapy for diabetes",
    role: "Co-PI",
    period: "2016–2019",
    status: "past",
  },
];
