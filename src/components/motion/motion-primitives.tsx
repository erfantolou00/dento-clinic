"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { defaultTransition, fadeUp, viewport } from "@/lib/animations";
import { useMotionSafe } from "@/hooks/use-reduced-motion";

export function Reveal({ className, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  const reducedMotion = useMotionSafe();
  return <motion.div {...props} variants={reducedMotion ? undefined : fadeUp} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={viewport} transition={reducedMotion ? { duration: 0 } : { ...defaultTransition, delay }} className={cn(className)} />;
}

export function Stagger({ className, ...props }: HTMLMotionProps<"div">) {
  const reducedMotion = useMotionSafe();
  return <motion.div {...props} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={viewport} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className={cn(className)} />;
}

export function ScaleIn({ className, ...props }: HTMLMotionProps<"div">) {
  const reducedMotion = useMotionSafe();
  return <motion.div {...props} initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }} whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }} viewport={viewport} transition={reducedMotion ? { duration: 0 } : defaultTransition} className={cn(className)} />;
}

export function Pressable({ className, ...props }: HTMLMotionProps<"button">) {
  const reducedMotion = useMotionSafe();
  return <motion.button {...props} whileTap={reducedMotion ? undefined : { scale: 0.97 }} transition={defaultTransition} className={cn(className)} />;
}
