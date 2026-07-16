import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e17",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 85% 85%, rgba(6,182,212,0.22), transparent 45%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            marginBottom: 36,
          }}
        >
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#04121f",
              fontFamily: "sans-serif",
            }}
          >
            A
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#ededed",
            fontFamily: "sans-serif",
          }}
        >
          Apex Flow
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 28,
            color: "#8b96a8",
            fontFamily: "sans-serif",
          }}
        >
          Engineering Digital Momentum
        </div>
      </div>
    ),
    { ...size }
  );
}