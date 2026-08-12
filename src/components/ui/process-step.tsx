import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";

type ProcessStepCardProps = {
  step: ProcessStep;
  className?: string;
};

export function ProcessStepCard({ step, className }: ProcessStepCardProps) {
  return (
    <article
      className={cn(
        "group relative space-y-4 rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-md md:p-8",
        className
      )}
    >
      <p className="font-heading text-sm font-medium text-muted-foreground">
        [{step.step}]
      </p>
      <h3 className="font-heading text-xl font-semibold md:text-2xl">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
        {step.description}
      </p>
    </article>
  );
}
