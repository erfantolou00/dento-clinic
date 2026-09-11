import Link from "next/link";
import { SiteFrame } from "@/components/sections/shared";
import { Container } from "@/components/ui/container";
import { PillButton } from "@/components/ui/pill-button";

export default function NotFound() {
  return (
    <SiteFrame mainClassName="flex min-h-[70vh] items-center pt-28">
      <Container>
        <div className="max-w-xl space-y-6">
          <p className="eyebrow text-primary/70">404</p>
          <h1 className="h1">That page is not on the chart.</h1>
          <p className="body-lg text-muted-foreground">
            The link may be outdated. Head home, review treatments, or request a visit.
          </p>
          <div className="flex flex-wrap gap-3">
            <PillButton href="/">Back home</PillButton>
            <Link href="/appointment" className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold">
              Book a visit
            </Link>
          </div>
        </div>
      </Container>
    </SiteFrame>
  );
}
