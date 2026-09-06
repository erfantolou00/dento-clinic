"use client";

import { Sun, Moon } from "lucide-react";
import { useRef, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document === "undefined"
      ? false
      : document.documentElement.classList.contains("dark")
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  const themeChange = () => {
    const newIsDark = !document.documentElement.classList.contains("dark");
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", newIsDark);
      setIsDark(newIsDark);
    };

    if (!document.startViewTransition) {
      applyTheme();
      return;
    }

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      document.documentElement.style.setProperty("--theme-change-x", `${x}px`);
      document.documentElement.style.setProperty("--theme-change-y", `${y}px`);

      document.startViewTransition(() => {
        applyTheme();
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={themeChange}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex w-full items-center justify-center rounded-md bg-muted p-2 transition-colors hover:bg-secondary md:w-auto md:bg-transparent"
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}

export default ThemeToggle;
