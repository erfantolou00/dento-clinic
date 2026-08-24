import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { faqItems } from "@/content/site";

export function FAQ() {
  return (
    <Section id="faq" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <FadeIn>
          <SectionHeader
            label="Good to know"
            title="Questions, answered simply."
            description="Still curious? Our team is one call away and happy to help."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion className="rounded-2xl border border-border/70 bg-card px-6 md:px-8">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={String(index)}>
                <AccordionTrigger className="py-6 text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </Section>
  );
}
