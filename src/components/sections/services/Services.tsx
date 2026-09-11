"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { FadeIn } from "@/components/motion/fade-in";
import { services } from "@/content/site";
import { cn } from "@/lib/utils";

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false, // با loop سازگارتره
    skipSnaps: false,
    loop: true,
    duration: 35, // نرم‌تر از پیش‌فرض
  });

  const [selected, setSelected] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay با توقف در hover
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4200);
    return () => clearInterval(id);
  }, [emblaApi, isPlaying]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Section
      id="services"
      spacing="lg"
      surface="mist"
      className="overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <FadeIn>
          <SectionHeader
            label="Our expertise"
            title="Care designed around you."
            description="From a simple clean to a complete smile transformation, every treatment starts with listening."
          />
        </FadeIn>
        <FadeIn delay={0.1} className="shrink-0">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            aria-label="View all available dental treatments"
          >
            See all treatments
            <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary transition-transform group-hover:rotate-45 group-hover:scale-110">
              <MoveUpRight className="size-4" />
            </span>
          </Link>
        </FadeIn>
      </div>

      {/* Carousel */}
      <div
        className="mt-12 md:mt-16"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollPrev();
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollNext();
          }
        }}
        role="region"
        aria-label="Dental services carousel. Autoplay pauses when hovering over carousel."
      >
        {/* Viewport */}
        <div 
          className="overflow-hidden" 
          ref={emblaRef}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-live="polite"
          aria-atomic="false"
          aria-label="Service cards"
        >
          {/* Container */}
          <div className="flex gap-5 md:gap-7">
            {services.map((service, index) => {
              const isActive = index === selected;
              return (
                <div
                  key={service.id}
                  className="min-w-0 shrink-0"
                  role="group"
                  aria-label={`Service ${index + 1} of ${services.length}: ${service.title}`}
                  aria-current={isActive ? "true" : "false"}
                >
                  {/* Inner wrapper for scale/opacity effects */}
                  <div
                    className={cn(
                      "origin-center transition-[transform,opacity] duration-500 ease-out",
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-[0.95] opacity-60 hover:opacity-80 hover:scale-[0.98]"
                    )}
                  >
                    <ServiceCard
                      service={service}
                      active={isActive}
                      href={`/services/${service.id}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress + Controls */}
      <div className="mt-10 flex items-center justify-between gap-6">
        {/* Enhanced Progress Bar */}
        <div className="flex-1 space-y-2">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/50">
            <motion.div
              className="h-full rounded-full bg-linear-to-r from-primary to-accent"
              initial={false}
              animate={{
                width: `${((selected + 1) / services.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{Math.round(((selected + 1) / services.length) * 100)}%</span>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={scrollPrev}
            aria-label="Previous service"
            className="flex size-12 items-center justify-center rounded-full border-2 border-border bg-card transition-[border-color,background-color,box-shadow] hover:border-primary hover:bg-secondary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <ArrowLeft className="size-5" />
          </motion.button>

          <span className="min-w-16 select-none text-center font-mono text-sm font-medium text-foreground">
            {String(selected + 1).padStart(2, "0")}
            <span className="text-muted-foreground"> / {String(services.length).padStart(2, "0")}</span>
          </span>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={scrollNext}
            aria-label="Next service"
            className="flex size-12 items-center justify-center rounded-full border-2 border-border bg-card transition-[border-color,background-color,box-shadow] hover:border-primary hover:bg-secondary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <ArrowRight className="size-5" />
          </motion.button>
        </div>
      </div>
    </Section>
  );
}
