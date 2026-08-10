"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { PillButton } from "@/components/ui/pill-button";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

type HeaderProps = {
  variant?: "light" | "dark";
};

export function Header({ variant = "dark" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = variant === "light";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md"
          : isLight
            ? "bg-transparent"
            : "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo variant={scrolled || !isLight ? "dark" : "light"} />

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  scrolled || !isLight ? "text-foreground/80" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <PillButton href="#appointment">Book a session</PillButton>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-lg md:hidden",
              scrolled || !isLight ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PillButton href="#appointment" className="w-fit">
              Book a session
            </PillButton>
          </Container>
        </div>
      )}
    </header>
  );
}
