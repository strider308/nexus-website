/**
 * 3D Cinematic Website Experiment Configuration
 */

export const CINEMATIC_3D_ENABLED =
  process.env.NEXT_PUBLIC_3D_CINEMATIC === "true";

export const CINEMATIC_3D_DEBUG =
  process.env.NEXT_PUBLIC_3D_CINEMATIC_DEBUG === "true";

export type QualityPreset = "low" | "medium" | "high" | "auto";

export const CINEMATIC_3D_QUALITY =
  (process.env.NEXT_PUBLIC_3D_CINEMATIC_QUALITY as QualityPreset) || "auto";

export const HERO_CHAPTER = {
  id: "hero",
  htmlSectionId: "hero",
  title: "Operating Field",
  nodes: [
    { label: "Chats", y: 1.2, color: "#C0392B" },
    { label: "Sheets", y: 0.6, color: "#F39C12" },
    { label: "Calls", y: 0.0, color: "#2A7D8A" },
    { label: "Files", y: -0.6, color: "#2E6FAD" },
    { label: "Tasks", y: -1.2, color: "#D35400" },
  ],
} as const;
