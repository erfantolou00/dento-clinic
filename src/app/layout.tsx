import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, Geist_Mono, Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-token",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-token",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-token",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      suppressHydrationWarning
      className={cn("h-full antialiased", inter.variable, dmSans.variable, geistMono.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('dento-theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={faqJsonLd()} />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
