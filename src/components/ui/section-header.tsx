import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  dark?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {/* Label + Animated Dot */}
      <div
        className={cn(
          "mb-5 flex items-center gap-2.5",
          align === "center" && "justify-center"
        )}
      >
        {/* Animated Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
              dark ? "bg-accent" : "bg-primary"
            )}
          />
          <span
            className={cn(
              "relative inline-flex h-2.5 w-2.5 rounded-full",
              dark ? "bg-accent" : "primary"
            )}
          />
        </span>

        <p
          className={cn(
            "text-sm font-medium tracking-wide",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {label}
        </p>
      </div>

      {/* Title */}
      <h2
        className={cn(
          titleClassName,
          "h2 text-balance",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl body md:body-lg text-balance",
            dark ? "text-white/65" : "text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}