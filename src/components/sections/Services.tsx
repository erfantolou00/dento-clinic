/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { FadeIn } from "@/components/motion/fade-in";
import { services } from "@/content/site";

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);
  return (
    <Section
      id="services"
      spacing="lg"
      surface="muted"
      className="overflow-hidden"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <FadeIn>
          <SectionHeader
            label="Our expertise"
            title="Care designed around you."
            description="From a simple clean to a complete smile transformation, every treatment starts with listening."
          />
        </FadeIn>
        <FadeIn delay={0.1} className="shrink-0">
          <a
            href="#appointment"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            See all treatments{" "}
            <span className="flex size-8 items-center justify-center rounded-full bg-secondary transition-transform group-hover:rotate-45">
              <MoveUpRight className="size-4" />
            </span>
          </a>
        </FadeIn>
      </div>
      <FadeIn delay={0.12} className="mt-12 md:mt-16">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {services.map((service, index) => (
              <div key={service.id} className="min-w-0">
                <ServiceCard service={service} active={index === selected} />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <div className="mt-8 flex items-center justify-between gap-5">
        <div className="h-px flex-1 bg-border">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((selected + 1) / services.length) * 100}%` }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!emblaApi?.canScrollPrev()}
            aria-label="Previous service"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-card transition hover:border-primary hover:bg-secondary disabled:opacity-35"
          >
            <ArrowLeft className="size-4" />
          </button>
          <span className="min-w-14 text-center font-mono text-xs text-muted-foreground">
            {String(selected + 1).padStart(2, "0")} /{" "}
            {String(services.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!emblaApi?.canScrollNext()}
            aria-label="Next service"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-card transition hover:border-primary hover:bg-secondary disabled:opacity-35"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
