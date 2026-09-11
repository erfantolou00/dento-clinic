import { SiteFrame } from "@/components/sections/shared";
import { VisitInfo } from "@/components/sections/clinic/VisitInfo";
import { VisitPrep } from "@/components/sections/clinic/VisitPrep";
import { Insurance } from "@/components/sections/clinic/Insurance";
import { Appointment } from "@/components/sections/appointment/Appointment";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Visit",
  description: "Hours, map, parking, and visit prep for Dento on King Street West, Toronto.",
  path: "/visit",
});

export default function VisitPage() {
  return (
    <SiteFrame mainClassName="pt-20">
      <VisitInfo />
      <VisitPrep />
      <Insurance />
      <Appointment />
    </SiteFrame>
  );
}
