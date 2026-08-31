import { Resend } from 'resend';

// Force this route to always run on the server at request time (not static)
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Resend ko request time par banate hain, module load par nahi.
// Warna build ke waqt (jahan RESEND_API_KEY set nahi hoti) constructor
// throw kar deta hai aur poori build fail ho jati hai.
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

// Jahan messages aayenge (aapka inbox)
const TO_EMAIL = 'bismanoordeveloper@gmail.com';

export async function POST(request) {
  try {
    const resend = getResend();
    if (!resend) {
      return Response.json(
        { error: 'Email is not configured. Please try again later.' },
        { status: 503 }
      );
    }

    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({ error: 'Please fill in all fields.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      // Test domain — sirf aapke apne (Resend-registered) email par bhej sakta hai.
      // Apna domain verify karne ke baad ise 'Bisma <hello@yourdomain.com>' se badal dena.
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return Response.json({ error: error.message || 'Failed to send.' }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
