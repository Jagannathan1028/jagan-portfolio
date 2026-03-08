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
      subject: "Thanks for contacting Jagannathan",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for reaching out. I received your message and will reply soon.</p>
        <br/>
        <p>— Jagannathan</p>
      `
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false });
  }
}