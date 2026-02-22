import { ImageResponse } from "next/og"

export const alt = "Nomad Ops — Websites That Work as Hard as You Do"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#292524",
          padding: "60px",
        }}
      >
        {/* Top — Branding */}
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#c47d4e",
              letterSpacing: "-0.02em",
            }}
          >
            Nomad Ops
          </span>
        </div>

        {/* Center — Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#faf9f6",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            Websites That Work as Hard as You Do
          </span>
        </div>

        {/* Bottom — URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: 20,
              color: "rgba(250, 249, 246, 0.5)",
            }}
          >
            nomad-ops.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
