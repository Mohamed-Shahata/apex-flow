import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
        }}
      >
        <span
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: "#04121f",
            fontFamily: "sans-serif",
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}