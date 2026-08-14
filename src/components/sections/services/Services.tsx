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
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            See all treatments
            <span className="flex size-8 items-center justify-center rounded-full bg-secondary transition-transform group-hover:rotate-45">
              <MoveUpRight className="size-4" />
            </span>
          </a>
        </FadeIn>
      </div>

      {/* Carousel — ساختار صحیح Embla */}
      <div
        className="mt-12 md:mt-16"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Container */}
          <div className="flex gap-4 md:gap-6">
            {services.map((service, index) => {
              const isActive = index === selected;
              return (
                // Slide — بدون transform
                <div
                  key={service.id}
                  className="min-w-0 shrink-0"
                  // عرض را به کارت بسپار (ServiceCard خودش width دارد)
                >
                  {/* Inner wrapper — فقط اینجا scale/opacity */}
                  <div
                    className={cn(
                      "origin-center transition-[transform,opacity] duration-500 ease-out will-change-transform",
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-[0.94] opacity-55"
                    )}
                  >
                    <ServiceCard
                      service={service}
                      active={isActive}
                      className="cursor-pointer"
                      onClick={() => setSelectedService(service)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress + Controls */}
      <div className="mt-8 flex items-center justify-between gap-5">
        <div className="h-px flex-1 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full origin-left bg-primary"
            initial={false}
            animate={{
              scaleX: (selected + 1) / services.length,
            }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={scrollPrev}
            aria-label="Previous service"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-card transition hover:border-primary hover:bg-secondary"
          >
            <ArrowLeft className="size-4" />
          </motion.button>

          <span className="min-w-14 select-none text-center font-mono text-xs text-muted-foreground">
            {String(selected + 1).padStart(2, "0")} /{" "}
            {String(services.length).padStart(2, "0")}
          </span>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={scrollNext}
            aria-label="Next service"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-card transition hover:border-primary hover:bg-secondary"
          >
            <ArrowRight className="size-4" />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
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
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>

              <div className="space-y-5 pr-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-muted-foreground">
                      {selectedService.eyebrow}
                    </p>
                    <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                      {selectedService.title}
                    </h2>
                  </div>
                  {selectedService.duration && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold">
                      <Clock3 className="size-3.5" />
                      {selectedService.duration}
                    </span>
                  )}
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {selectedService.description}
                </p>

                <div className="flex items-baseline gap-2 border-t border-border pt-5">
                  <span className="font-heading text-3xl font-bold">
                    ${selectedService.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    starting price
                  </span>
                </div>

                <a
                  href="#appointment"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
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