import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { visitorName, visitorEmail, visitorCountry, projectType, budget, timeline, needsBackend, messages } = body;

    const timestamp = new Date().toISOString();

    const record = {
      visitor_name: visitorName || "Anonymous",
      visitor_email: visitorEmail || null,
      visitor_country: visitorCountry || null,
      project_type: projectType || null,
      budget: budget || null,
      timeline: timeline || null,
      needs_backend: needsBackend || null,
      messages: messages || [],
      created_at: timestamp,
    };

    // Store in Supabase
    const supabase = getSupabase();
    if (supabase) {
      await supabase.from("chatbot_leads").insert([record]).select();
    }

    // Send email summary
    const transporter = getTransporter();
    if (transporter) {
      const emailTo = process.env.EMAIL_USER;
      const messageLog = (messages || [])
        .map((m) => `${m.role === "user" ? "Visitor" : "AI"}: ${m.content}`)
        .join("\n");

      await transporter.sendMail({
        from: emailTo,
        to: emailTo,
        subject: `New Lead from Portfolio Chatbot — ${visitorName || "Anonymous"}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:linear-gradient(135deg,#22d3ee,#f97316);padding:20px;border-radius:12px 12px 0 0;">
              <h2 style="color:#000;margin:0;">New Portfolio Lead</h2>
              <p style="color:#000;opacity:0.7;margin:4px 0 0;">${timestamp}</p>
            </div>
            <div style="background:#0b1220;color:#fff;padding:24px;border-radius:0 0 12px 12px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#94a3b8;">Name</td><td style="padding:8px 0;color:#fff;font-weight:600;">${visitorName || "Not provided"}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="padding:8px 0;color:#22d3ee;">${visitorEmail || "Not provided"}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Country</td><td style="padding:8px 0;color:#fff;">${visitorCountry || "Not provided"}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Project</td><td style="padding:8px 0;color:#fff;">${projectType || "Not provided"}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Budget</td><td style="padding:8px 0;color:#f97316;font-weight:600;">${budget || "Not provided"}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Timeline</td><td style="padding:8px 0;color:#fff;">${timeline || "Not provided"}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Backend</td><td style="padding:8px 0;color:#fff;">${needsBackend || "Not provided"}</td></tr>
              </table>
              ${messageLog ? `
                <hr style="border:none;border-top:1px solid #1e293b;margin:16px 0;" />
                <h3 style="color:#22d3ee;margin:0 0 12px;">Chat History</h3>
                <pre style="background:#1e293b;padding:16px;border-radius:8px;font-size:13px;white-space:pre-wrap;color:#e2e8f0;">${messageLog}</pre>
              ` : ""}
            </div>
          </div>
        `,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Chatbot API Error:", error);
    return Response.json({ success: false, error: error.message });
  }
}
