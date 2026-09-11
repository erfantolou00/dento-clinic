import { Clock3, MapPin, TrainFront, Accessibility } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import {
  clinic,
  clinicHours,
  formatClinicAddress,
  formatHoursSummary,
} from "@/content/clinic";
import { toTelHref } from "@/lib/format";

export function VisitInfo({ showMap = true }: { showMap?: boolean }) {
  return (
    <Section id="visit" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn className="space-y-8">
          <SectionHeader
            label="Visit"
            title="King West, with a calmer waiting room."
            description={`${formatClinicAddress()}. ${formatHoursSummary()}.`}
          />
          <ul className="stack-spacing-lg">
            <InfoRow icon={MapPin} label="Address" value={formatClinicAddress()} />
            <InfoRow icon={Clock3} label="Hours" value={formatHoursSummary()} />
            <InfoRow icon={TrainFront} label="Getting here" value={clinic.transit} />
            <InfoRow icon={Accessibility} label="Access" value={clinic.accessibility} />
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href={clinic.mapDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get directions
            </a>
            <a
              href={toTelHref(clinic.phone.e164)}
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold"
            >
              Call {clinic.phone.display}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="space-y-6">
          {showMap && (
            <div className="overflow-hidden rounded-[1.5rem] border border-border/70 shadow-card">
              <iframe
                title="Map of Dento Dental Centre on King Street West, Toronto"
                src={clinic.mapEmbedUrl}
                className="h-72 w-full lg:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
          <div className="rounded-[1.5rem] border border-border/70 bg-card p-6">
            <p className="eyebrow text-primary/70">Hours</p>
            <ul className="mt-4 divide-y divide-border/70">
              {clinicHours.map((item) => (
                <li key={item.day} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="font-medium">{item.day}</span>
                  <span className={item.open ? "text-muted-foreground" : "text-destructive"}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 body-sm text-muted-foreground">{clinic.parking}</p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
        <Icon className="size-4" aria-hidden />
      </span>
      <div>
        <p className="caption text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm leading-relaxed">{value}</p>
      </div>
    </li>
  );
}
