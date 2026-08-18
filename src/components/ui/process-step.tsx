"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";
import { defaultTransition } from "@/lib/animations";

type ProcessStepCardProps = {
  step: ProcessStep;
  index: number;
  className?: string;
};

export function ProcessStepCard({ step, index, className }: ProcessStepCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem]",
        "border border-border/60 bg-card card-padding-default md:card-padding-lg",
        "shadow-[0_8px_30px_rgb(20_43_53/0.04)]",
        "transition-[border-color,box-shadow] duration-500",
        "hover:border-primary/25 hover:shadow-[0_22px_50px_rgb(20_43_53/0.10)]",
        className
      )}
    >
      {/* شماره بزرگ به سبک Framer */}
      <div className="mb-6 flex items-center justify-between">
        <span className="font-heading text-[2.75rem] font-bold leading-none tracking-tight text-primary/15 transition-colors duration-500 group-hover:text-primary/30 md:text-[3.25rem]">
          [{step.step}]
        </span>
        <span className="size-2.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-[1.8]" />
      </div>

      <h3 className="h3">
        {step.title}
      </h3>

      <p className="mt-3 flex-1 body-sm text-muted-foreground">
        {step.description}
      </p>

      {/* خط accent که روی hover باز می‌شود */}
      <div className="mt-7 h-px w-12 origin-left bg-primary/35 transition-all duration-500 group-hover:w-full group-hover:bg-primary/50" />

      {/* شماره کوچک در گوشه برای موبایل/دسترسی */}
      <span className="sr-only">
        Step {index + 1} of 3
      </span>
    </motion.article>
  );
}