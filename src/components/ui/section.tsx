import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionProps = React.ComponentProps<"section"> & {
  container?: boolean;
  spacing?: "default" | "lg" | "none";
  surface?: "default" | "muted" | "dark";
};

const spacingMap = {
  none: "",
  default: "py-20 md:py-28",
  lg: "py-24 md:py-32 lg:py-36",
};

const surfaceMap = {
  default: "bg-background",
  muted: "bg-muted/30",
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
      className={cn(spacingMap[spacing], surfaceMap[surface], className)}
      {...props}
    >
      {content}
    </section>
  );
}
