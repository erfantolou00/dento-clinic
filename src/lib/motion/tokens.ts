import type { Transition, Variants } from "framer-motion";

export const motionTokens = {
  duration: { instant: 0.12, fast: 0.24, base: 0.48, slow: 0.72, reveal: 0.9 },
  ease: { standard: [0.22, 1, 0.36, 1] as const, gentle: [0.16, 1, 0.3, 1] as const },
  spring: { soft: { type: "spring", stiffness: 180, damping: 24 } as const, snappy: { type: "spring", stiffness: 360, damping: 30 } as const },
  stagger: { tight: 0.05, base: 0.08, relaxed: 0.14 },
} as const;

export const motionViewport = { once: true, amount: 0.18, margin: "0px 0px -8%" } as const;
export const revealTransition: Transition = { duration: motionTokens.duration.base, ease: motionTokens.ease.standard };
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};
