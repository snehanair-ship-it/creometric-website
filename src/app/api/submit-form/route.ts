import { NextRequest, NextResponse } from "next/server";

const NOTIFY_EMAIL = "hello@creometric.com";

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

    // Send email notification via Formsubmit.co (works immediately, no API key needed)
    const formsubmitRes = await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New Lead: ${name} — ${formName || "Website Form"}`,
        Name: name,
        Phone: phone,
        Email: email,
        Website: website || "Not provided",
        Message: message || "No message",
        "Form Source": formName || "Unknown",
        _template: "table",
      }),
    });

    if (!formsubmitRes.ok) {
      console.error("Formsubmit error:", await formsubmitRes.text());
    }

    // Log submission (always visible in Vercel logs)
    console.log("Form submission:", {
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
