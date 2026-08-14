// src/components/motion/fade-in.tsx
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

// ✅ StaggerContainer برای گروه‌بندی آیتم‌ها
type StaggerContainerProps = HTMLMotionProps<"div"> & {
  staggerChildren?: number;
  delayChildren?: number;
};

export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
  ...props
}: StaggerContainerProps) {
  const reducedMotion = useMotionSafe();
  return (
    <motion.div
      initial="hidden"
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ✅ StaggerItem برای هر آیتم داخل گروه
type StaggerItemProps = HTMLMotionProps<"div"> & {
  direction?: "up" | "none";
};

export function StaggerItem({
  children,
  className,
  direction = "up",
  ...props
}: StaggerItemProps) {
  const reducedMotion = useMotionSafe();
  const variants = {
    hidden: direction === "up" ? fadeUp.hidden : fadeIn.hidden,
    visible: direction === "up" ? fadeUp.visible : fadeIn.visible,
  };

  return (
    <motion.div
      variants={reducedMotion ? {} : variants}
      transition={reducedMotion ? { duration: 0 } : defaultTransition}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}