import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteFrame } from "@/components/sections/shared";
import { Container } from "@/components/ui/container";
import { journalPosts, getJournalPost } from "@/content/blog";
import { createMetadata } from "@/lib/seo";

type JournalPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: JournalPostPageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return { title: "Article not found" };
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
  });
}

export default async function JournalPostPage({ params }: JournalPostPageProps) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <SiteFrame mainClassName="pt-28">
      <article className="page-intro pb-20 pt-10 md:pb-28 md:pt-16">
        <Container>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="caption text-primary">
              {post.category} · {post.readTime} · {post.date}
            </p>
            <h1 className="mt-4 h1 text-balance">{post.title}</h1>
            <p className="mt-5 body-lg text-muted-foreground">{post.excerpt}</p>
          </div>
          <div className="relative mx-auto mt-10 aspect-16/8 max-w-4xl overflow-hidden rounded-[1.5rem]">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="body-lg text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>
    </SiteFrame>
  );
}
