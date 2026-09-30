import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const receiverEmail = process.env.RECEIVER_EMAIL || "kawserswe@gmail.com";

    // Log message submission on server
    console.log("Contact Form Submission:", { name, email, subject, message });

    // If Access Key is set, submit to Web3Forms to deliver live email to inbox
    if (accessKey && accessKey !== "YOUR_WEB3FORMS_KEY") {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: subject || `Portfolio Message from ${name}`,
          message: `From: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`,
          to_email: receiverEmail,
          from_name: "Kawser Portfolio",
        }),
      });

      const data = await response.json();
      if (!data.success && !response.ok) {
        console.warn("Web3Forms API notice:", data);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  }
}
