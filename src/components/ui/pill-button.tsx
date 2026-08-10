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
        "group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-medium transition-all",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "ghost" &&
          "text-white/90 hover:text-white",
        className
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "flex size-8 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5",
          variant === "primary" && "bg-white text-primary",
          variant === "ghost" && "bg-white/15 text-white"
        )}
      >
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
