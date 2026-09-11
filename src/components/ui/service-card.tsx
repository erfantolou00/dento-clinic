import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCad } from "@/lib/format";
import type { Service } from "@/types";

type ServiceCardProps = { 
  service: Service; 
  active?: boolean; 
  className?: string; 
  href?: string;
};

export function ServiceCard({ 
  service, 
  active = false, 
  className, 
  href = `/services/${service.id}`,
}: ServiceCardProps) {
  return <Link
    href={href}
    className={cn(
      "group relative block h-full min-h-107.5 w-[min(82vw,370px)] shrink-0 snap-center overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-[0_8px_30px_rgb(20_43_53/0.04)] transition-[transform,box-shadow,border-color] duration-500 focus-visible:ring-3 focus-visible:ring-ring/35 sm:w-90 lg:w-95", 
      active && "border-primary/30 shadow-[0_22px_55px_rgb(20_43_53/0.14)]", 
      className
    )}
    aria-label={`View details for ${service.title}`}
  >
    <article className="flex h-full flex-col">
      <div className="relative aspect-[1.16/1] overflow-hidden bg-muted">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 82vw, 380px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full bg-linear-to-br from-secondary to-muted" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-primary/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur-md">
          {service.eyebrow}
        </span>
        <span className="absolute bottom-5 left-5 flex items-center gap-1.5 text-xs font-medium text-white/85">
          <Clock3 className="size-3.5" />
          {service.duration}
        </span>
        {service.featured && (
          <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-accent-foreground">
            Popular
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between card-padding-default md:p-7">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="h3">{service.title}</h3>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-300 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <p className="mt-3 body-sm text-muted-foreground">{service.description}</p>
        </div>
        <div className="mt-7 flex items-end justify-between border-t border-border/70 pt-4">
          <span className="h2">{formatCad(service.price)}</span>
          <span className="caption text-muted-foreground">starting fee</span>
        </div>
      </div>
    </article>
  </Link>;
}
