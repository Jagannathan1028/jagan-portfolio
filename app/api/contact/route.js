import nodemailer from "nodemailer";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

// ✅ OpenAI Setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Portfolio Context
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
    const body = await req.json();

    // 🧠 If chatbot message exists → AI mode
    if (body.message && !body.email) {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: portfolioData },
          { role: "user", content: body.message },
        ],
      });

      return Response.json({
        reply: response.choices[0].message.content,
      });
    }

    // 📩 Otherwise → Contact form mode
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 Email to YOU
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: message,
    });

    // 💌 Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You — I’ll Be in Touch Shortly",
      html: `
        <h2>Hello ${name},</h2>
        <p>
        Thank you for reaching out through my portfolio.
        I have received your message and will get back to you soon.
        </p>
        <p>Best regards,<br/>Jagannathan</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ success: false, error: error.message });
  }
}