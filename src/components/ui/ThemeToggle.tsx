"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useRef, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  inverted?: boolean;
};

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("storage", callback);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle({ className, inverted = false }: ThemeToggleProps) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const applyTheme = useCallback((nextIsDark: boolean) => {
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("dento-theme", nextIsDark ? "dark" : "light");
  }, []);

  const onToggle = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    const button = buttonRef.current;

    if (!document.startViewTransition || !button) {
      applyTheme(nextIsDark);
      return;
    }

    const rect = button.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--theme-change-x",
      `${rect.left + rect.width / 2}px`
    );
    document.documentElement.style.setProperty(
      "--theme-change-y",
      `${rect.top + rect.height / 2}px`
    );

    document.startViewTransition(() => {
      applyTheme(nextIsDark);
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-border/70 transition hover:bg-secondary",
        inverted && "border-white/20 text-white hover:bg-white/10",
        className
      )}
    >
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}
