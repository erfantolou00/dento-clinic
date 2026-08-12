import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-heading text-xl font-bold tracking-tight",
        variant === "light" ? "text-white" : "text-foreground",
        className
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-lg border border-current/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          aria-hidden="true"
        >
          <path
            d="M12 3C9.5 3 8 5 7 7.5 6 10 6 13c0 2.2.8 4.5 2.2 6.2C9.6 20.8 10.8 21 12 21s2.4-.2 3.8-1.8C17.2 17.5 18 15.2 18 13c0-3-1-6.5-3-9.5C14 5 12.5 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {siteConfig.name}
    </Link>
  );
}
