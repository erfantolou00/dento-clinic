import { SiteFrame } from "@/components/sections/shared";
import { EmergencyCare } from "@/components/sections/clinic/EmergencyCare";
import { Appointment } from "@/components/sections/appointment/Appointment";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Emergency",
  description: "Same-day and after-hours dental emergency guidance for Dento patients in Toronto.",
  path: "/emergency",
});

export default function EmergencyPage() {
  return (
    <SiteFrame mainClassName="pt-20">
      <EmergencyCare />
      <Appointment />
    </SiteFrame>
  );
}
