export const designTokens = {
  layout: {
    container: "min(100% - 2rem, 80rem)",
    sectionY: { sm: "5rem", md: "7rem", lg: "9rem" },
  },
  radius: { sm: "0.75rem", md: "1rem", lg: "1.5rem", pill: "999px" },
  shadow: { soft: "0 20px 60px rgb(20 43 53 / 0.08)", floating: "0 30px 80px rgb(20 43 53 / 0.14)" },
  zIndex: { base: 0, header: 50, overlay: 60, modal: 70 },
  breakpoint: { mobile: 640, tablet: 768, laptop: 1024, desktop: 1280, wide: 1536 },
} as const;

export type DesignTokens = typeof designTokens;
