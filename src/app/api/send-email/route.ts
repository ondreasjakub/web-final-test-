import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";

const RECIPIENT = "jakub.ondreas@gmail.com";
// Note: OpenNext compiles all routes directly to the Cloudflare Worker runtime
// (nodejs_compat), so explicit 'export const runtime = "edge"' is not needed and rejected by OpenNext.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { subject, html, text, fullName, email, message } = body;

    const emailSubject = subject || (fullName ? `Message from ${fullName}` : undefined);
    if (!emailSubject) return NextResponse.json({ error: "Missing subject" }, { status: 400 });

    let apiKey: string | undefined = process.env.RESEND_API_KEY;
    try {
      const { env } = await getCloudflareContext({ async: true });
      if ((env as { RESEND_API_KEY?: string })?.RESEND_API_KEY) {
        apiKey = (env as { RESEND_API_KEY?: string }).RESEND_API_KEY;
      }
    } catch {
      // Fallback to process.env if outside Cloudflare context
    }

    if (!apiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY not set" }, { status: 500 });
    }

    const emailHtml =
      html ??
      (message
        ? `<div style="font-family: sans-serif; padding: 20px;">
            <h3>New contact message from ${fullName || 'Website Visitor'}</h3>
            <p><strong>Email:</strong> ${email || 'Not specified'}</p>
            <p><strong>Subject:</strong> ${emailSubject}</p>
            <hr />
            <p style="white-space: pre-wrap;">${message}</p>
          </div>`
        : text);

    const emailText = text ?? message ?? '';

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: RECIPIENT,
        subject: emailSubject,
        html: emailHtml ?? emailText,
        text: emailText,
        ...(email ? { reply_to: email } : {}),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: `Resend ${res.status}: ${await res.text()}` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ success: true, id: data.id, sent_to: RECIPIENT });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Unknown error" }, { status: 500 });
  }
}
