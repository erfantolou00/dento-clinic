import { cn } from "@/lib/utils";

type ServiceTagProps = React.ComponentProps<"span">;

export function ServiceTag({ className, children, ...props }: ServiceTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 caption font-medium text-white backdrop-blur-sm",
        "transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
