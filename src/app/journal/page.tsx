import Image from "next/image";
import Link from "next/link";
import { SiteFrame } from "@/components/sections/shared";
import { Container } from "@/components/ui/container";
import { journalPosts } from "@/content/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Journal",
  description: "Practical notes on Canadian dental visits, insurance, CDCP, and emergency care from Dento.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <SiteFrame mainClassName="pt-28">
      <section className="page-intro pb-20 pt-10 md:pb-28 md:pt-16">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow text-primary/70">Journal</p>
            <h1 className="mt-4 h1 text-balance">Clearer answers before you sit in the chair.</h1>
            <p className="mt-5 body-lg text-muted-foreground">
              Short reading for Toronto patients: first visits, coverage, and what to do when a tooth will not wait.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {journalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-card transition hover:-translate-y-1 hover:border-primary/20"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="caption text-primary">{post.category} · {post.readTime}</p>
                  <h2 className="mt-3 font-heading text-xl font-semibold text-balance">{post.title}</h2>
                  <p className="mt-3 body-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
