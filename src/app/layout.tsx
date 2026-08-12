import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Dental Clinic`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
    <body>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </body>
  </html>
  );
}
