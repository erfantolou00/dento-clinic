"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { defaultTransition, fadeUp, viewport } from "@/lib/animations";

export function Reveal({ className, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return <motion.div {...props} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...defaultTransition, delay }} className={cn(className)} />;
}

export function Stagger({ className, ...props }: HTMLMotionProps<"div">) {
  return <motion.div {...props} initial="hidden" whileInView="visible" viewport={viewport} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className={cn(className)} />;
}
