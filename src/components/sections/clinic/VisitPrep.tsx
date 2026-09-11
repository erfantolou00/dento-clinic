import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { visitPrep } from "@/content/clinic";

export function VisitPrep() {
  return (
    <Section id="prepare" spacing="lg" surface="cream">
      <FadeIn>
        <SectionHeader
          label="Prepare"
          title="A quieter first hour starts before you arrive."
          description="Bring ID and insurance details, come a few minutes early, and tell us if you need extra time."
        />
      </FadeIn>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {visitPrep.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.06}>
            <article className="h-full rounded-[1.25rem] border border-border/70 bg-card p-6">
              <h3 className="font-heading text-xl font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="body-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
