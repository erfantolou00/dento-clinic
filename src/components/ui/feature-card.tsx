import { cn } from "@/lib/utils";
import type { Feature } from "@/types";

type FeatureCardProps = {
  feature: Feature;
  className?: string;
};

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "space-y-3 rounded-2xl border border-border/60 bg-card p-6 md:p-8",
        className
      )}
    >
      <h3 className="font-heading text-lg font-semibold md:text-xl">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
        {feature.description}
      </p>
    </article>
  );
}
