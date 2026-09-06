import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionProps = React.ComponentProps<"section"> & {
  container?: boolean;
  spacing?: "default" | "lg" | "none";
  surface?: "default" | "muted" | "dark";
};

const spacingMap = {
  none: "section-spacing-none",
  default: "section-spacing-default",
  lg: "section-spacing-lg",
};

const surfaceMap = {
  default: "bg-background/90",
  muted: "bg-muted/35",
  dark: "bg-foreground text-background",
};

export function Section({
  className,
  container = true,
  spacing = "default",
  surface = "default",
  children,
  ...props
}: SectionProps) {
  const content = container ? <Container>{children}</Container> : children;

  return (
    <section
      className={cn(
        "relative border-t border-border/55 first:border-t-0 section-pattern",
        spacingMap[spacing],
        surfaceMap[surface],
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
}
