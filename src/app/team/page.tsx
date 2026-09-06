import { Header, Footer } from "@/components/sections/shared";
import { Team } from "@/components/sections/team/Team";
import { Appointment } from "@/components/sections/appointment/Appointment";

export const metadata = {
  title: "Team",
  description: "Meet the Dento clinicians and dental care specialists.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <Team />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
