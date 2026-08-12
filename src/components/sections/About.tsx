import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCounter } from "@/components/ui/stat-counter";
import { TextLink } from "@/components/ui/text-link";
import { FadeIn } from "@/components/motion/fade-in";
import { aboutStats } from "@/lib/constants";

export function About() {
  return (
    <Section id="about" spacing="lg">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-20">
        <FadeIn className="space-y-8">
          <SectionHeader
            label="About us"
            title="Creating healthy, confident smiles through advanced dentistry, gentle care, and trusted expertise."
            titleClassName="text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
          />
          <TextLink href="#about">More About us</TextLink>
        </FadeIn>

        <div className="grid gap-10 sm:grid-cols-3 lg:gap-8">
          {aboutStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
