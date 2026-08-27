import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const appointmentNotificationEmail =
  process.env.APPOINTMENT_NOTIFICATION_EMAIL;

export const appointmentFromEmail =
  process.env.APPOINTMENT_FROM_EMAIL ?? "Dento Website <onboarding@resend.dev>";