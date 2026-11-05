import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Basic in-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 4;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

// Clean up stale entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    Array.from(rateLimitMap.entries()).forEach(([ip, timestamps]) => {
      const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(ip);
      } else {
        rateLimitMap.set(ip, active);
      }
    });
  }, 5 * 60 * 1000);
}

export async function POST(request: NextRequest) {
  try {
    // 1. Identify Client IP for basic rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous-client';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a minute before sending another message.',
        },
        { status: 429 }
      );
    }

    // 2. Parse payload
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    const { fullName, email, subject, message, honeypot } = body;

    // 3. Honeypot check (anti-spam bot trap)
    // If hidden honeypot field is filled, silently discard or reject
    if (honeypot && String(honeypot).trim().length > 0) {
      // Simulate normal fast response without sending email
      return NextResponse.json(
        { success: true, message: 'Message processed.' },
        { status: 200 }
      );
    }

    // 4. Server-side validation
    const nameStr = typeof fullName === 'string' ? fullName.trim() : '';
    const emailStr = typeof email === 'string' ? email.trim() : '';
    const subjectStr = typeof subject === 'string' ? subject.trim() : '';
    const messageStr = typeof message === 'string' ? message.trim() : '';

    if (!nameStr || nameStr.length < 2 || nameStr.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please enter your full name (2–100 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailStr || !emailRegex.test(emailStr) || emailStr.length > 150) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!subjectStr || subjectStr.length < 3 || subjectStr.length > 150) {
      return NextResponse.json(
        { success: false, error: 'Please enter a subject (3–150 characters).' },
        { status: 400 }
      );
    }

    if (!messageStr || messageStr.length < 10 || messageStr.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 10 and 5,000 characters.' },
        { status: 400 }
      );
    }

    // 5. Check environment configuration (support both Cloudflare Workers env and process.env)
    let resendApiKey = process.env.RESEND_API_KEY;
    let destinationEmail = process.env.CONTACT_EMAIL || 'jakub.ondreas@gmail.com';

    try {
      const { getCloudflareContext } = await import('@opennextjs/cloudflare');
      const { env } = await getCloudflareContext({ async: true });
      if ((env as any)?.RESEND_API_KEY) {
        resendApiKey = (env as any).RESEND_API_KEY;
      }
      if ((env as any)?.CONTACT_EMAIL) {
        destinationEmail = (env as any).CONTACT_EMAIL;
      }
    } catch {
      // Running outside Cloudflare context
    }

    if (!resendApiKey) {
      // Per requirements:
      // "If the key is missing, show a clear configuration message; do not pretend an email was sent. Keep the app buildable before configuration."
      return NextResponse.json(
        {
          success: false,
          code: 'CONFIG_PENDING',
          title: 'Configuration Notice',
          message:
            'The contact form backend validated your message successfully, but RESEND_API_KEY is not yet configured in the server environment. No email was sent. To receive messages, set RESEND_API_KEY and CONTACT_EMAIL in your environment settings.',
          preview: {
            from: emailStr,
            name: nameStr,
            subject: subjectStr,
          },
        },
        { status: 200 }
      );
    }

    // 6. Deliver email using Resend
    const resend = new Resend(resendApiKey);
    const toRecipient = destinationEmail || 'contact@jakubondreas.com';

    const sendResult = await resend.emails.send({
      from: 'Jakub Ondreas Contact <onboarding@resend.dev>',
      to: [toRecipient],
      replyTo: emailStr,
      subject: `[Website Contact] ${subjectStr} — from ${nameStr}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #2F4332; margin-top: 0;">New Message from Jakub Ondreas Website</h2>
          <p style="font-size: 14px; color: #64748b; margin-bottom: 20px;">
            Submitted on ${new Date().toUTCString()}
          </p>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px;"><strong>Sender Name:</strong> ${escapeHtml(nameStr)}</p>
            <p style="margin: 0 0 8px;"><strong>Sender Email:</strong> <a href="mailto:${escapeHtml(emailStr)}">${escapeHtml(emailStr)}</a></p>
            <p style="margin: 0;"><strong>Subject:</strong> ${escapeHtml(subjectStr)}</p>
          </div>
          <h3 style="color: #334155; margin-bottom: 8px;">Message:</h3>
          <div style="white-space: pre-wrap; background: #ffffff; padding: 16px; border-left: 4px solid #4D6B51; line-height: 1.6; color: #1e293b;">
${escapeHtml(messageStr)}
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">
            Sent securely via Jakub Ondreas's server-side Resend integration.
          </p>
        </div>
      `,
    });

    if (sendResult.error) {
      return NextResponse.json(
        {
          success: false,
          error: `Failed to deliver email through Resend: ${sendResult.error.message}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
        id: sendResult.data?.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'An unexpected error occurred while processing your message.',
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
