"use client";

import * as React from "react";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/content/site";
import { appointmentTimes, clinic, formatHoursSummary } from "@/content/clinic";
import type { AppointmentFormValues } from "@/types";

const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  service: z.string().min(1, "Please select a service."),
  date: z.string().min(1, "Please choose a preferred date."),
  time: z.string().min(1, "Please choose a preferred time."),
  message: z
    .string()
    .max(500, "Please keep your message under 500 characters.")
    .optional(),
});

export function Appointment() {
  return (
    <Suspense>
      <AppointmentInner />
    </Suspense>
  );
}

function AppointmentInner() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? "";
  const defaultService = services.some((service) => service.id === requestedService)
    ? requestedService
    : "";

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { service: defaultService, time: "" },
  });

  const onSubmit = async (values: AppointmentFormValues) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Unable to submit appointment request.");
      }

      setSubmitted(true);
      reset({ service: "", time: "" });
    } catch {
      setSubmitError(
        "We could not send your request. Please call the clinic or try again in a moment."
      );
    }
  };

  const errorFor = (name: keyof AppointmentFormValues) => errors[name]?.message;

  return (
    <Section id="appointment" spacing="lg" surface="muted">
      <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <FadeIn>
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              label="Your next step"
              title="Request a visit. We confirm by the next business day."
              description="Share a preferred date and time. This is a request, not an instant booking — we will call or email to confirm the chair."
            />
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground">
                <CalendarDays className="size-4" aria-hidden="true" />
              </span>
              <span>{formatHoursSummary()}</span>
            </div>
            <a
              href={clinic.calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Or pick a time on our calendar
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm md:p-10">
            {submitted ? (
              <div role="status" className="flex min-h-90 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-2xl font-semibold">
                  We will be in touch shortly.
                </h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  A confirmation is on its way to your email. Our patient-care team will confirm a time within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    reset({ service: "", time: "" });
                  }}
                  className="mt-7 text-sm font-medium text-primary underline underline-offset-4"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-5 sm:grid-cols-2"
              >
                <Field id="name" label="Your name" error={errorFor("name")}>
                  <Input {...register("name")} aria-invalid={Boolean(errors.name)} placeholder="Jane Smith" />
                </Field>
                <Field id="email" label="Email address" error={errorFor("email")}>
                  <Input
                    {...register("email")}
                    aria-invalid={Boolean(errors.email)}
                    type="email"
                    placeholder="jane@email.com"
                    autoComplete="email"
                  />
                </Field>
                <Field id="phone" label="Phone number" error={errorFor("phone")}>
                  <Input
                    {...register("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    type="tel"
                    placeholder="(416) 555-0188"
                    autoComplete="tel"
                  />
                </Field>
                <Field id="service" label="Preferred service" error={errorFor("service")}>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value ?? "")}
                      >
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={Boolean(errors.service)}
                          aria-describedby={errors.service ? "service-error" : undefined}
                          className="h-9 w-full bg-transparent px-2.5 text-base md:text-sm"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
                <Field id="date" label="Preferred date" error={errorFor("date")}>
                  <Input {...register("date")} aria-invalid={Boolean(errors.date)} type="date" />
                </Field>
                <Field id="time" label="Preferred time" error={errorFor("time")}>
                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value ?? "")}
                      >
                        <SelectTrigger
                          id={field.name}
                          aria-invalid={Boolean(errors.time)}
                          className="h-9 w-full bg-transparent px-2.5 text-base md:text-sm"
                        >
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTimes.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
                <Field
                  id="message"
                  label="Anything we should know?"
                  error={errorFor("message")}
                  className="sm:col-span-2"
                >
                  <Textarea
                    {...register("message")}
                    aria-invalid={Boolean(errors.message)}
                    placeholder="Insurance provider, CDCP, anxiety, or a current toothache..."
                  />
                </Field>
                {submitError && (
                  <p
                    role="alert"
                    className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive sm:col-span-2"
                  >
                    {submitError}
                  </p>
                )}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 rounded-full px-6 sm:col-span-2"
                >
                  {isSubmitting ? "Sending…" : "Request an appointment"}{" "}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Button>
                <p className="text-xs leading-relaxed text-muted-foreground sm:col-span-2">
                  By submitting, you agree to be contacted about this request. No treatment is booked until we confirm together.
                </p>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactElement<{ id?: string; "aria-describedby"?: string }>;
}) {
  const errorId = `${id}-error`;

  return (
    <div className={`space-y-2 text-sm font-medium ${className ?? ""}`}>
      <label htmlFor={id} className="block">
        {label}
      </label>
      {React.cloneElement(children, {
        id,
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && (
        <span id={errorId} role="alert" className="block text-xs font-normal text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}
