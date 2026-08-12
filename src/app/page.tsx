import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Appointment } from "@/components/sections/Appointment";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header variant="light" />
      <main>
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
