import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footerLinks, socialLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-background py-12 md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Comprehensive dental solutions focused on comfort, quality, and
              long-lasting oral health.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium">Quick Links</p>
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
            <p className="text-sm font-medium">Follow Us</p>
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
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-muted-foreground">
          <p>{new Date().getFullYear()} © Powered by Dento Clinic.</p>
        </div>
      </Container>
    </footer>
  );
}
