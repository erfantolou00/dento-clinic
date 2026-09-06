"use client";

import { motion } from "framer-motion";
import { ClipboardList, HeartPulse, ScanSearch, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";
import { defaultTransition } from "@/lib/animations";

type ProcessStepCardProps = {
  step: ProcessStep;
  index: number;
  className?: string;
};

const stepIcons = {
  scan: ScanSearch,
  clipboard: ClipboardList,
  sparkles: Sparkles,
  heart: HeartPulse,
};

export function ProcessStepCard({ step, index, className }: ProcessStepCardProps) {
  const Icon = stepIcons[step.icon as keyof typeof stepIcons] ?? Sparkles;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative grid h-full gap-6 overflow-hidden rounded-[1.25rem]",
        "border border-border/70 bg-card p-5 shadow-card sm:p-6",
        "transition-[border-color,box-shadow,background-color] duration-500",
        "hover:border-primary/35 hover:bg-surface hover:shadow-elevated",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-105">
          <Icon className="size-5" aria-hidden />
        </span>
        <span className="font-heading text-5xl font-bold leading-none text-primary/12 transition-colors duration-500 group-hover:text-primary/22">
          {String(step.step).padStart(2, "0")}
        </span>
      </div>

      <div>
        <p className="eyebrow text-primary/70">Step {step.step}</p>
        <h3 className="mt-3 font-heading text-2xl font-semibold leading-tight text-foreground">
          {step.title}
        </h3>
        <p className="mt-3 body-sm text-muted-foreground">{step.description}</p>
      </div>

      {step.detail && (
        <p className="rounded-2xl border border-border/70 bg-secondary/45 p-4 text-sm leading-relaxed text-foreground/75">
          {step.detail}
        </p>
      )}

      <div className="h-px w-14 origin-left bg-primary/35 transition-all duration-500 group-hover:w-full group-hover:bg-primary" />
      <span className="sr-only">
        Step {index + 1}
      </span>
    </motion.article>
  );
}
