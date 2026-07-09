import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nexus — Custom Software & Automation";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          border: "2px solid rgba(222, 219, 200, 0.15)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "12px",
              fontFamily: "monospace",
              fontWeight: "bold",
              color: "rgba(222, 219, 200, 0.6)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Proof-of-Work Engineering
          </div>
          <div
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              color: "#E1E0CC",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            NEXUS
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a3a3a3",
              maxWidth: "800px",
              lineHeight: "1.4",
              fontWeight: "300",
            }}
          >
            Custom software & workflow automation systems built end-to-end.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#2A7D8A",
              letterSpacing: "0.05em",
            }}
          >
            nexus-website
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "rgba(222, 219, 200, 0.4)",
            }}
          >
            nexus.tools
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
