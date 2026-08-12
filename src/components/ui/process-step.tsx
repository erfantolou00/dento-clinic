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
        "group relative space-y-5 overflow-hidden rounded-[1.5rem] border border-border/60 bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_45px_rgb(20_43_53/0.09)] md:p-8",
        className
      )}
    >
      <div className="flex items-center justify-between"><p className="eyebrow text-primary">Step {step.step}</p><span className="size-2 rounded-full bg-[#bce8d6] transition-transform duration-300 group-hover:scale-[2]" /></div>
      <h3 className="font-heading text-xl font-semibold md:text-2xl">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
        {step.description}
      </p>
      <div className="h-px w-14 bg-primary/30 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
