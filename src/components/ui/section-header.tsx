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
      <p
        className={cn(
          "mb-4 text-sm font-medium tracking-wide",
          dark ? "text-white/70" : "text-muted-foreground"
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "h2",
          dark ? "text-white" : "text-foreground",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 body md:body-lg",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
