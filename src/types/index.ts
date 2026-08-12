export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  eyebrow?: string;
  duration?: string;
  featured?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image?: string;
  initials?: string;
  accent?: string;
};

export type Feature = {
  title: string;
  description: string;
  icon?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type AppointmentFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message?: string;
};
