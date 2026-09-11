import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionProps = React.ComponentProps<"section"> & {
  container?: boolean;
  spacing?: "default" | "lg" | "none";
  surface?: "default" | "muted" | "mist" | "wash" | "cream" | "dark";
};

const spacingMap = {
  none: "section-spacing-none",
  default: "section-spacing-default",
  lg: "section-spacing-lg",
};

const surfaceMap = {
  default: "surface-canvas",
  muted: "surface-muted",
  mist: "surface-mist",
  wash: "surface-wash",
  cream: "surface-cream",
  dark: "bg-surface-dark text-background",
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
        "relative border-t border-border/40 first:border-t-0",
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
