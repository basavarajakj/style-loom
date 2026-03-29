import { render } from '@react-email/components';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.RESEND_SMTP_HOST,
  port: Number(process.env.RESEND_SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.RESEND_SMTP_USERNAME,
    pass: process.env.RESEND_SMTP_PASSWORD,
  },
});

export interface SendEmailProps {
  to: string | string[];
  subject: string;
  body: React.ReactElement;
  from?: string;
}

export async function sendEmail({
  to,
  subject,
  body,
  from = 'onboarding@resend.dev',
}: SendEmailProps) {
  try {
    // Convert React email component to HTML
    const emailHtml = await render(body);

    const info = await transporter.sendMail({
      from,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      html: emailHtml,
    });

    return { messageId: info.messageId };
  } catch (err) {
    console.error('Email sending error:', err);
    throw err;
  }
}
