import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { clinic } from "@/content/clinic";
import { faqItems } from "@/content/faq";
import { services } from "@/content/services";

const defaultTitle = `${siteConfig.name} — Dental clinic in Toronto`;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : defaultTitle;
  const pageDescription = description ?? siteConfig.description;
  const url = absoluteUrl(path);

  return {
    title: title ?? {
      default: defaultTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.legalName,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: "/images/heroBG.avif",
          width: 1600,
          height: 900,
          alt: "Dento dental clinic in Toronto",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: { index: true, follow: true },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.legalName,
    url: siteConfig.url,
    image: absoluteUrl("/images/heroBG.avif"),
    telephone: clinic.phone.e164,
    email: clinic.email,
    priceRange: "$$",
    currenciesAccepted: "CAD",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: ["Toronto", "Liberty Village", "King West", "CityPlace"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        priceCurrency: "CAD",
        price: service.price,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
