import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCounter } from "@/components/ui/stat-counter";
import { TextLink } from "@/components/ui/text-link";
import { FadeIn } from "@/components/motion/fade-in";
import { aboutStats } from "@/content/site";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <Section id="about" spacing="lg">
      <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
        <FadeIn className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-secondary">
          <Image src="/images/heroBG.avif" alt="A calm, modern Dento clinic environment" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142b35]/65 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white"><div><p className="eyebrow text-white/60">Care, reimagined</p><p className="mt-2 max-w-xs font-heading text-xl font-medium">A softer experience from the moment you walk in.</p></div><span className="flex size-11 items-center justify-center rounded-full bg-[#bce8d6] text-[#142b35]"><ArrowUpRight className="size-5" /></span></div>
        </FadeIn>
        <div>
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
        </div></div>
      </div>
    </Section>
  );
}
