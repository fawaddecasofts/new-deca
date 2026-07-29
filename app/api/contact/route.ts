import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    // ── Courses enrollment form (JSON) ──
    if (contentType.includes("application/json")) {
      const { firstName, lastName, email, phone, course, batch, message } = await req.json();

      const { error } = await resend.emails.send({
        from: "Course Enrollment <info@decasofts.com>",
        to: ["info@decasofts.com"],
        subject: `New Enrollment: ${course} - ${batch}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="background: #c0392b; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
              <img src="https://decasoft-web.vercel.app/Deca-Logo-white.png" alt="Decasofts Logo" style="max-width: 150px; margin-bottom: 10px;" />
              <h1 style="color: white; margin: 0; font-size: 1.4rem;">New Course Enrollment Request</h1>
            </div>
            <div style="padding: 24px; background: #f9f9f9;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333; width: 140px;">Name</td><td style="padding: 12px 8px; color: #555;">${firstName} ${lastName}</td></tr>
                <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Email</td><td style="padding: 12px 8px;"><a href="mailto:${email}" style="color: #c0392b;">${email}</a></td></tr>
                <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Phone</td><td style="padding: 12px 8px; color: #555;">${phone}</td></tr>
                <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Course</td><td style="padding: 12px 8px; color: #555;">${course}</td></tr>
                <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Batch</td><td style="padding: 12px 8px; color: #555;">${batch}</td></tr>
                <tr><td style="padding: 12px 8px; font-weight: bold; color: #333; vertical-align: top;">Message</td><td style="padding: 12px 8px; color: #555; white-space: pre-wrap;">${message || "—"}</td></tr>
              </table>
            </div>
            <div style="background: #1a1a2e; padding: 14px; border-radius: 0 0 6px 6px; text-align: center;">
              <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 0.8rem;">Decasofts — Design | Develop | Deliver</p>
            </div>
          </div>
        `,
      });

      if (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
      }

      // Confirmation email to student
      await resend.emails.send({
        from: "Decasofts <info@decasofts.com>",
        to: [email],
        subject: `Enrollment Received: ${course}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="background: #c0392b; padding: 24px 20px; border-radius: 6px 6px 0 0; text-align: center;">
              <img src="https://decasoft-web.vercel.app/Deca-Logo-white.png" alt="Decasofts Logo" style="max-width: 150px; margin-bottom: 12px;" />
              <h1 style="color: white; margin: 0; font-size: 1.4rem;">Enrollment Request Received!</h1>
            </div>
            <div style="padding: 32px 24px; background: #ffffff;">
              <p style="font-size: 1rem; color: #333; margin: 0 0 16px 0;">Dear <strong>${firstName} ${lastName}</strong>,</p>
              <p style="font-size: 0.95rem; color: #555; line-height: 1.8; margin: 0 0 16px 0;">
                Thank you for enrolling at <strong>Decasofts</strong>! We have received your request and our team will contact you within <strong>24 hours</strong> to confirm your seat.
              </p>
              <div style="background: #f9f9f9; border-left: 4px solid #c0392b; border-radius: 4px; padding: 16px 20px; margin-bottom: 24px;">
                <p style="font-weight: 700; color: #333; margin: 0 0 10px 0; font-size: 0.9rem;">Enrollment Summary:</p>
                <p style="margin: 4px 0; font-size: 0.85rem; color: #555;"><strong>Course:</strong> ${course}</p>
                <p style="margin: 4px 0; font-size: 0.85rem; color: #555;"><strong>Batch:</strong> ${batch}</p>
              </div>
              <div style="text-align: center; margin-bottom: 24px;">
                <a href="https://decasoft-web.vercel.app/courses" style="display: inline-block; background: #c0392b; color: white; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">
                  Explore More Courses
                </a>
              </div>
              <p style="font-size: 0.88rem; color: #888; text-align: center; margin: 0;">
                Questions? Contact us at <a href="mailto:info@decasoft.test" style="color: #c0392b;">info@decasoft.test</a>
              </p>
            </div>
            <div style="background: #1a1a2e; padding: 16px; border-radius: 0 0 6px 6px; text-align: center;">
              <p style="color: rgba(255,255,255,0.7); margin: 0 0 6px 0; font-size: 0.85rem; font-weight: 600;">Decasofts — Design | Develop | Deliver</p>
              <p style="color: rgba(255,255,255,0.4); margin: 0; font-size: 0.75rem;">© 2026 Decasofts. All rights reserved.</p>
            </div>
          </div>
        `,
      });

      return NextResponse.json({ success: true });
    }

    // ── Contact page form (formData) ──
    const formData = await req.formData();

    const name    = formData.get("name")    as string;
    const email   = formData.get("email")   as string;
    const phone   = formData.get("phone")   as string;
    const company = formData.get("company") as string;
    const service = formData.get("service") as string;
    const budget  = formData.get("budget")  as string;
    const message = formData.get("message") as string;
    const file    = formData.get("file")    as File | null;

    const attachments: { filename: string; content: Buffer }[] = [];
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const { error: adminError } = await resend.emails.send({
      from: "Contact Form <info@decasofts.com>",
      to: ["fawadsherwani@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background: #c0392b; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <img src="https://decasoft-web.vercel.app/Deca-Logo-white.png" alt="Decasofts Logo" style="max-width: 150px; margin-bottom: 10px;" />
            <h1 style="color: white; margin: 0; font-size: 1.4rem;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 24px; background: #f9f9f9;">
            <p style="margin: 0 0 20px 0; color: #333;">New Client want to contact.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333; width: 140px;">Name</td><td style="padding: 12px 8px; color: #555;">${name}</td></tr>
              <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Email</td><td style="padding: 12px 8px;"><a href="mailto:${email}" style="color: #c0392b;">${email}</a></td></tr>
              <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Phone</td><td style="padding: 12px 8px; color: #555;">${phone || "—"}</td></tr>
              <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Company</td><td style="padding: 12px 8px; color: #555;">${company || "—"}</td></tr>
              <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Service</td><td style="padding: 12px 8px; color: #555;">${service || "—"}</td></tr>
              <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333;">Budget</td><td style="padding: 12px 8px; color: #555;">${budget || "—"}</td></tr>
              <tr style="border-bottom: 1px solid #e0e0e0;"><td style="padding: 12px 8px; font-weight: bold; color: #333; vertical-align: top;">Message</td><td style="padding: 12px 8px; color: #555; white-space: pre-wrap;">${message || "—"}</td></tr>
              ${file && file.size > 0 ? `<tr><td style="padding: 12px 8px; font-weight: bold; color: #333;">Attachment</td><td style="padding: 12px 8px; color: #555;">📎 ${file.name}</td></tr>` : ""}
            </table>
          </div>
          <div style="background: #1a1a2e; padding: 14px; border-radius: 0 0 6px 6px; text-align: center;">
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 0.8rem;">Decasofts</p>
          </div>
        </div>
      `,
    });

    if (adminError) {
      return NextResponse.json({ success: false, error: adminError }, { status: 400 });
    }

    await resend.emails.send({
      from: "Decasofts <info@decasofts.com>",
      to: [email],
      subject: `Thank you for contacting Decasofts, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background: #c0392b; padding: 24px 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <img src="https://decasoft-web.vercel.app/Deca-Logo-white.png" alt="Decasofts Logo" style="max-width: 150px; margin-bottom: 12px;" />
            <h1 style="color: white; margin: 0; font-size: 1.4rem;">Thank You for Reaching Out!</h1>
          </div>
          <div style="padding: 32px 24px; background: #ffffff;">
            <p style="font-size: 1rem; color: #333; margin: 0 0 16px 0;">Dear <strong>${name}</strong>,</p>
            <p style="font-size: 0.95rem; color: #555; line-height: 1.8; margin: 0 0 16px 0;">
              Thank you for contacting <strong>Decasofts</strong>! We have successfully received your message and our team will get back to you within <strong>24-48 hours</strong>.
            </p>
            <p style="font-size: 0.95rem; color: #555; line-height: 1.8; margin: 0 0 24px 0;">
              In the meantime, feel free to explore our services or follow us on social media for the latest updates.
            </p>
            <div style="background: #f9f9f9; border-left: 4px solid #c0392b; border-radius: 4px; padding: 16px 20px; margin-bottom: 24px;">
              <p style="font-weight: 700; color: #333; margin: 0 0 10px 0; font-size: 0.9rem;">Your Submission Summary:</p>
              <p style="margin: 4px 0; font-size: 0.85rem; color: #555;"><strong>Service:</strong> ${service || "Not specified"}</p>
              <p style="margin: 4px 0; font-size: 0.85rem; color: #555;"><strong>Budget:</strong> ${budget || "Not specified"}</p>
              <p style="margin: 4px 0; font-size: 0.85rem; color: #555;"><strong>Message:</strong> ${message ? message.substring(0, 100) + (message.length > 100 ? "..." : "") : "—"}</p>
            </div>
            <div style="text-align: center; margin-bottom: 24px;">
              <a href="https://decasoft-web.vercel.app" style="display: inline-block; background: #c0392b; color: white; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.5px;">
                Visit Our Website
              </a>
            </div>
            <p style="font-size: 0.88rem; color: #888; text-align: center; margin: 0;">
              If you have any urgent queries, feel free to contact us at
              <a href="mailto:info@decasoft.test" style="color: #c0392b;">info@decasoft.test</a>
            </p>
          </div>
          <div style="background: #1a1a2e; padding: 16px; border-radius: 0 0 6px 6px; text-align: center;">
            <p style="color: rgba(255,255,255,0.7); margin: 0 0 6px 0; font-size: 0.85rem; font-weight: 600;">Decasofts — Design | Develop | Deliver</p>
            <p style="color: rgba(255,255,255,0.4); margin: 0; font-size: 0.75rem;">© 2026 Decasofts. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}