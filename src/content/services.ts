import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "fillings",
    title: "Dental Fillings",
    description:
      "Natural-looking dental fillings that restore function and confidence.",
    price: 155,
    eyebrow: "Restorative",
    duration: "45–60 min",
    featured: true,
    image: "/images/servises/DentalFillings.avif",
  },
  {
    id: "invisalign",
    title: "Invisalign / Braces",
    description:
      "Restore your smile's natural brilliance with advanced whitening treatments.",
    price: 88,
    eyebrow: "Orthodontics",
    duration: "45 min",
    image: "/images/servises/Invisalign.avif",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Restore your smile's natural brilliance with advanced whitening treatments.",
    price: 48,
    eyebrow: "Cosmetic",
    duration: "60 min",
    image: "/images/servises/TeethWhitening.avif",
  },
  {
    id: "cleaning",
    title: "Teeth cleaning",
    description:
      "Restore your smile's natural brilliance with advanced whitening treatments.",
    price: 55,
    eyebrow: "Preventive",
    duration: "30 min",
    image: "/images/servises/Teethcleaning.avif",
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    description:
      "Advanced root canal therapy to relieve pain and preserve your natural tooth.",
    price: 90,
    eyebrow: "Restorative",
    duration: "90 min",
    image: "/images/servises/RootCanalTherapy.avif",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Restore your smile's natural brilliance with advanced whitening treatments.",
    price: 95,
    eyebrow: "Implantology",
    duration: "60 min",
    image: "/images/servises/DentalImplants.avif",
  },
];