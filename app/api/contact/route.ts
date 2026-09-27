// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  let email: string;
  let message: string;

  try {
    const body = await req.json();
    email = body.email;
    message = body.message;
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const html = `
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding:40px 0;">
  <tr>
    <td align="center">
      <table width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; font-family:Arial, sans-serif;">
        <tr>
          <td style="background-color:#F0D1FF !important; padding:24px; text-align:center;">
            <img src="https://ellajames.vercel.app/email_logo.png" alt="Ella James" width="120" style="display:block; margin:0 auto;" />
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <h2 style="margin:0 0 8px; color:#111111; font-size:20px;">New message from your portfolio</h2>
            <p style="margin:0 0 24px; color:#666666; font-size:14px;">
              From: <a href="mailto:${email}" style="color:#111111;">${email}</a>
            </p>
            <div style="background-color:#f9f9f9; border-radius:8px; padding:20px; color:#333333; font-size:15px; line-height:1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px; background-color:#fafafa; text-align:center;">
            <p style="margin:0; color:#999999; font-size:12px;">Sent from ellajames.vercel.app</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

  // Basic validation
  if (
    !email ||
    !message ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return Response.json(
      { error: 'Email and message are required' },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 });
  }

  if (message.length > 5000) {
    return Response.json({ error: 'Message too long' }, { status: 400 });
  }

  // Actual send, now guarded
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'jamesogechi35@gmail.com',
      subject: `New message from ${email}`,
      html,
      text: message,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send message' },
        { status: 502 },
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error sending email:', err);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
