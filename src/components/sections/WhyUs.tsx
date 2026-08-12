import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { PillButton } from "@/components/ui/pill-button";
import { FadeIn } from "@/components/motion/fade-in";
import { features, pricingHighlight } from "@/lib/constants";

export function WhyUs() {
  return (
    <Section id="why-us" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <SectionHeader
            label="Why us"
            title="Why everyone choose us"
            description="Comprehensive dental solutions focused on comfort, quality, and long-lasting oral health."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <FeatureCard feature={feature} />
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.2} className="mt-10 md:mt-14">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/15 bg-primary/5 p-6 md:flex-row md:items-center md:p-8">
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-semibold md:text-2xl">
              {pricingHighlight.title}
            </h3>
            <p className="text-sm text-muted-foreground md:text-base">
              {pricingHighlight.description}
            </p>
          </div>
          <PillButton href="#appointment">Contact Us</PillButton>
        </div>
      </FadeIn>
    </Section>
  );
}
