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
  metadataBase: new URL("https://sareenlab.com"),
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: "https://sareenlab.com",
    title: "Sareen Lab — Engineering the next generation of living medicines",
    description:
      "Building next-generation cell and gene therapy platforms, gene-edited living medicines, and autonomous biomanufacturing systems that accelerate clinical translation — at scale and at speed — with iPSC technology at the core.",
    siteName: "Sareen Lab",
    images: [
      {
        url: "https://sareenlab.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sareen Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sareen Lab",
    description: "Engineering the next generation of living medicines.",
    images: ["https://sareenlab.com/opengraph-image"],
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
