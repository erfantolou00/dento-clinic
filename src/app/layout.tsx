import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Dental Clinic`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
