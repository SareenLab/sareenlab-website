import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sareen Lab — iPSC Platforms · Cell & Gene Therapies · Regenerative Medicine",
    template: "%s | Sareen Lab",
  },
  description:
    "Building next-generation cell and gene therapy platforms, gene-edited living medicines, and autonomous biomanufacturing systems that accelerate clinical translation — at scale and at speed — with iPSC technology at the core.",
  keywords: [
    "iPSC",
    "cell therapy",
    "gene therapy",
    "regenerative medicine",
    "biomanufacturing",
    "Cedars-Sinai",
    "Dhruv Sareen",
  ],
  openGraph: {
    type: "website",
    url: "https://sareenlab.com",
    title: "Sareen Lab — Engineering the next generation of living medicines",
    description:
      "Building next-generation cell and gene therapy platforms, gene-edited living medicines, and autonomous biomanufacturing systems that accelerate clinical translation — at scale and at speed — with iPSC technology at the core.",
    siteName: "Sareen Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sareen Lab",
    description: "Engineering the next generation of living medicines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
