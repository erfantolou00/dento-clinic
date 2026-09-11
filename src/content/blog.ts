export const journalPosts = [
  {
    slug: "first-visit-toronto",
    title: "What a first dental visit in Toronto should actually feel like",
    excerpt:
      "New-patient exams do not need to feel rushed or opaque. Here is how we plan the first hour so you leave with a clear next step.",
    date: "2026-08-12",
    readTime: "5 min",
    category: "Patient care",
    image: "/images/about/1_1.avif",
    content: [
      "The first visit is a conversation as much as an exam. We start with what bothers you, what has worked before, and what you want from your smile in the next year — not a generic checklist.",
      "Digital imaging is used only when it helps the diagnosis. If you already have recent X-rays from another Canadian clinic, bring them. There is no value in repeating pictures you already have.",
      "You should leave with a written plan in CAD, a sense of what insurance or CDCP may cover, and a recommended timeline. Nothing is booked until you are ready.",
      "If dental anxiety is part of your story, say so when you book. We can offer a quieter room, extra time, and a slower pace without making the visit feel clinical or cold.",
    ],
  },
  {
    slug: "cdcp-and-insurance",
    title: "CDCP, private insurance, and what to bring to Dento",
    excerpt:
      "Canadian coverage is rarely one card. A short primer on direct billing, estimates, and the Canadian Dental Care Plan.",
    date: "2026-07-21",
    readTime: "6 min",
    category: "Insurance",
    image: "/images/about/2.jpg",
    content: [
      "Most routine dentistry in Ontario is not covered by OHIP. Private plans, employer benefits, and the Canadian Dental Care Plan sit beside each other, which is why we confirm benefits before larger treatment.",
      "Bring your insurer name, member ID, and any CDCP details. We submit claims electronically to Sun Life, Manulife, Canada Life, Green Shield, Blue Cross, and Desjardins in most cases.",
      "You will still receive a clear estimate of your portion. Direct billing is a convenience, not a blank cheque — we would rather pause than surprise you at reception.",
      "If you are unsure whether a treatment is covered, ask. Preventive visits are usually the easiest to pre-determine. Cosmetic work is usually not.",
    ],
  },
  {
    slug: "emergency-toothache",
    title: "A toothache on a Saturday in the city",
    excerpt:
      "When to wait for Monday, when to call the emergency line, and what to do with a knocked-out tooth before you reach King West.",
    date: "2026-06-04",
    readTime: "4 min",
    category: "Emergency",
    image: "/images/servises/RootCanalTherapy.avif",
    content: [
      "Not every toothache is an emergency, but swelling, fever, trauma, or pain that keeps you awake should not wait. Call the clinic line first; after hours we keep an emergency number staffed for current patients and urgent new-patient trauma.",
      "Over-the-counter pain relief can help, but never place aspirin on the gum. Cold packs on the cheek are safer for swelling while you travel.",
      "If an adult tooth is knocked out, pick it up by the crown, keep it moist in milk, and come in immediately. Minutes matter more than a perfect rinse.",
      "Saturday morning chairs are limited. If your situation can wait, we will say so honestly and book the next proper appointment instead of rushing the wrong treatment.",
    ],
  },
] as const;

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}
