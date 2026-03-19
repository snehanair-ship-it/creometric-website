import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, website, message, formName } = data;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Option 1: Send email via Resend (if RESEND_API_KEY is set)
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: process.env.NOTIFICATION_EMAIL || "hello@creometric.com",
          subject: `New Lead: ${name} — ${formName || "Website Form"}`,
          html: `
            <h2>New Form Submission</h2>
            <p><strong>Form:</strong> ${formName || "Unknown"}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
            <hr />
            <p style="color: #888; font-size: 12px;">Submitted from creometric.com</p>
          `,
        }),
      });
    }

    // Option 2: Forward to Google Sheets via webhook (if GOOGLE_SHEETS_WEBHOOK is set)
    if (process.env.GOOGLE_SHEETS_WEBHOOK) {
      await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          formName: formName || "Unknown",
          name,
          phone,
          email,
          website: website || "",
          message: message || "",
        }),
      });
    }

    // Log submission (always visible in Vercel logs)
    console.log("📧 Form submission:", {
      formName,
      name,
      phone,
      email,
      website,
      message: message ? message.substring(0, 100) : "",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
