import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { FadeIn } from "@/components/motion/fade-in";
import { smileResults } from "@/content/before-after";

export function Results() {
  return (
    <Section id="results" spacing="lg" surface="muted">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
        <FadeIn>
          <SectionHeader
            label="Results"
            title="Quiet, believable changes."
            description="A few treatment stories. These photographs are illustrative; your plan and shade are always personal."
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2">
          {smileResults.map((result, index) => (
            <FadeIn key={result.id} delay={index * 0.08}>
              <article className="stack-spacing-default">
                <BeforeAfterSlider
                  beforeSrc={result.beforeImage}
                  afterSrc={result.afterImage}
                  beforeAlt={result.beforeAlt}
                  afterAlt={result.afterAlt}
                />
                <div>
                  <p className="caption text-primary">{result.treatment}</p>
                  <h3 className="mt-1 font-heading text-xl font-semibold">{result.title}</h3>
                  <p className="mt-2 body-sm text-muted-foreground">{result.note}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
