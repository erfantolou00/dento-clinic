import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import {
  insuranceNotes,
  insuranceProviders,
  paymentOptions,
} from "@/content/clinic";

export function Insurance() {
  return (
    <Section id="insurance" spacing="lg" surface="wash">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <FadeIn>
          <SectionHeader
            label="Insurance & fees"
            title="Direct billing, CDCP, and estimates in CAD."
            description="OHIP does not cover routine dentistry. We make private insurance and the Canadian Dental Care Plan easier to use without hiding the fee."
          />
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-3">
          {insuranceNotes.map((note, index) => (
            <FadeIn key={note.title} delay={index * 0.06}>
              <article className="h-full rounded-[1.25rem] border border-border/70 bg-card p-6">
                <ShieldCheck className="size-5 text-primary" aria-hidden />
                <h3 className="mt-4 font-heading text-lg font-semibold">{note.title}</h3>
                <p className="mt-2 body-sm text-muted-foreground">{note.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {insuranceProviders.map((provider) => (
          <span
            key={provider}
            className="rounded-full border border-border/80 bg-card px-4 py-2 text-sm text-muted-foreground"
          >
            {provider}
          </span>
        ))}
      </div>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        {paymentOptions.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </Section>
  );
}
