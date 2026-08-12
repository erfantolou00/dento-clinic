import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";

type TeamCardProps = { member: TeamMember; index?: number; className?: string };

export function TeamCard({ member, className }: TeamCardProps) {
  const initials = member.initials ?? member.name.split(" ").map((part) => part[0]).join("");
  return <article className={cn("group", className)}><div className={cn("relative aspect-[.84/1] overflow-hidden rounded-[1.5rem]", member.accent ?? "bg-muted")}>
    {member.image ? <Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 260px" className="object-cover grayscale-[.1] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /> : <div className="flex h-full items-end p-6"><span className="flex size-16 items-center justify-center rounded-2xl bg-white/70 font-heading text-xl font-semibold">{initials}</span></div>}
    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/20 bg-black/25 p-3 text-white backdrop-blur-md"><div><p className="font-medium">{member.name}</p><p className="mt-0.5 text-xs text-white/65">{member.role}</p></div><span className="flex size-9 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:rotate-45"><ArrowUpRight className="size-4" /></span></div>
  </div></article>;
}
