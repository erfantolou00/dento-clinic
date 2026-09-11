import Image from "next/image";
import { SiteFrame } from "@/components/sections/shared";
import { About } from "@/components/sections/about/About";
import { WhyUs } from "@/components/sections/why-us/WhyUs";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn how Dento cares for patients in downtown Toronto with calm exams and clear CAD estimates.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteFrame mainClassName="pt-28">
      <section className="page-intro relative overflow-hidden pb-10 pt-10 md:pt-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow text-primary/70">About Dento</p>
              <h1 className="mt-4 h1 text-balance">
                Calm clinical care with a warmer human rhythm.
              </h1>
              <p className="mt-5 body-lg text-muted-foreground">
                Dento brings precise diagnostics, gentle communication, and thoughtful treatment planning into one King West clinic.
              </p>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.5rem] bg-muted shadow-elevated">
              <Image
                src="/images/about/1_1.avif"
                alt="Dento clinical space and dental care environment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      <About />
      <WhyUs />
    </SiteFrame>
  );
}
