"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ProcessStepCard } from "@/components/ui/process-step";
import { FadeIn } from "@/components/motion/fade-in";
import { processSteps } from "@/content/site";
import { defaultTransition, staggerContainer } from "@/lib/animations";

export function Process() {
  return (
    <Section id="process" spacing="lg" className="relative overflow-hidden">
      {/* پس‌زمینه خیلی ملایم */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.75_0.13_165/0.08),transparent_55%)]"
      />

      <FadeIn className="mb-12 md:mb-16">
        <SectionHeader
          label="Process"
          title="Gentle care lasting smiles"
          description="Examination, treatment planning, expert care, and ongoing oral health support."
        />
      </FadeIn>

      {/* خط اتصال افقی بین کارت‌ها (فقط دسکتاپ) */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[16%] right-[16%] top-[2.6rem] hidden h-px bg-border/70 md:block"
        >
          <motion.div
            className="h-full origin-left bg-primary/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-3 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, index) => (
            <ProcessStepCard key={step.step} step={step} index={index} />
          ))}
        </motion.div>
      </div>

      {/* CTA نرم در انتها */}
      <FadeIn delay={0.25} className="mt-14 flex justify-center md:mt-16">
        <motion.a
          href="#appointment"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={defaultTransition}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/30 hover:bg-secondary"
        >
          Start your journey
          <span className="flex size-7 items-center justify-center rounded-full bg-secondary transition-transform duration-300 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-3.5" />
          </span>
        </motion.a>
      </FadeIn>
    </Section>
  );
}