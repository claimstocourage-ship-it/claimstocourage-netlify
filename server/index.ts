import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Resend diagnostic endpoint
  app.get("/api/test-email", async (_req, res) => {
    try {
      const result = await resend.emails.send({
        from: "Claims to Courage <info@claimstocourage.com>",
        to: ["info@claimstocourage.com"],
        subject: "Test email from Railway",
        text: "SMTP test via Resend — if you receive this, email delivery is working!",
      });
      return res.json({ success: true, result });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      await resend.emails.send({
        from: "Claims to Courage <info@claimstocourage.com>",
        to: ["info@claimstocourage.com"],
        cc: ["karly@autoaccident.com", "ed@autoaccident.com", "cerelia@autoaccident.com"],
        replyTo: email,
        subject: `New Contact Form Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f6f0; border-radius: 4px;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 12px;">New Contact Form Submission</h2>
            <p style="color: #555;"><strong>Name:</strong> ${name}</p>
            <p style="color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #c9a84c;">${email}</a></p>
            <p style="color: #555;"><strong>Message:</strong></p>
            <p style="color: #333; background: #fff; padding: 16px; border-left: 3px solid #c9a84c; border-radius: 2px;">${message.replace(/\n/g, "<br>")}</p>
            <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent from claimstocourage.com</p>
          </div>
        `,
      });

      return res.json({ success: true });
    } catch (err) {
      console.error("Email send error:", err);
      return res.status(500).json({ error: "Failed to send email. Please try again." });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
