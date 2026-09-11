import { SiteFrame } from "@/components/sections/shared";
import { Process } from "@/components/sections/process/Process";
import { FAQ } from "@/components/sections/faq/FAQ";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our approach",
  description: "See how Dento plans each dental visit in Toronto from exam to follow-up care.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <SiteFrame mainClassName="pt-20">
      <Process />
      <FAQ />
    </SiteFrame>
  );
}
