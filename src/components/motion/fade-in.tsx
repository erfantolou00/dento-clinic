"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { defaultTransition, fadeIn, fadeUp } from "@/lib/animations";
import { useMotionSafe } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  direction?: "up" | "none";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: FadeInProps) {
  const reducedMotion = useMotionSafe();
  return (
    <motion.div
      initial={reducedMotion ? false : direction === "up" ? fadeUp.hidden : fadeIn.hidden}
      whileInView={reducedMotion ? undefined : direction === "up" ? fadeUp.visible : fadeIn.visible}
      viewport={{ once: true, margin: "-60px" }}
      transition={reducedMotion ? { duration: 0 } : { ...defaultTransition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
