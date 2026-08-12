import type {
  FAQItem,
  Feature,
  NavLink,
  ProcessStep,
  Service,
  Stat,
  TeamMember,
  Testimonial,
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

export const services: Service[] = [
  {
    id: "fillings",
    title: "Dental Fillings",
    description:
      "Natural-looking dental fillings that restore function and confidence.",
    price: 155, eyebrow: "Restorative", duration: "45–60 min", featured: true,
  },
  {
    id: "invisalign",
    title: "Invisalign / Braces",
    description:
      "Restore your smile's natural brilliance with advanced whitening treatments.",
    price: 88, eyebrow: "Orthodontics", duration: "45 min",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Restore your smile's natural brilliance with advanced whitening treatments.",
    price: 48, eyebrow: "Cosmetic", duration: "60 min",
  },
  {
    id: "cleaning",
    title: "Teeth cleaning",
    description:
      "Restore your smile's natural brilliance with advanced whitening treatments.",
    price: 55, eyebrow: "Preventive", duration: "30 min",
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy",
    description:
      "Advanced root canal therapy to relieve pain and preserve your natural tooth.",
    price: 90, eyebrow: "Restorative", duration: "90 min",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Restore your smile's natural brilliance with advanced whitening treatments.",
    price: 95, eyebrow: "Implantology", duration: "60 min",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Schedule Your Visit",
    description:
      "Book your consultation and experience gentle, patient-focused dental care.",
  },
  {
    step: "02",
    title: "Meet Your Dentist",
    description:
      "Dedicated professionals creating confident smiles through expert dental care.",
  },
  {
    step: "03",
    title: "Smile with Confidence",
    description:
      "Transform your smile with personalized dental care and confidence.",
  },
];

export const teamMembers: TeamMember[] = [
  { id: "esther", name: "Esther Howard", role: "General Dentistry", initials: "EH", accent: "bg-[#dcebe3]" },
  { id: "jenny", name: "Jenny Wilson", role: "Cosmetic Dentistry", initials: "JW", accent: "bg-[#e9e0d2]" },
  { id: "jacob", name: "Jacob Jones", role: "Periodontics", initials: "JJ", accent: "bg-[#dce5ee]" },
  { id: "courtney", name: "Courtney Henry", role: "Oral & Implant Surgeon", initials: "CH", accent: "bg-[#e9dfe2]" },
];

export const features: Feature[] = [
  {
    title: "Complete Dental Care",
    description: "From preventive care to complex treatments, everything your smile needs is under one roof.", icon: "sparkles",
  },
  {
    title: "Affordable Dental Services",
    description: "Clear estimates, flexible plans, and a team that respects your time and budget.", icon: "heart",
  },
  {
    title: "Modern, human care",
    description: "Digital diagnostics and thoughtful communication make every visit feel simple.", icon: "scan",
  },
];

export const pricingHighlight = {
  title: "Affordable Pricing For Everyone",
  description: "Full coverage for routine checkups & cleanings",
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "From my first visit, the friendly team made every treatment comfortable, professional, and completely stress-free.",
    author: "Devon Lane",
    role: "Binford Ltd. Owner",
  },
  {
    id: "2",
    quote:
      "The clinic exceeded my expectations. Modern equipment, gentle care, and a team that truly listens to your concerns.",
    author: "Sarah Mitchell",
    role: "Marketing Director",
  },
  {
    id: "3",
    quote:
      "I've never felt more comfortable at a dentist. The whole experience from booking to follow-up was seamless.",
    author: "Michael Chen",
    role: "Software Engineer",
  },
  {
    id: "4",
    quote:
      "Outstanding results on my teeth whitening. Professional, affordable, and the smile I've always wanted.",
    author: "Emma Rodriguez",
    role: "Creative Designer",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What treatment do you offer?",
    answer:
      "We offer a comprehensive range of dental services including cleanings, fillings, teeth whitening, Invisalign, root canal therapy, and dental implants.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting every six months for routine checkups and cleanings. Patients with specific conditions may need more frequent visits.",
  },
  {
    question: "What should I expect during my first appointment?",
    answer:
      "Your first visit includes a thorough examination, digital X-rays if needed, a discussion of your dental history, and a personalized treatment plan.",
  },
  {
    question: "Are you accepting new patients?",
    answer:
      "Yes, we are currently accepting new patients. You can book your first appointment online or by calling our clinic directly.",
  },
  {
    question: "Do you offer emergency dental appointments?",
    answer:
      "Yes, we reserve time slots for dental emergencies. Contact us immediately if you're experiencing severe pain, swelling, or a dental injury.",
  },
];

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
