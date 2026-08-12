"use client";
import { Header, Footer } from "@/components/sections/shared-section";
import { Hero } from "@/components/sections/hero-section";
import { About } from "@/components/sections/about-section";
import { Services } from "@/components/sections/services-section";
import { Process } from "@/components/sections/process-section";
import { Team } from "@/components/sections/team-section";
import { WhyUs } from "@/components/sections/why-us-section";
import { Testimonials } from "@/components/sections/testimonials-section";
import { FAQ } from "@/components/sections/faq-section";
import { Appointment } from "@/components/sections/appointment-section";

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
