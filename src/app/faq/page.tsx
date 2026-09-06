import { Header, Footer } from "@/components/sections/shared";
import { FAQ } from "@/components/sections/faq/FAQ";
import { Appointment } from "@/components/sections/appointment/Appointment";

export const metadata = {
  title: "FAQ",
  description: "Answers to common questions about Dento appointments, treatments, and care.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <FAQ />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
