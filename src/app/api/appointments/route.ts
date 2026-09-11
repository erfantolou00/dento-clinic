import { NextResponse } from "next/server";
import { z } from "zod";
import {
  appointmentNotificationEmail,
  appointmentFromEmail,
  getResend,
} from "@/lib/resend/resend";
import { clinic } from "@/content/clinic";
import { services } from "@/content/services";

const appointmentSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  service: z.string().trim().min(1).max(100),
  date: z.string().trim().min(1).max(30),
  time: z.string().trim().min(1).max(30),
  message: z.string().trim().max(500).optional(),
});

const rateWindowMs = 60 * 60 * 1000;
const rateLimit = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (rateLimit.get(key) ?? []).filter((stamp) => now - stamp < rateWindowMs);
  if (recent.length >= 5) {
    rateLimit.set(key, recent);
    return true;
  }
  recent.push(now);
  rateLimit.set(key, recent);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please call the clinic." },
        { status: 429 }
      );
    }

    const body: unknown = await request.json();
    const result = appointmentSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid appointment information." },
        { status: 400 }
      );
    }

    if (!appointmentNotificationEmail || !appointmentFromEmail) {
      return NextResponse.json(
        { success: false, message: "Appointment service is not configured." },
        { status: 500 }
      );
    }

    const resend = getResend();
    const appointment = result.data;
    const serviceTitle =
      services.find((service) => service.id === appointment.service)?.title ?? appointment.service;

    const clinicMail = await resend.emails.send({
      from: appointmentFromEmail,
      to: appointmentNotificationEmail,
      replyTo: appointment.email,
      subject: `New appointment request — ${appointment.name}`,
      html: buildClinicEmail({ ...appointment, serviceTitle }),
    });

    if (clinicMail.error) {
      return NextResponse.json(
        { success: false, message: clinicMail.error.message },
        { status: 502 }
      );
    }

    await resend.emails.send({
      from: appointmentFromEmail,
      to: appointment.email,
      subject: `We received your Dento visit request`,
      html: buildPatientEmail({ ...appointment, serviceTitle }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function buildClinicEmail(appointment: {
  name: string;
  email: string;
  phone: string;
  serviceTitle: string;
  date: string;
  time: string;
  message?: string;
}) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #17212b; max-width: 640px; margin: 0 auto; padding: 24px;">
      <h2 style="margin: 0 0 16px;">New appointment request</h2>
      <p>A visit request was submitted on the Dento website.</p>
      <p><strong>Name:</strong> ${escapeHtml(appointment.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(appointment.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(appointment.phone)}</p>
      <p><strong>Service:</strong> ${escapeHtml(appointment.serviceTitle)}</p>
      <p><strong>Preferred date:</strong> ${escapeHtml(appointment.date)}</p>
      <p><strong>Preferred time:</strong> ${escapeHtml(appointment.time)}</p>
      ${
        appointment.message
          ? `<p><strong>Message:</strong><br />${escapeHtml(appointment.message)}</p>`
          : ""
      }
    </div>
  `;
}

function buildPatientEmail(appointment: {
  name: string;
  serviceTitle: string;
  date: string;
  time: string;
}) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #17212b; max-width: 640px; margin: 0 auto; padding: 24px;">
      <h2 style="margin: 0 0 16px;">We received your request, ${escapeHtml(appointment.name)}.</h2>
      <p>Thanks for writing to ${escapeHtml(clinic.legalName)}. This is a confirmation that we have your preferred visit for <strong>${escapeHtml(appointment.serviceTitle)}</strong> on <strong>${escapeHtml(appointment.date)}</strong> around <strong>${escapeHtml(appointment.time)}</strong>.</p>
      <p>A teammate will confirm the chair within one business day. If you are in pain, call ${escapeHtml(clinic.phone.display)} or the emergency line ${escapeHtml(clinic.emergencyPhone.display)}.</p>
      <p>${escapeHtml(clinic.address.line1)}<br />${escapeHtml(clinic.address.city)}, ${escapeHtml(clinic.address.region)} ${escapeHtml(clinic.address.postalCode)}</p>
    </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
