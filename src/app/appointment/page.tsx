import { Header, Footer } from "@/components/sections/shared";
import { Appointment } from "@/components/sections/appointment/Appointment";

export const metadata = {
  title: "Appointment",
  description: "Book a Dento appointment for consultation, preventive care, or treatment planning.",
};

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
