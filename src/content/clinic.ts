export const clinic = {
  legalName: "Dento Dental Centre",
  publicName: "Dento",
  tagline: "Calm, modern dentistry in downtown Toronto.",
  email: "hello@dento.clinic",
  phone: {
    display: "(416) 555-0188",
    e164: "+14165550188",
  },
  emergencyPhone: {
    display: "(416) 555-0199",
    e164: "+14165550199",
  },
  address: {
    line1: "418 King Street West, Suite 210",
    city: "Toronto",
    region: "ON",
    postalCode: "M5V 1K2",
    country: "Canada",
    neighbourhood: "King West",
  },
  geo: {
    latitude: 43.6465,
    longitude: -79.3921,
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=418%20King%20Street%20West%2C%20Toronto%2C%20ON%20M5V%201K2&z=16&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=418+King+Street+West+Toronto+ON+M5V+1K2",
  calendarUrl: "https://calendly.com/dento-clinic/consultation",
  parking:
    "Paid parking is available at Green P on Widmer Street, a two-minute walk from the clinic. Street parking is limited after 16:00.",
  transit:
    "A short walk from St. Andrew Station and streetcar stops along King Street. Bike rings are at the building entrance.",
  accessibility:
    "Step-free elevator access, accessible washroom, and a quiet waiting room. Tell us in advance if you need extra time or sensory-friendly care.",
  languages: ["English", "French"],
  newPatients: true,
} as const;

export const clinicHours = [
  { day: "Monday", hours: "8:00 am – 6:00 pm", open: true },
  { day: "Tuesday", hours: "8:00 am – 6:00 pm", open: true },
  { day: "Wednesday", hours: "8:00 am – 7:00 pm", open: true },
  { day: "Thursday", hours: "8:00 am – 6:00 pm", open: true },
  { day: "Friday", hours: "8:00 am – 4:00 pm", open: true },
  { day: "Saturday", hours: "9:00 am – 2:00 pm", open: true },
  { day: "Sunday", hours: "Closed", open: false },
] as const;

export const appointmentTimes = [
  "8:00 am",
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:30 pm",
  "2:00 pm",
  "3:00 pm",
  "4:30 pm",
  "6:00 pm",
] as const;

export const insuranceProviders = [
  "Sun Life",
  "Manulife",
  "Canada Life",
  "Green Shield Canada",
  "Ontario Blue Cross",
  "Desjardins",
  "Canadian Dental Care Plan (CDCP)",
] as const;

export const insuranceNotes = [
  {
    title: "Direct billing",
    description:
      "We submit claims electronically to most major Canadian insurers so you can see your portion before you leave.",
  },
  {
    title: "CDCP welcome",
    description:
      "Eligible Canadian Dental Care Plan patients are welcome. Bring your member details and we will confirm coverage before treatment.",
  },
  {
    title: "Provincial plans",
    description:
      "OHIP does not cover routine dental care. We will always explain fees in CAD before treatment starts.",
  },
] as const;

export const paymentOptions = [
  "Visa, Mastercard, and debit",
  "Flexible payment plans for larger treatment",
  "Written estimates before any non-urgent work",
] as const;

export const visitPrep = [
  {
    title: "What to bring",
    items: [
      "A piece of government photo ID",
      "Your dental insurance or CDCP details",
      "A list of medications and medical conditions",
      "Any recent X-rays from another clinic",
    ],
  },
  {
    title: "Before you arrive",
    items: [
      "Please arrive 10 minutes early for new-patient forms",
      "Eat a light meal if you are anxious about sitting with an empty stomach",
      "Skip lipstick or heavy makeup if shade matching is likely",
      "Tell us if you need a quieter room or extra time",
    ],
  },
  {
    title: "If you are in pain",
    items: [
      "Call the clinic before taking extra pain medication so we can advise safely",
      "Bring any swelling photos from the last 24 hours",
      "Do not place aspirin directly on a tooth or gum",
      "For knocked-out teeth, keep the tooth moist in milk and come in immediately",
    ],
  },
] as const;

export const emergencyGuidance = [
  {
    title: "Severe pain or swelling",
    description:
      "Call the emergency line. Facial swelling, fever, or difficulty swallowing needs same-day attention.",
  },
  {
    title: "Broken tooth or lost filling",
    description:
      "Rinse with warm water, avoid chewing on that side, and we will see you as soon as a chair is free.",
  },
  {
    title: "Knocked-out adult tooth",
    description:
      "Pick it up by the crown, keep it moist in milk, and come in immediately. Time matters.",
  },
] as const;

export function formatClinicAddress() {
  const { line1, city, region, postalCode } = clinic.address;
  return `${line1}, ${city}, ${region} ${postalCode}`;
}

export function formatHoursSummary() {
  return "Mon–Thu 8:00–18:00 · Fri 8:00–16:00 · Sat 9:00–14:00";
}
