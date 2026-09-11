import { Header } from "@/components/sections/shared/Header";
import { Footer } from "@/components/sections/shared/Footer";
import { MobileDock } from "@/components/sections/shared/mobile-dock";
import { cn } from "@/lib/utils";

type SiteFrameProps = {
  children: React.ReactNode;
  headerVariant?: "light" | "dark";
  mainClassName?: string;
};

export function SiteFrame({
  children,
  headerVariant = "dark",
  mainClassName,
}: SiteFrameProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header variant={headerVariant} />
      <main
        id="main-content"
        tabIndex={-1}
        className={cn("pb-24 md:pb-0", mainClassName)}
      >
        {children}
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}
