"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ServiceTag } from "@/components/ui/service-tag";
import { TeamLeadCard } from "@/components/ui/team-lead-card";
import { heroTags, siteConfig } from "@/content/site";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/animations";
import { Check } from "lucide-react";
import { PillButton } from "@/components/ui/pill-button";

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden text-white">
      {/* Background image with improved gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-surface-dark/95 via-surface-dark/85 to-surface-dark/90 z-0" />
      <Image
        src="/images/heroBG.avif"
        alt="Modern dental clinic interior with natural light and clean design"
        fill
        priority
        className="object-cover object-center scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-surface-dark/70 to-transparent z-0" />

      <Container className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 md:pb-20 md:pt-40 lg:pt-48 z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <motion.div variants={fadeUp} transition={defaultTransition} className="max-w-4xl space-y-6 md:space-y-8">
            <p className="eyebrow mb-5 text-white/70">A calmer kind of dental care</p>
            <h1 className="display text-balance">
              Your best smile,
              <br /><span className="text-accent">beautifully cared for.</span>
            </h1>
            <p className="max-w-xl body-lg text-white/80 leading-relaxed">
              Thoughtful dentistry for real life — combining clinical expertise, modern technology, and a softer experience.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <PillButton 
                href="#appointment" 
                className="bg-accent text-accent-foreground hover:bg-white hover:scale-105 transition-transform duration-300 py-3 pl-8 pr-2 text-base"
              >
                Book your visit
              </PillButton>
              <a 
                href="#services" 
                className="group inline-flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/80 transition-all hover:text-white hover:bg-white/10 rounded-full"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-full border border-white/30 group-hover:border-white/50 group-hover:bg-white/10 transition-all">
                  <Check className="size-4" />
                </span>
                Explore treatments
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ ...defaultTransition, delay: 0.15 }}>
            <TeamLeadCard
              name={siteConfig.teamLead.name}
              role={siteConfig.teamLead.role}
              href={siteConfig.teamLead.href}
              className="w-full max-w-sm lg:mb-2 glass-card"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-3 md:mt-16 md:gap-4"
        >
          {heroTags.map((tag) => (
            <ServiceTag key={tag}>{tag}</ServiceTag>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
