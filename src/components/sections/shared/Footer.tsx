import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footerLinks, socialLinks } from "@/content/site";
import { clinic, formatClinicAddress, formatHoursSummary } from "@/content/clinic";
import { toTelHref } from "@/lib/format";

export function Footer() {
  return (
    <footer className="border-t bg-background py-12 md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] md:items-start">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {clinic.tagline} Estimates in CAD, direct billing, and a quieter pace for new patients.
            </p>
            <p className="text-sm text-muted-foreground">{formatClinicAddress()}</p>
            <a
              href={toTelHref(clinic.phone.e164)}
              className="inline-block text-sm font-semibold text-foreground"
            >
              {clinic.phone.display}
            </a>
            <p className="text-sm text-muted-foreground">{formatHoursSummary()}</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium">Clinic</p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium">Connect</p>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a href={`mailto:${clinic.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                {clinic.email}
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            {new Date().getFullYear()} © {clinic.legalName}. Toronto, Canada.
          </p>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy (PIPEDA)
          </Link>
        </div>
      </Container>
    </footer>
  );
}
