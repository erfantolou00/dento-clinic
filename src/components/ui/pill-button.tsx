import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

export function PillButton({
  href,
  children,
  className,
  variant = "primary",
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 overflow-hidden rounded-full py-1.5 pl-6 pr-1.5 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "ghost" &&
          "text-white/90 hover:text-white",
        className
      )}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[var(--ease-emphasized)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-x-0 top-full block transition-transform duration-500 ease-[var(--ease-emphasized)] group-hover:-translate-y-full"
        >
          {children}
        </span>
      </span>
      <span
        className={cn(
          "relative flex size-8 items-center justify-center overflow-hidden rounded-full transition-transform duration-500 ease-[var(--ease-emphasized)] group-hover:translate-x-1.5",
          variant === "primary" && "bg-white text-primary",
          variant === "ghost" && "bg-white/15 text-white"
        )}
      >
        <ArrowRight className="size-4 transition-transform duration-500 ease-[var(--ease-emphasized)] group-hover:translate-x-6" />
        <ArrowRight
          aria-hidden
          className="absolute size-4 -translate-x-6 transition-transform duration-500 ease-[var(--ease-emphasized)] group-hover:translate-x-0"
        />
      </span>
    </Link>
  );
}
