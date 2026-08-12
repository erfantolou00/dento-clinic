import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";

const avatarColors = [
  "from-blue-100 to-blue-200 text-blue-700",
  "from-violet-100 to-violet-200 text-violet-700",
  "from-emerald-100 to-emerald-200 text-emerald-700",
  "from-amber-100 to-amber-200 text-amber-700",
];

type TeamCardProps = {
  member: TeamMember;
  index?: number;
  className?: string;
};

export function TeamCard({ member, index = 0, className }: TeamCardProps) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <article
      className={cn(
        "group space-y-4 transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
        <div
          className={cn(
            "flex h-full items-end bg-gradient-to-br p-6",
            avatarColors[index % avatarColors.length]
          )}
        >
          <Avatar className="size-16 rounded-xl border-2 border-white/50">
            <AvatarFallback className="rounded-xl bg-white/80 text-lg font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <h3 className="font-heading text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
    </article>
  );
}
