import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_KEY = "03c25fe0-b587-4406-bc6d-c33112140ce0";

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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Send via Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New Lead: ${name} — ${formName || "Website Form"}`,
        from_name: "Creometric Website",
        name,
        phone,
        email,
        website: website || "Not provided",
        message: message || "No message",
        form_source: formName || "Unknown",
      }),
    });

    const result = await res.json();

    if (!result.success) {
      console.error("Web3Forms error:", result);
      return NextResponse.json(
        { error: "Submission failed. Please try again." },
        { status: 500 }
      );
    }

    console.log("Form submission:", {
      formName,
      name,
      phone,
      email,
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
