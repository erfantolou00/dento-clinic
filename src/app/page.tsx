import { Header, Footer } from "@/components/sections/shared/index";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Services } from "@/components/sections/services/Services";
import { Process } from "@/components/sections/process/Process";
import { Team } from "@/components/sections/team/Team";
import { WhyUs } from "@/components/sections/why-us/WhyUs";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";
import { FAQ } from "@/components/sections/faq/FAQ";
import { Appointment } from "@/components/sections/appointment/Appointment";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header variant="light" />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Team />
        <Testimonials />
        <FAQ />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
