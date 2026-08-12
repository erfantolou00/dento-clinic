"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { defaultTransition, fadeIn, fadeUp } from "@/lib/animations";
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
  return (
    <motion.div
      initial={direction === "up" ? fadeUp.hidden : fadeIn.hidden}
      whileInView={direction === "up" ? fadeUp.visible : fadeIn.visible}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...defaultTransition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
