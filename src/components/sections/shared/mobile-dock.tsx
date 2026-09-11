import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/content/clinic";
import { toSmsHref, toTelHref } from "@/lib/format";

const actions = [
  {
    href: toTelHref(clinic.phone.e164),
    label: "Call",
    icon: Phone,
    emphasis: false,
  },
  {
    href: toSmsHref(clinic.phone.e164),
    label: "Text",
    icon: MessageCircle,
    emphasis: false,
  },
  {
    href: "/appointment",
    label: "Book",
    icon: CalendarDays,
    emphasis: true,
  },
] as const;

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-60 border-t border-border/70 bg-background/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-floating backdrop-blur-xl md:hidden">
      <nav aria-label="Quick contact" className="grid grid-cols-3 gap-2">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className={
              action.emphasis
                ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-3 text-sm font-semibold text-primary-foreground"
                : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-secondary px-3 text-sm font-semibold text-foreground"
            }
          >
            <action.icon className="size-4" aria-hidden />
            {action.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
