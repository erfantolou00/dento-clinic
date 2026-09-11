import type { Feature, NavLink, ProcessStep, Stat } from "@/types";
import { clinic } from "@/content/clinic";

export const siteConfig = {
  name: clinic.publicName,
  legalName: clinic.legalName,
  description:
    "A modern King West dental clinic for Torontonians who want calm exams, clear CAD estimates, and care that respects insurance, CDCP, and busy schedules.",
  url: "https://dento.clinic",
  locale: "en_CA",
  teamLead: {
    name: "Luther Coper",
    role: "Clinical director",
    href: "/appointment",
    image: "/images/team/Howard.avif",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Visit", href: "/visit" },
  { label: "Journal", href: "/journal" },
];

export const heroTags = [
  "Family dentistry",
  "Invisalign",
  "CDCP welcome",
  "Same-week exams",
  "King West, Toronto",
] as const;

export const aboutStats: Stat[] = [
  { value: 15, suffix: "+", label: "Years in practice" },
  { value: 98, suffix: "%", label: "Patient satisfaction" },
  { value: 12, suffix: "+", label: "Clinicians & hygienists" },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Listen and examine",
    description: "We start with your history, a calm exam, and imaging only when it changes the plan.",
    detail: "New patients should allow about 60 minutes, including time for questions.",
    icon: "scan",
  },
  {
    step: 2,
    title: "Plan in plain language",
    description: "You receive options, timelines, and a CAD estimate before any non-urgent treatment.",
    detail: "We pre-determine insurance or CDCP coverage whenever the plan allows.",
    icon: "clipboard",
  },
  {
    step: 3,
    title: "Treat with unhurried care",
    description: "Appointments are paced for comfort, with breaks, numbing, and clear check-ins.",
    detail: "If you need extra time or a quieter room, say so when you book.",
    icon: "sparkles",
  },
  {
    step: 4,
    title: "Stay ahead of problems",
    description: "Recalls, home care, and honest advice so small issues do not become Saturday emergencies.",
    detail: "Most healthy adults do well with a visit every six months.",
    icon: "heart",
  },
];

export const features: Feature[] = [
  {
    title: "Complete dental care",
    description: "Prevention, restorations, whitening, alignment, and implants in one King West clinic.",
    icon: "sparkles",
  },
  {
    title: "Clear Canadian billing",
    description: "Estimates in CAD, direct billing to major insurers, and CDCP support without surprise add-ons.",
    icon: "heart",
  },
  {
    title: "Modern, human visits",
    description: "Digital diagnostics, elevator access, and a quieter pace for patients who dislike rushing.",
    icon: "scan",
  },
];

export const pricingHighlight = {
  title: "Transparent CAD fees",
  description: "Written estimates before treatment. Routine exams and cleanings are easy to pre-determine with most plans.",
};

export const footerLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Visit us", href: "/visit" },
  { label: "Emergency", href: "/emergency" },
  { label: "Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Book a visit", href: "/appointment" },
];

export const socialLinks: NavLink[] = [
  { label: "Google reviews", href: "https://www.google.com/maps/search/?api=1&query=Dento+Dental+Centre+Toronto" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export { services } from "./services";
export { teamMembers } from "./team";
export { testimonials } from "./testimonials";
export { faqItems } from "./faq";
export { journalPosts } from "./blog";
export { smileResults } from "./before-after";
