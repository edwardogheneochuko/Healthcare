import nodemailer from "nodemailer";
import { EmailOptions } from "@/src/types/type";


export async function sendEmail({ to, subject, html }: EmailOptions) {
    // Create a transporter using SMTP (or use a service like Gmail, SendGrid, etc.)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL, // e.g. '"Your App" <no-reply@yourapp.com>'
      to,
      subject,
      html,
    });
  }