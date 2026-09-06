import { Header, Footer } from "@/components/sections/shared";
import { Process } from "@/components/sections/process/Process";
import { FAQ } from "@/components/sections/faq/FAQ";

export const metadata = {
  title: "Process",
  description: "See how Dento plans each dental visit from exam to follow-up care.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <Process />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
