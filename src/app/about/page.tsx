import Image from "next/image";
import { Header, Footer } from "@/components/sections/shared";
import { About } from "@/components/sections/about/About";
import { WhyUs } from "@/components/sections/why-us/WhyUs";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "About",
  description: "Learn about Dento's calm, modern approach to dental care.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28">
        <section className="relative overflow-hidden pb-10 pt-10 md:pt-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="eyebrow text-primary/70">About Dento</p>
                <h1 className="mt-4 h1 text-balance">
                  Calm clinical care with a warmer human rhythm.
                </h1>
                <p className="mt-5 body-lg text-muted-foreground">
                  Dento brings precise diagnostics, gentle communication, and thoughtful treatment planning into one premium clinic experience.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-muted shadow-elevated">
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
      </main>
      <Footer />
    </div>
  );
}
