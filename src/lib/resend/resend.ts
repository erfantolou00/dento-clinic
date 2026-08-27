import { Resend } from "resend";

export const appointmentNotificationEmail =
  process.env.APPOINTMENT_NOTIFICATION_EMAIL;

export const appointmentFromEmail =
  process.env.APPOINTMENT_FROM_EMAIL ??
  "Dento <onboarding@resend.dev>";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return new Resend(apiKey);
}