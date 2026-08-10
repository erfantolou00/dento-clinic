import { cn } from "@/lib/utils";

type ServiceTagProps = React.ComponentProps<"span">;

export function ServiceTag({ className, children, ...props }: ServiceTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
