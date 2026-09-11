import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { SiteFrame } from "@/components/sections/shared";
import { Container } from "@/components/ui/container";
import { services } from "@/content/site";
import { formatCadFrom } from "@/lib/format";
import { createMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return createMetadata({
    title: service.title,
    description: service.summary ?? service.description,
    path: `/services/${id}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) notFound();

  return (
    <SiteFrame mainClassName="pt-28">
        <section className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_45%_0%,oklch(0.70_0.13_246/0.20),transparent_68%)]"
          />
          <Container>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/75"
            >
              <ArrowLeft className="size-4" />
              All services
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              <div>
                <p className="eyebrow text-primary/70">{service.eyebrow}</p>
                <h1 className="mt-4 h1 text-balance">{service.title}</h1>
                <p className="mt-5 body-lg text-muted-foreground">
                  {service.summary ?? service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {service.duration && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                      <Clock3 className="size-4" />
                      {service.duration}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                    {formatCadFrom(service.price)}
                  </span>
                </div>

                <Link
                  href={`/appointment?service=${service.id}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Book this treatment
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-muted shadow-elevated">
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-surface-muted py-16 md:py-24">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              <DetailPanel title="Benefits" items={service.benefits ?? []} />
              <DetailPanel title="Treatment flow" items={service.treatmentSteps ?? []} />
              <DetailPanel title="Ideal for" items={service.idealFor ?? []} />
            </div>
            {service.faqs && service.faqs.length > 0 && (
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {service.faqs.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-[1.25rem] border border-border/70 bg-card p-6"
                  >
                    <h2 className="font-heading text-lg font-semibold">{item.question}</h2>
                    <p className="mt-2 body-sm text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            )}
          </Container>
        </section>
    </SiteFrame>
  );
}

function DetailPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="h-full rounded-[1.25rem] border border-border/70 bg-card p-6 shadow-card">
      <h2 className="font-heading text-2xl font-semibold">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
