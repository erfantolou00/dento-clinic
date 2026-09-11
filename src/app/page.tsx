import { SiteFrame } from "@/components/sections/shared";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Services } from "@/components/sections/services/Services";
import { Results } from "@/components/sections/results/Results";
import { Process } from "@/components/sections/process/Process";
import { WhyUs } from "@/components/sections/why-us/WhyUs";
import { VisitInfo } from "@/components/sections/clinic/VisitInfo";
import { Insurance } from "@/components/sections/clinic/Insurance";
import { Team } from "@/components/sections/team/Team";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";
import { FAQ } from "@/components/sections/faq/FAQ";
import { EmergencyCare } from "@/components/sections/clinic/EmergencyCare";
import { Appointment } from "@/components/sections/appointment/Appointment";

export default function Home() {
  return (
    <SiteFrame headerVariant="light">
      <Hero />
      <About />
      <Services />
      <Results />
      <Process />
      <WhyUs />
      <VisitInfo />
      <Insurance />
      <Team />
      <Testimonials />
      <FAQ />
      <EmergencyCare />
      <Appointment />
    </SiteFrame>
  );
}
