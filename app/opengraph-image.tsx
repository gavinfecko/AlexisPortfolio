import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

/**
 * The card that appears when the site is shared on LinkedIn, Slack, or in a
 * message. Generated at build time — no design file to keep in sync.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fdfcfa",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 99,
              background: "#b4553f",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#78716c",
            }}
          >
            {profile.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, color: "#1c1917", lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#b4553f",
              marginTop: 18,
              fontStyle: "italic",
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#78716c" }}>
          {profile.location} &nbsp;·&nbsp; {profile.availabilityShort}
        </div>
      </div>
    ),
    size,
  );
}
