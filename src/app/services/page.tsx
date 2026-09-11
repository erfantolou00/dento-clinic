import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFrame } from "@/components/sections/shared";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description: "Explore Dento dental services, CAD starting fees, and treatment details in Toronto.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteFrame mainClassName="pt-28">
      <section className="page-intro relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.70_0.13_246/0.18),transparent_65%)]"
        />
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow text-primary/70">Dental services</p>
            <h1 className="mt-4 h1 text-balance">
              Thoughtful treatments for healthier, more confident smiles.
            </h1>
            <p className="mt-5 body-lg text-muted-foreground">
              Browse the treatments our team provides, then open any service to see the visit flow, benefits, and starting fee in CAD.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                href={`/services/${service.id}`}
                className="w-full"
              />
            ))}
          </div>

          <Link
            href="/appointment"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Book a consultation
            <ArrowRight className="size-4" />
          </Link>
        </Container>
      </section>
    </SiteFrame>
  );
}
