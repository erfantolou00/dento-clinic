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
        {/* Image Card */}
        <FadeIn className="group relative min-h-105 overflow-hidden rounded-[1.5rem] bg-secondary">
          <Image 
            src="/images/heroBG.avif" 
            alt="A calm, modern Dento clinic environment with natural light and comfortable seating" 
            fill 
            sizes="(max-width: 1024px) 100vw, 45vw" 
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105" 
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-accent-foreground/70 via-accent-foreground/40 to-transparent" />
          {/* Content overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
            <div className="space-y-3">
              <p className="eyebrow text-white/70">Care, reimagined</p>
              <p className="max-w-xs h3 font-medium text-white">
                A softer experience from the moment you walk in.
              </p>
            </div>
            <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:rotate-12 hover:scale-110 shadow-lg">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
        </FadeIn>

        {/* Content Column */}
        <div className="space-y-12">
          <FadeIn className="space-y-8">
            <SectionHeader
              label="About us"
              title="Creating healthy, confident smiles through advanced dentistry, gentle care, and trusted expertise."
              titleClassName="h2"
            />
            <TextLink 
              href="#about" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              More About us
            </TextLink>
          </FadeIn>

          {/* Stats Grid */}
          <div className="grid gap-8 sm:grid-cols-3 lg:gap-8">
            {aboutStats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="text-center sm:text-left"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
