import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jagannathan2810@gmail.com",
        pass: "ziocmgyhfploptko"
      }
    });

    // 📩 Email to YOU
    await transporter.sendMail({
      from: email,
      to: "jagannathan2810@gmail.com",
      subject: `Portfolio Message from ${name}`,
      text: message
    });

    // 💌 Auto Thank-You Email to USER
    await transporter.sendMail({
      from: "jagannathan2810@gmail.com",
      to: email,
      subject: "Thank You — I’ll Be in Touch Shortly",
      html: `
        <h2>Hello ${name},</h2>

<p>
Thank you for getting in touch through my portfolio website.
I have received your message successfully and will review it shortly.
</p>

<p>
I’ll get back to you as soon as possible. I appreciate your interest and
look forward to connecting with you.
</p>

<br/>

<p>Best regards,<br/>Jagannathan</p>
      `
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false });
  }
}