import { SiteFrame } from "@/components/sections/shared";
import { Container } from "@/components/ui/container";
import { clinic, formatClinicAddress } from "@/content/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description: "How Dento Dental Centre collects and protects personal information under PIPEDA.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SiteFrame mainClassName="pt-28">
      <section className="pb-20 pt-10 md:pb-28 md:pt-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="eyebrow text-primary/70">Privacy</p>
            <h1 className="h1">Personal information at Dento</h1>
            <p className="body-lg text-muted-foreground">
              {clinic.legalName} ({formatClinicAddress()}) collects only what we need to provide dental care, confirm visits, and bill insurance or CDCP. We follow PIPEDA and applicable Ontario health-information rules.
            </p>
            <h2 className="h3 pt-4">What we collect</h2>
            <p className="body text-muted-foreground">
              Name, contact details, appointment preferences, health history relevant to dentistry, and insurance identifiers you choose to share through the website or in clinic.
            </p>
            <h2 className="h3 pt-4">How we use it</h2>
            <p className="body text-muted-foreground">
              To confirm visits, communicate about treatment, submit claims you authorize, and keep clinical records. Website appointment requests are emailed to the clinic and a confirmation is sent to you.
            </p>
            <h2 className="h3 pt-4">Your choices</h2>
            <p className="body text-muted-foreground">
              Email {clinic.email} or call {clinic.phone.display} to access, correct, or ask questions about personal information. Do not send urgent medical issues only by email.
            </p>
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
