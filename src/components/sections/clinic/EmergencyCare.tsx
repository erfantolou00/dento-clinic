import { PhoneCall } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { clinic, emergencyGuidance } from "@/content/clinic";
import { toTelHref } from "@/lib/format";

export function EmergencyCare() {
  return (
    <Section id="emergency" spacing="lg" surface="wash">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn className="space-y-6">
          <SectionHeader
            label="Emergency"
            title="Same-day help when a tooth will not wait."
            description="Severe pain, swelling, trauma, or a knocked-out tooth should not sit in a search tab. Call us and we will tell you honestly whether to come in now."
          />
          <a
            href={toTelHref(clinic.emergencyPhone.e164)}
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            <PhoneCall className="size-4" aria-hidden />
            Emergency line {clinic.emergencyPhone.display}
          </a>
          <p className="body-sm text-muted-foreground">
            During clinic hours, call {clinic.phone.display}. After hours, use the emergency number for swelling, fever, or trauma.
          </p>
        </FadeIn>
        <div className="grid gap-4">
          {emergencyGuidance.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="rounded-[1.25rem] border border-border/70 bg-card p-6">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 body-sm text-muted-foreground">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
