"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);
  const frameRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }, []);

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-muted shadow-elevated select-none",
        className
      )}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 640px"
        className="object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-px bg-white/80"
        style={{ left: `${position}%` }}
      />

      <input
        type="range"
        min={4}
        max={96}
        value={position}
        aria-label="Compare before and after photographs"
        onChange={(event) => setPosition(Number(event.target.value))}
        onPointerMove={(event) => {
          if (event.buttons === 1) updateFromClientX(event.clientX);
        }}
        className="absolute inset-0 z-10 cursor-ew-resize opacity-0"
      />

      <div
        className="pointer-events-none absolute top-1/2 z-20 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white text-foreground shadow-floating"
        style={{ left: `${position}%` }}
      >
        <span className="text-xs font-semibold" aria-hidden>
          ↔
        </span>
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
        After
      </span>
    </div>
  );
}
