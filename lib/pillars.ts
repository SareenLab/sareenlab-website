export interface Pillar {
  number: string;
  slug: string;
  icon: string; // SVG path data or identifier
  tagline: string;
  title: string;
  body: string;
  tags: string[];
  href: string;
}

export const pillars: Pillar[] = [
  {
    number: "01",
    slug: "ipsc-platform",
    icon: "cell",
    tagline: "The foundational layer for everything we build.",
    title: "iPSC Platform & Cell Differentiation",
    body:
      "Our iPSC core operates as the backbone of every therapeutic program — from cGMP-grade reprogramming and banking to scalable directed differentiation into clinically relevant cell types. We maintain the world's largest ALS patient iPSC biorepository and have established robust protocols across cardiovascular, neurological, and metabolic lineages.",
    tags: [
      "cGMP iPSC Banking",
      "Endothelial Differentiation",
      "Islet β-cell",
      "Neural / Motor Neuron",
      "Cardiomyocytes",
      "Bioreactor Scale-Up",
      "Disease Modeling Lines",
    ],
    href: "/research/ipsc-platform",
  },
  {
    number: "02",
    slug: "cell-gene-therapies",
    icon: "dna",
    tagline: "Engineering cells that do what drugs cannot.",
    title: "Cell & Gene-Edited Therapies",
    body:
      "We engineer hypoimmune, off-the-shelf cell therapies using CRISPR-based gene editing to create universal donor iPSC lines. Our pipeline spans vascular progenitors for critical limb ischemia, insulin-secreting beta cells for T1D, and CAR-T/NK platforms for immuno-oncology — all supported by IND-enabling CMC infrastructure at our cGMP facility.",
    tags: [
      "Hypoimmune Engineering",
      "Vascular Progenitors",
      "Islet Cell Therapy",
      "Immunotherapy",
      "Cardiac Cell Therapy",
      "CRISPR Editing",
      "IND-Enabling CMC",
    ],
    href: "/research/cell-gene-therapies",
  },
  {
    number: "03",
    slug: "bioengineered-tissues",
    icon: "tissue",
    tagline: "Building complexity from the ground up.",
    title: "Bioengineered Tissues & Organoids",
    body:
      "From vascularized cardiac constructs to bioengineered pancreas systems, we build multi-cellular tissue architectures that recapitulate native organ physiology. Our organ-on-chip and organoid platforms serve as next-generation alternatives to animal models (NAMs) for disease modeling and drug screening.",
    tags: [
      "Vascularized Cardiac Tissue",
      "Cardiomyocyte Disease Models",
      "Prevascularized Constructs",
      "Vascular Organoids",
      "Bioengineered Pancreas",
      "Organ-on-Chip",
      "Biomaterial Scaffolds",
      "NAMs Platforms",
    ],
    href: "/research/bioengineered-tissues",
  },
  {
    number: "04",
    slug: "robotics-automation-ai",
    icon: "robot",
    tagline: "Making cell therapy as reliable as semiconductor fabrication.",
    title: "Robotics, Automation & AI",
    body:
      "We're building closed-loop, AI-integrated biomanufacturing infrastructure where robotic systems handle iPSC reprogramming, differentiation, and QC — eliminating batch-to-batch variability. Machine learning models score colony morphology, predict process deviations, and optimize bioprocess parameters in real time.",
    tags: [
      "Automated iPSC Reprogramming",
      "Autologous Manufacturing",
      "Robotic Differentiation",
      "Modular Gene Editing",
      "ML Process Optimization",
      "Real-Time CQA Monitoring",
      "Digital Twins",
      "AI Colony Scoring",
    ],
    href: "/research/robotics-automation-ai",
  },
];

export const diseaseAreas = {
  active: [
    "Critical Limb Ischemia",
    "Type 1 Diabetes",
    "Cardiomyopathy",
    "ALS",
    "Spinal Muscular Atrophy",
    "Immuno-Oncology",
  ],
  secondary: [
    "Cardiovascular Disease",
    "Metabolic Disorders",
    "Neurodegenerative Disease",
  ],
};
