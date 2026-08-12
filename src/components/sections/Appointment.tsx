"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/content/site";
import type { AppointmentFormValues } from "@/types";

const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  service: z.string().min(1, "Please select a service."),
  date: z.string().min(1, "Please choose a preferred date."),
  message: z.string().max(500, "Please keep your message under 500 characters.").optional(),
});

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<AppointmentFormValues>({ resolver: zodResolver(appointmentSchema), defaultValues: { service: "" } });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 450));
    setSubmitted(true);
  };

  const errorFor = (name: keyof AppointmentFormValues) => errors[name]?.message;

  return <Section id="appointment" spacing="lg" surface="muted"><div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20"><FadeIn><div className="lg:sticky lg:top-28"><SectionHeader label="Your next step" title="Let’s make room for your smile." description="Tell us a little about what you need. Our patient care team will get back to you within one business day." /><div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><span className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground"><CalendarDays className="size-4" aria-hidden="true" /></span><span>Mon–Fri, 8:00–18:00 · Sat, 9:00–14:00</span></div></div></FadeIn><FadeIn delay={.1}><div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm md:p-10">{submitted ? <div role="status" className="flex min-h-90 flex-col items-center justify-center text-center"><CheckCircle2 className="size-12 text-primary" aria-hidden="true" /><h3 className="mt-5 font-heading text-2xl font-semibold">We’ll be in touch soon.</h3><p className="mt-3 max-w-sm text-muted-foreground">Thanks for reaching out. We’ve received your request and will contact you to confirm a time.</p><button type="button" onClick={() => { setSubmitted(false); reset(); }} className="mt-7 text-sm font-medium text-primary underline underline-offset-4">Send another request</button></div> : <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2"><Field label="Your name" error={errorFor("name")}><Input {...register("name")} aria-invalid={Boolean(errors.name)} placeholder="Jane Smith" /></Field><Field label="Email address" error={errorFor("email")}><Input {...register("email")} aria-invalid={Boolean(errors.email)} type="email" placeholder="jane@email.com" /></Field><Field label="Phone number" error={errorFor("phone")}><Input {...register("phone")} aria-invalid={Boolean(errors.phone)} type="tel" placeholder="+1 555 000 0000" /></Field><Field label="Preferred service" error={errorFor("service")}><select {...register("service")} aria-invalid={Boolean(errors.service)} className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/30"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}</select></Field><Field label="Preferred date" error={errorFor("date")}><Input {...register("date")} aria-invalid={Boolean(errors.date)} type="date" /></Field><Field label="Anything we should know?" error={errorFor("message")} className="sm:col-span-2"><Textarea {...register("message")} aria-invalid={Boolean(errors.message)} placeholder="A little context helps us prepare..." /></Field><Button type="submit" size="lg" disabled={isSubmitting} className="h-12 rounded-full px-6 sm:col-span-2">{isSubmitting ? "Sending…" : "Request an appointment"} <ArrowUpRight className="size-4" aria-hidden="true" /></Button><p className="text-xs leading-relaxed text-muted-foreground sm:col-span-2">By submitting, you agree to be contacted about your appointment request. No obligation.</p></form>}</div></FadeIn></div></Section>;
}

function Field({ label, error, className, children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return <label className={`space-y-2 text-sm font-medium ${className ?? ""}`}><span>{label}</span>{children}{error && <span role="alert" className="block text-xs font-normal text-destructive">{error}</span>}</label>;
}
