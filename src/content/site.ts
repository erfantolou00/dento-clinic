import type {
  Feature,
  NavLink,
  ProcessStep,
  Stat,
} from "@/types";

export const siteConfig = {
  name: "Dento",
  description:
    "A modern dental clinic offering trusted care, gentle treatments, and confident smiles.",
  url: "https://dento-clinic.com",
  teamLead: {
    name: "Luther Coper",
    role: "Team lead",
    href: "#appointment",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About us", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Our approach", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const heroTags = [
  "Dental Care",
  "Teeth Whitening",
  "Medical Checkup",
  "Teeth Cleaning",
  "Dental Fillings",
] as const;

export const aboutStats: Stat[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Worldwide Client Satisfaction" },
  { value: 25, suffix: "+", label: "Expert Members" },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Examination",
    description: "We start with a comprehensive oral health assessment and digital imaging.",
    detail: "Includes X-rays, intraoral scans, and a personalized consultation.",
    icon: "🦷",
  },
  {
    step: 2,
    title: "Treatment Planning",
    description: "We design a customized care plan tailored to your unique needs.",
    detail: "We discuss all options, timelines, and financial considerations.",
    icon: "📋",
  },
  {
    step: 3,
    title: "Expert Care",
    description: "Our specialists provide gentle, precise treatment using the latest technology.",
    detail: "We prioritize your comfort with sedation options and pain-free techniques.",
    icon: "👨‍⚕️",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "We ensure lasting results with follow-up care and preventive guidance.",
    detail: "Regular check-ups and at-home care tips for a lifetime of healthy smiles.",
    icon: "❤️",
  },
];

export const features: Feature[] = [
  {
    title: "Complete Dental Care",
    description: "From preventive care to complex treatments, everything your smile needs is under one roof.",
    icon: "sparkles",
  },
  {
    title: "Affordable Dental Services",
    description: "Clear estimates, flexible plans, and a team that respects your time and budget.",
    icon: "heart",
  },
  {
    title: "Modern, human care",
    description: "Digital diagnostics and thoughtful communication make every visit feel simple.",
    icon: "scan",
  },
];

export const pricingHighlight = {
  title: "Affordable Pricing For Everyone",
  description: "Full coverage for routine checkups & cleanings",
};

export const footerLinks: NavLink[] = [
  { label: "About us", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Our approach", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Appointment", href: "#appointment" },
];

export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
  { label: "X (Twitter)", href: "https://x.com/" },
];

// Re-export from other content files
export { services } from "./services";
export { teamMembers } from "./team";
export { testimonials } from "./testimonials";
export { faqItems } from "./faq";