import { SiteFrame } from "@/components/sections/shared";
import { Appointment } from "@/components/sections/appointment/Appointment";
import { VisitPrep } from "@/components/sections/clinic/VisitPrep";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Appointment",
  description: "Request a Dento visit in Toronto. We confirm by the next business day.",
  path: "/appointment",
});

export default function AppointmentPage() {
  return (
    <SiteFrame mainClassName="pt-20">
      <Appointment />
      <VisitPrep />
    </SiteFrame>
  );
}
