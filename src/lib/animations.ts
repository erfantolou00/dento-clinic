export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export { motionTokens as defaultMotionTokens, motionViewport, revealTransition, revealVariants } from "@/lib/motion/tokens";
export const defaultTransition = { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const };

export const viewport = { once: true, amount: 0.18 } as const;

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};
