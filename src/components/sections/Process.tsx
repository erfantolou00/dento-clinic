import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ProcessStepCard } from "@/components/ui/process-step";
import { FadeIn } from "@/components/motion/fade-in";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <Section id="process" spacing="lg">
      <FadeIn className="mb-12 md:mb-16">
        <SectionHeader
          label="Process"
          title="Gentle care lasting smiles"
          description="Examination, treatment planning, expert care, and ongoing oral health support."
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {processSteps.map((step, index) => (
          <FadeIn key={step.step} delay={index * 0.1}>
            <ProcessStepCard step={step} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
