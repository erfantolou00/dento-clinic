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
    summary:
      "A precise, tooth-colored restoration for small cavities, chips, and worn surfaces with a finish that blends naturally into your smile.",
    benefits: [
      "Natural shade matching",
      "Comfort-first local anesthesia",
      "Durable composite materials",
      "Same-day restoration",
    ],
    treatmentSteps: [
      "Digital exam and shade selection",
      "Gentle cleaning of the affected area",
      "Layered composite placement",
      "Bite check and polish",
    ],
    idealFor: ["Small cavities", "Chipped teeth", "Worn enamel"],
  },
  {
    id: "invisalign",
    title: "Invisalign / Braces",
    description:
      "Discreet alignment options planned around your bite, lifestyle, and smile goals.",
    price: 88,
    eyebrow: "Orthodontics",
    duration: "45 min",
    image: "/images/servises/Invisalign.avif",
    summary:
      "A modern orthodontic path using clear aligners or braces to improve spacing, crowding, and bite alignment with predictable planning.",
    benefits: [
      "Digital smile planning",
      "Clear aligner options",
      "Progress tracking visits",
      "Comfortable treatment guidance",
    ],
    treatmentSteps: [
      "3D scan and bite assessment",
      "Treatment simulation review",
      "Aligner or braces fitting",
      "Scheduled refinements and retention",
    ],
    idealFor: ["Crowded teeth", "Gaps", "Bite correction"],
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
    summary:
      "A controlled cosmetic whitening visit designed to brighten stains while protecting enamel and gum comfort.",
    benefits: [
      "Clinician-supervised whitening",
      "Even, natural-looking brightness",
      "Sensitivity-aware protocol",
      "Fast visible results",
    ],
    treatmentSteps: [
      "Shade and sensitivity check",
      "Gum protection setup",
      "Whitening gel application",
      "Final shade review and aftercare",
    ],
    idealFor: ["Coffee stains", "Event-ready smiles", "Dull enamel"],
  },
  {
    id: "cleaning",
    title: "Teeth cleaning",
    description:
      "A gentle professional clean that refreshes your smile and supports long-term gum health.",
    price: 55,
    eyebrow: "Preventive",
    duration: "30 min",
    image: "/images/servises/Teethcleaning.avif",
    summary:
      "A preventive visit focused on removing plaque and buildup, polishing the teeth, and catching early signs before they become bigger issues.",
    benefits: [
      "Plaque and tartar removal",
      "Gum health screening",
      "Fresh polish and stain lift",
      "Personal home-care guidance",
    ],
    treatmentSteps: [
      "Gum and enamel check",
      "Ultrasonic and hand scaling",
      "Polish and floss",
      "Prevention recommendations",
    ],
    idealFor: ["Routine care", "Gum maintenance", "Fresh breath"],
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
    summary:
      "A careful tooth-saving treatment that removes infection, relieves pain, and preserves your natural tooth whenever possible.",
    benefits: [
      "Pain relief focused care",
      "Tooth preservation",
      "Digital imaging support",
      "Protective restoration planning",
    ],
    treatmentSteps: [
      "Diagnosis and comfort setup",
      "Canal cleaning and shaping",
      "Sealing the treated tooth",
      "Final restoration recommendation",
    ],
    idealFor: ["Tooth pain", "Deep infection", "Saving natural teeth"],
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Stable, natural-feeling tooth replacement planned with surgical precision.",
    price: 95,
    eyebrow: "Implantology",
    duration: "60 min",
    image: "/images/servises/DentalImplants.avif",
    summary:
      "A long-term replacement option for missing teeth, planned around bone health, bite balance, and a natural final appearance.",
    benefits: [
      "3D-guided planning",
      "Stable tooth replacement",
      "Natural crown aesthetics",
      "Long-term function support",
    ],
    treatmentSteps: [
      "Consultation and 3D imaging",
      "Implant planning and placement",
      "Healing and integration checks",
      "Custom crown attachment",
    ],
    idealFor: ["Missing teeth", "Loose dentures", "Long-term replacement"],
  },
];
