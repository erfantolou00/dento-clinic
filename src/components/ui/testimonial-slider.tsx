"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

type TestimonialSliderProps = {
  items: Testimonial[];
  className?: string;
};

export function TestimonialSlider({ items, className }: TestimonialSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)}>
      <div className="mb-8 flex items-center justify-between">
        <p className="font-heading text-sm font-medium text-muted-foreground">
          {String(selectedIndex + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {items.map((item) => (
            <div key={item.id} className="min-w-0 flex-[0_0_100%] pr-4">
              <blockquote className="space-y-6">
                <p className="font-heading text-2xl font-medium leading-snug md:text-3xl lg:text-4xl lg:leading-tight">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-medium">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
