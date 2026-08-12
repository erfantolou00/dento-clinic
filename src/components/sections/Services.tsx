import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { FadeIn } from "@/components/motion/fade-in";
import { services } from "@/lib/constants";

export function Services() {
  return (
    <Section id="services" spacing="lg" surface="muted">
      <FadeIn className="mb-12 md:mb-16">
        <SectionHeader
          label="Services"
          title="Expert care for every smile"
          description="Exceptional dental care for confident, healthy smiles at every stage of life."
        />
      </FadeIn>

      <div className="-mx-4 overflow-x-auto px-4 pb-4 scrollbar-none sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex gap-4 md:gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.05} direction="none">
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
