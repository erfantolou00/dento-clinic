import { Container } from "@/components/ui/container";
import { PillButton } from "@/components/ui/pill-button";
import { ServiceTag } from "@/components/ui/service-tag";
import { TeamLeadCard } from "@/components/ui/team-lead-card";
import { heroTags } from "@/lib/constants";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden text-white">
      <Container className="relative flex min-h-screen flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32">
        <Image src="/images/hero-bg.webp" alt="Hero" width={1920} height={1080} className="absolute top-0 left-0 w-full h-full object-cover opacity-20" />
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[6.25rem]">
              Keep Smiles
              <br />
              Healthy
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Keep your smile healthy with regular checkups, proper hygiene, and
              expert dental care.
            </p>
          </div>

          <TeamLeadCard
            name="Luther Coper"
            role="Team lead"
            href="#contact"
            className="w-full max-w-sm lg:mb-2"
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-2 md:mt-14 md:gap-3">
          {heroTags.map((tag) => (
            <ServiceTag key={tag}>{tag}</ServiceTag>
          ))}
        </div>
      </Container>
    </section>
  );
}
