import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    await resend.emails.send({
      from: "The Frontier <noreply@sareenlab.com>",
      to: "Dhruv.Sareen@cshs.org",
      subject: "New Frontier subscriber",
      text: `New subscriber: ${email}`,
    });

    // Confirmation to subscriber
    await resend.emails.send({
      from: "The Frontier <noreply@sareenlab.com>",
      to: email,
      subject: "You're subscribed to The Frontier",
      text: `Thanks for subscribing to The Frontier — thought leadership from the Sareen Lab at Cedars-Sinai.\n\nWe'll reach out when we publish new dispatches, op-eds, and field notes.\n\n— Dhruv Sareen`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
  }
}
