"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { PillButton } from "@/components/ui/pill-button";
import { navLinks } from "@/lib/constants";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

type HeaderProps = {
  variant?: "light" | "dark";
};

export function Header({ variant = "dark" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScroll(32);
  const isLight = variant === "light";
  const onHero = isLight && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/50 bg-background/85 shadow-sm backdrop-blur-xl"
          : onHero
            ? "bg-transparent"
            : "bg-background/95 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo variant={onHero ? "light" : "dark"} />

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                  onHero
                    ? "text-white/75 hover:text-white"
                    : "text-foreground/70 hover:text-foreground"
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
              onHero ? "text-white" : "text-foreground"
            )}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-4 py-5">
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
    </header>
  );
}
