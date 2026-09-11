import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "fillings",
    title: "Dental fillings",
    description:
      "Tooth-coloured restorations that repair cavities and chips without a metallic look.",
    price: 225,
    eyebrow: "Restorative",
    duration: "45–60 min",
    featured: true,
    image: "/images/servises/DentalFillings.avif",
    summary:
      "A precise composite restoration for small cavities, chips, and worn edges, shaded to neighbouring enamel.",
    benefits: [
      "Natural shade matching",
      "Comfort-first local anaesthetic",
      "Durable composite materials",
      "Often completed the same day",
    ],
    treatmentSteps: [
      "Exam and shade selection",
      "Gentle cleaning of the affected area",
      "Layered composite placement",
      "Bite check and polish",
    ],
    idealFor: ["Small cavities", "Chipped teeth", "Worn enamel"],
    faqs: [
      {
        question: "Will my insurance cover a filling?",
        answer:
          "Most Canadian private plans and CDCP cover medically necessary fillings. We pre-determine when we can and quote your portion in CAD first.",
      },
      {
        question: "Does a filling hurt?",
        answer:
          "The tooth is numbed first. You should feel pressure, not sharp pain. Tell us if anything feels sharp so we can pause.",
      },
    ],
  },
  {
    id: "invisalign",
    title: "Invisalign / braces",
    description:
      "Discreet alignment planned around your bite, commute, and how you like to be seen at work.",
    price: 4500,
    eyebrow: "Orthodontics",
    duration: "45 min consult",
    image: "/images/servises/Invisalign.avif",
    summary:
      "A digital orthodontic path using clear aligners or braces to improve crowding, spacing, and bite with a preview before you commit.",
    benefits: [
      "3D smile planning",
      "Clear aligner options",
      "Progress visits that fit a downtown schedule",
      "Retention guidance after treatment",
    ],
    treatmentSteps: [
      "Scan and bite assessment",
      "Treatment simulation review",
      "Aligner or braces fitting",
      "Refinements and retainers",
    ],
    idealFor: ["Crowded teeth", "Gaps", "Bite correction"],
    faqs: [
      {
        question: "Is the listed fee the full Invisalign cost?",
        answer:
          "The published number is a starting point in CAD. Final fees depend on case complexity. The consult maps the range before you start.",
      },
    ],
  },
  {
    id: "whitening",
    title: "Teeth whitening",
    description:
      "Clinician-supervised whitening that lifts stains while protecting enamel and gum comfort.",
    price: 399,
    eyebrow: "Cosmetic",
    duration: "60 min",
    image: "/images/servises/TeethWhitening.avif",
    summary:
      "A controlled cosmetic visit designed to brighten coffee, tea, and wine stains without overselling a Hollywood shade.",
    benefits: [
      "Supervised in-office protocol",
      "Even, natural-looking brightness",
      "Sensitivity-aware gel timing",
      "Visible change in a single visit",
    ],
    treatmentSteps: [
      "Shade and sensitivity check",
      "Gum protection setup",
      "Whitening gel application",
      "Aftercare and shade review",
    ],
    idealFor: ["Coffee stains", "Events", "Dull enamel"],
    faqs: [
      {
        question: "Is whitening covered by insurance?",
        answer:
          "Cosmetic whitening is rarely covered by Canadian dental plans. We will say so up front and keep the fee in CAD, with no add-on surprises.",
      },
    ],
  },
  {
    id: "cleaning",
    title: "Exam and cleaning",
    description:
      "A gentle hygiene visit that refreshes your smile and catches small issues before they become emergencies.",
    price: 165,
    eyebrow: "Preventive",
    duration: "50 min",
    image: "/images/servises/Teethcleaning.avif",
    summary:
      "A preventive appointment focused on gum health, stain lift, and a dentist exam so nothing quietly gets worse between visits.",
    benefits: [
      "Plaque and tartar removal",
      "Gum health screening",
      "Polish and stain lift",
      "Personal home-care guidance",
    ],
    treatmentSteps: [
      "Medical history and gum check",
      "Scaling and polish",
      "Dentist exam",
      "Recall recommendation",
    ],
    idealFor: ["Routine care", "New patients", "Gum maintenance"],
    faqs: [
      {
        question: "How often should I book a cleaning?",
        answer:
          "Most healthy adults in our Toronto practice do well every six months. If gums are inflamed, we may suggest a tighter recall.",
      },
    ],
  },
  {
    id: "root-canal",
    title: "Root canal therapy",
    description:
      "Careful treatment to relieve infection and keep a natural tooth whenever it is the wiser long-term choice.",
    price: 895,
    eyebrow: "Restorative",
    duration: "90 min",
    image: "/images/servises/RootCanalTherapy.avif",
    summary:
      "A tooth-saving visit that removes infection, settles pain, and plans a protective restoration afterwards.",
    benefits: [
      "Pain-relief focused care",
      "Preserve the natural tooth",
      "Digital imaging support",
      "Crown planning when needed",
    ],
    treatmentSteps: [
      "Diagnosis and comfort setup",
      "Canal cleaning and shaping",
      "Sealing the treated tooth",
      "Restoration recommendation",
    ],
    idealFor: ["Tooth pain", "Deep infection", "Saving a tooth"],
    faqs: [
      {
        question: "Do I need a crown after a root canal?",
        answer:
          "Often yes for back teeth, because the tooth is more brittle. We explain that fee in CAD before we start so the full path is visible.",
      },
    ],
  },
  {
    id: "implants",
    title: "Dental implants",
    description:
      "Stable tooth replacement planned with 3D imaging, surgical precision, and a natural final crown.",
    price: 2800,
    eyebrow: "Implantology",
    duration: "60 min consult",
    image: "/images/servises/DentalImplants.avif",
    summary:
      "A long-term replacement for missing teeth, planned around bone, bite, and how the crown will look in conversation.",
    benefits: [
      "3D-guided planning",
      "Stable chewing",
      "Natural crown aesthetics",
      "Long-term function",
    ],
    treatmentSteps: [
      "Consultation and 3D imaging",
      "Placement and healing checks",
      "Custom crown",
      "Maintenance visits",
    ],
    idealFor: ["Missing teeth", "Loose dentures", "Long-term replacement"],
    faqs: [
      {
        question: "Is $2,800 CAD the full implant fee?",
        answer:
          "It is a starting surgical fee. The crown, imaging, and any grafting are quoted separately after we see your scan. Nothing proceeds without a written estimate.",
      },
    ],
  },
];
