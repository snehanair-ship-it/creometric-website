import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Creometric — Digital Marketing Agency in Goa, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 16,
          }}
        >
          Creometric
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#999",
          }}
        >
          Digital Marketing Agency in Goa, India
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#f97316",
            marginTop: 24,
          }}
        >
          SEO &bull; Social Media &bull; PPC &bull; Web Design
        </div>
      </div>
    ),
    { ...size }
  );
}
