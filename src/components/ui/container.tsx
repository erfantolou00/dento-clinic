import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  as?: "div" | "section" | "header" | "footer" | "main";
};

export function Container({
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("container-default", className)}
      {...props}
    />
  );
}
