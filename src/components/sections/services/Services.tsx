"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveUpRight, X, Clock3 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { FadeIn } from "@/components/motion/fade-in";
import { services } from "@/content/site";
import type { Service } from "@/types";
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
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
      surface="muted"
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
          <a
            href="#appointment"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-primary transition-all hover:text-primary/80"
            aria-label="View all available dental treatments"
          >
            See all treatments
            <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary transition-all group-hover:rotate-45 group-hover:scale-110">
              <MoveUpRight className="size-4" />
            </span>
          </a>
        </FadeIn>
      </div>

      {/* Carousel */}
      <div
        className="mt-12 md:mt-16"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        role="region"
        aria-label="Dental services carousel. Autoplay pauses when hovering over carousel."
      >
        {/* Viewport */}
        <div 
          className="overflow-hidden" 
          ref={emblaRef}
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
                      "origin-center transition-all duration-500 ease-out will-change-transform",
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-[0.95] opacity-60 hover:opacity-80 hover:scale-[0.98]"
                    )}
                  >
                    <ServiceCard
                      service={service}
                      active={isActive}
                      className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                      onClick={() => setSelectedService(service)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedService(service);
                        }
                      }}
                      tabIndex={0}
                      aria-label={`View details for ${service.title}`}
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
            className="flex size-12 items-center justify-center rounded-full border-2 border-border bg-card transition-all hover:border-primary hover:bg-secondary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30"
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
            className="flex size-12 items-center justify-center rounded-full border-2 border-border bg-card transition-all hover:border-primary hover:bg-secondary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <ArrowRight className="size-5" />
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card p-6 shadow-2xl md:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Close service details modal"
                autoFocus
              >
                <X className="size-5" />
              </button>

              <div className="space-y-6 pr-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-muted-foreground">
                      {selectedService.eyebrow}
                    </p>
                    <h2 id="modal-title" className="mt-1 h2">
                      {selectedService.title}
                    </h2>
                  </div>
                  {selectedService.duration && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 caption font-semibold">
                      <Clock3 className="size-3.5" />
                      {selectedService.duration}
                    </span>
                  )}
                </div>

                <p className="body text-muted-foreground">
                  {selectedService.description}
                </p>

                <div className="flex items-baseline gap-2 border-t border-border pt-6">
                  <span className="font-heading text-3xl font-bold">
                    ${selectedService.price.toFixed(2)}
                  </span>
                  <span className="body-sm text-muted-foreground">
                    starting price
                  </span>
                </div>

                <a
                  href="#appointment"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:scale-105"
                  aria-label={`Book ${selectedService.title} treatment`}
                >
                  Book this treatment
                  <MoveUpRight className="size-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}