import { cn } from "@/lib/utils";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex w-[280px] shrink-0 flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg sm:w-[320px]",
        className
      )}
    >
      <div className="space-y-4">
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <svg
              viewBox="0 0 48 48"
              className="size-12 text-muted-foreground/40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M24 8C20 8 17 12 15.5 16C14 20 14 26 15.5 30.5C17 35 20 38 24 38C28 38 31 35 32.5 30.5C34 26 34 20 32.5 16C31 12 28 8 24 8Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3"><div><p className="eyebrow mb-2 text-muted-foreground">{service.eyebrow}</p><h3 className="font-heading text-lg font-semibold">{service.title}</h3></div><span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground">{service.duration}</span></div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-baseline gap-1 border-t border-border/60 pt-4">
        <span className="font-heading text-2xl font-bold">
          ${service.price.toFixed(2)}
        </span>
        <span className="text-sm text-muted-foreground">/ After Discount</span>
      </div>
    </article>
  );
}
