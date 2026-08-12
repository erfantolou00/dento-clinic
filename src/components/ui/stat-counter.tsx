"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export function StatCounter({
  value,
  suffix = "",
  label,
  className,
}: StatCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className={cn("space-y-2", className)}>
      <p className="font-heading text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
        {count}
        {suffix}
      </p>
      <p className="max-w-[12rem] text-sm leading-snug text-muted-foreground md:text-base">
        {label}
      </p>
    </div>
  );
}
