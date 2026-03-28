import nodemailer from "nodemailer";
import OpenAI from "openai";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const portfolioData = `
You are an AI assistant for Jagannathan (Full Stack Developer).

Details:
- Skills: Angular, Spring Boot, .NET, SQL, Azure
- Experience: 2+ years
- Location: Chennai
- Salary Expectation: 6-10 LPA
- Projects: Hospital Management, Grocery App, Portfolio

Rules:
- Answer like a professional assistant
- Help recruiters
- Be confident but not arrogant
- If unknown → respond politely
`;


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
      text: message,
      mail: email
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

   const { message } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: portfolioData },
      { role: "user", content: message },
    ],
  });

  return Response.json({
    reply: response.choices[0].message.content,
  });
}