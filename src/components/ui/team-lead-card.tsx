import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type TeamLeadCardProps = {
  name: string;
  role: string;
  href?: string;
  imageSrc?: string;
  className?: string;
};

export function TeamLeadCard({
  name,
  role,
  href = "#contact",
  imageSrc,
  className,
}: TeamLeadCardProps) {
  return (
    <div
      className={cn(
        "glass-card flex items-center grid-gap-default rounded-2xl card-padding-sm",
        className
      )}
    >
      <Avatar className="size-14 rounded-xl">
        {imageSrc && <AvatarImage src={imageSrc} alt={name} />}
        <AvatarFallback className="rounded-xl bg-white/20 text-white">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 stack-spacing-sm">
        <div>
          <p className="truncate font-semibold text-white">{name}</p>
          <p className="caption text-white/60">{role}</p>
        </div>
        <Link
          href={href}
          className="group inline-flex items-center gap-1.5 caption text-white/80 transition-colors hover:text-white"
        >
          Let&apos;s Talk
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
