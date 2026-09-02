import { NextRequest, NextResponse } from "next/server";
import { getResend, CONTACT_EMAIL, FROM_EMAIL } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, organization, email, inquiryType, description } = body;

    if (!name || !email || !inquiryType) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, inquiryType" },
        { status: 400 }
      );
    }

    const resend = getResend();

    await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[Sareen Lab Partnership Inquiry] ${inquiryType} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">
          <h2 style="color: #00D4AA;">New Partnership Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Organization</td><td>${organization || "—"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Inquiry type</td><td>${inquiryType}</td></tr>
          </table>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
          <h3>Program description</h3>
          <p style="white-space: pre-wrap;">${description || "No description provided."}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
