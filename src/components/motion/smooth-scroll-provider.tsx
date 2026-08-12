"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const smoothScrollOptions = {
  autoRaf: true,
  smoothWheel: true,

  // مقدار کمتر = سنگین‌تر و نرم‌تر
  // مقدار بیشتر = سریع‌تر و responsive‌تر
  lerp: 0.085,

  // سرعت wheel
  wheelMultiplier: 1,

  // جهت اسکرول
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,

  // رفتار touch
  touchMultiplier: 1,

  // اجازه overscroll طبیعی
  overscroll: true,

  // anchor links مثل #services
  anchors: true,
};

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  return (
    <ReactLenis root options={smoothScrollOptions}>
      {children}
    </ReactLenis>
  );
}