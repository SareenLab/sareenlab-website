import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // Read logo SVG at request time; strip the embedded C2PA provenance blob
  // so the data URI stays lean.
  const rawSvg = fs.readFileSync(
    path.join(process.cwd(), "public/logo-dark.svg"),
    "utf-8"
  );
  const cleanSvg = rawSvg.replace(/<metadata>[\s\S]*?<\/metadata>/g, "");
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(cleanSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#080C14",
        }}
      >
        {/* Logo at ~40% of canvas width — readable on all platforms */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoDataUri}
          alt="Sareen Lab"
          style={{ width: 480, height: "auto" }}
        />
      </div>
    ),
    { ...size }
  );
}
