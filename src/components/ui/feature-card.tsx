import { cn } from "@/lib/utils";
import type { Feature } from "@/types";
import { Heart, ScanFace, Sparkles } from "lucide-react";

type FeatureCardProps = {
  feature: Feature;
  className?: string;
};

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group stack-spacing-default rounded-[1.5rem] border border-border/60 bg-card card-padding-default transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_45px_rgb(20_43_53/0.08)] md:card-padding-lg",
        className
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:rotate-6">{feature.icon === "heart" ? <Heart className="size-5" /> : feature.icon === "scan" ? <ScanFace className="size-5" /> : <Sparkles className="size-5" />}</span>
      <h3 className="h3">
        {feature.title}
      </h3>
      <p className="body-sm text-muted-foreground">
        {feature.description}
      </p>
    </article>
  );
}
