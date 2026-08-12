"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ServiceTag } from "@/components/ui/service-tag";
import { TeamLeadCard } from "@/components/ui/team-lead-card";
import { heroTags, siteConfig } from "@/content/site";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowUpRight, Check } from "lucide-react";
import { PillButton } from "@/components/ui/pill-button";

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden text-white">
      <Image
        src="/images/heroBG.avif"
        alt=""
        fill
        priority
        className="object-cover opacity-40 mix-blend-overlay"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/20" />

      <Container className="relative flex min-h-190 flex-col justify-end pb-10 pt-28 md:min-h-screen md:pb-16 md:pt-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <motion.div variants={fadeUp} transition={defaultTransition} className="max-w-4xl space-y-6 md:space-y-8">
            <p className="eyebrow mb-5 text-white/60">A calmer kind of dental care</p>
            <h1 className="font-heading text-5xl font-bold leading-[0.92] tracking-[-0.055em] text-balance sm:text-6xl md:text-7xl lg:text-[6.25rem]">
              Your best smile,
              <br /><span className="text-[#bce8d6]">beautifully cared for.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Thoughtful dentistry for real life — combining clinical expertise, modern technology, and a softer experience.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PillButton href="#appointment" className="bg-[#bce8d6] text-[#142b35] hover:bg-white">Book your visit <ArrowUpRight className="size-4" /></PillButton>
              <a href="#services" className="inline-flex items-center gap-2 px-2 text-sm font-medium text-white/80 transition hover:text-white"><span className="inline-flex size-6 items-center justify-center rounded-full border border-white/30"><Check className="size-3" /></span>Explore treatments</a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ ...defaultTransition, delay: 0.15 }}>
            <TeamLeadCard
              name={siteConfig.teamLead.name}
              role={siteConfig.teamLead.role}
              href={siteConfig.teamLead.href}
              className="w-full max-w-sm lg:mb-2"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-2 md:mt-14 md:gap-3"
        >
          {heroTags.map((tag) => (
            <ServiceTag key={tag}>{tag}</ServiceTag>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
