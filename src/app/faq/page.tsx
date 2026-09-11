import { SiteFrame } from "@/components/sections/shared";
import { FAQ } from "@/components/sections/faq/FAQ";
import { Appointment } from "@/components/sections/appointment/Appointment";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Answers about Dento appointments, CDCP, insurance, and emergency care in Toronto.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <SiteFrame mainClassName="pt-20">
      <FAQ />
      <Appointment />
    </SiteFrame>
  );
}
