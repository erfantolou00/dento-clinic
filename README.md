# Dento — Dental clinic website

A production-ready Next.js template for Canadian dental clinics. Built to book visits, explain treatment, and look premium on a phone and a desktop.

---

## Features

### Patient conversion
- Sticky mobile dock with **Call**, **Text**, and **Book**
- Appointment form with validation, preferred time, and service prefill (`/appointment?service=whitening`)
- Email to the clinic plus a confirmation to the patient (Resend)
- Calendar link for clinics that already use an online scheduler
- Emergency page and after-hours phone number

### Clinic operations
- Toronto-ready clinic content: NAP, hours, parking, transit, accessibility
- Direct billing copy for major Canadian insurers and **CDCP**
- Clear CAD starting fees, not placeholder USD
- Visit-prep checklists for new patients
- Map embed and Google directions

### Marketing pages
- Full landing: Hero, About, Services carousel, before/after, process, why us, visit, insurance, team, testimonials, FAQ, emergency, appointment
- Inner routes for About, Services, Team, Visit, Journal, FAQ, Process, Appointment, Emergency, Privacy
- Service detail pages with benefits, visit flow, and treatment FAQs
- Journal articles for SEO (first visit, insurance/CDCP, emergency toothache)

### Design system
- Light and dark themes with a circular view-transition toggle
- Alternating section surfaces (mist, wash, cream) so the light theme is not a white sheet
- Shared UI: pill buttons, cards, accordion, form controls, before/after slider
- Motion with reduced-motion support and Lenis smooth scroll

### Technical
- Next.js App Router, TypeScript, Tailwind, shadcn/ui
- Content-driven architecture (`src/content/`) — no CMS required
- SEO: Open Graph, canonical URLs, `sitemap.xml`, `robots.txt`
- JSON-LD for `Dentist` and `FAQPage`
- PIPEDA-oriented privacy page

---

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customize for a clinic

| File | What to change |
|---|---|
| `src/content/clinic.ts` | Address, phone, hours, map, insurance, emergency, visit prep, calendar URL |
| `src/content/site.ts` | Clinic name, navigation, stats |
| `src/content/services.ts` | Treatments and CAD starting fees |
| `src/content/team.ts` | Clinicians |
| `src/content/faq.ts` | Patient questions |
| `src/content/blog.ts` | Journal articles |
| `src/app/globals.css` | Colour tokens and section surfaces |
| `.env.example` | Copy to `.env.local` for Resend |

Environment variables:

```bash
RESEND_API_KEY=
APPOINTMENT_NOTIFICATION_EMAIL=
APPOINTMENT_FROM_EMAIL=
```

---

## Project structure

```text
src/
├── app/                 # Routes, metadata, appointment API
├── components/
│   ├── ui/              # Design-system primitives
│   ├── motion/          # Animation primitives
│   └── sections/        # Page sections
├── content/             # All clinic copy and data
├── hooks/
├── lib/                 # SEO, formatters, mail, tokens
└── types/
```

---

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint |

---

## Deploy

Push to GitHub, import the repo in [Vercel](https://vercel.com), add the Resend environment variables, and deploy.
