import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCounter } from "@/components/ui/stat-counter";
import { aboutStats } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20 lg:items-end">
          <div className="space-y-8">
            <SectionHeader
              label="About us"
              title="Creating healthy, confident smiles through advanced dentistry, gentle care, and trusted expertise."
              titleClassName="text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
            />

            <Link
              href="#about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              More About us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:gap-8">
            {aboutStats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
