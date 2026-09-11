"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ProcessStepCard } from "@/components/ui/process-step";
import { FadeIn } from "@/components/motion/fade-in";
import { processSteps } from "@/content/site";
import { defaultTransition, staggerContainer } from "@/lib/animations";

export function Process() {
  return (
    <Section id="process" spacing="lg" className="relative overflow-hidden bg-surface-muted">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.70_0.13_246/0.18),transparent_65%)]"
      />

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        <FadeIn className="lg:sticky lg:top-28">
          <SectionHeader
            label="Process"
            title="A calm path from first look to lasting care."
            description="Every visit follows a clear rhythm: understand, plan, treat, and support. Nothing rushed, nothing vague."
          />

          <div className="mt-8 space-y-4 rounded-[1.5rem] border border-primary/15 bg-primary p-6 text-primary-foreground shadow-elevated">
            <p className="font-heading text-2xl font-semibold leading-tight">
              Designed to lower anxiety and increase clarity.
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {[
                "Digital-first assessment",
                "Transparent treatment options",
                "Follow-up that protects results",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <motion.a
              href="/process"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={defaultTransition}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-accent"
            >
              View full process
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
            </motion.a>
          </div>
        </FadeIn>

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-10 left-6 top-8 hidden w-px bg-border md:block"
          >
            <motion.div
              className="h-full origin-top bg-primary"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            />
          </div>

          <motion.div
            className="grid gap-5 md:pl-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <span
                  aria-hidden
                  className="absolute left-[-3.05rem] top-7 hidden size-4 rounded-full border-4 border-surface-muted bg-primary md:block"
                />
                <ProcessStepCard step={step} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <FadeIn delay={0.25} className="mt-14 flex justify-center md:mt-16 lg:hidden">
        <motion.a
          href="/appointment"
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
