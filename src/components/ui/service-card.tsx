import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

type ServiceCardProps = { service: Service; active?: boolean; className?: string };

export function ServiceCard({ service, active = false, className }: ServiceCardProps) {
  return <article className={cn("group relative flex h-full min-h-[430px] w-[min(82vw,370px)] shrink-0 snap-center flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-[0_8px_30px_rgb(20_43_53/0.04)] transition-[transform,box-shadow,border-color] duration-500 sm:w-[360px] lg:w-[380px]", active && "border-primary/30 shadow-[0_22px_55px_rgb(20_43_53/0.14)]", className)}>
    <div className="relative aspect-[1.16/1] overflow-hidden bg-muted">
      {service.image ? <Image src={service.image} alt={service.title} fill sizes="(max-width: 640px) 82vw, 380px" className="object-cover transition duration-700 group-hover:scale-105" /> : <div className="h-full bg-gradient-to-br from-secondary to-muted" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur-md">{service.eyebrow}</span>
      <span className="absolute bottom-5 left-5 flex items-center gap-1.5 text-xs font-medium text-white/80"><Clock3 className="size-3.5" />{service.duration}</span>
      {service.featured && <span className="absolute right-5 top-5 rounded-full bg-[#bce8d6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#142b35]">Popular</span>}
    </div>
    <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
      <div><div className="flex items-start justify-between gap-4"><h3 className="font-heading text-xl font-semibold tracking-tight">{service.title}</h3><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight className="size-4" /></span></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p></div>
      <div className="mt-7 flex items-end justify-between border-t border-border/70 pt-4"><span className="font-heading text-2xl font-bold">${service.price.toFixed(2)}</span><span className="text-xs text-muted-foreground">starting price</span></div>
    </div>
  </article>;
}
