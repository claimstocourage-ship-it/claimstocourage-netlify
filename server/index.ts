import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import mysql from "mysql2/promise";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

const PDF_URL = "https://pub-650ec695e808480cb5eb866dc2b5f537.r2.dev/ClaimsToCourage_9977a535.pdf";
const AUDIO_URL = "https://pub-650ec695e808480cb5eb866dc2b5f537.r2.dev/ClaimsToCourage_Audiobook_f621565c.mp3";

const OFFICE_EMAILS = [
  "info@claimstocourage.com",
  "karly@autoaccident.com",
  "ed@autoaccident.com",
  "cerelia@autoaccident.com",
];

// ─── MySQL-backed counters (permanent, survives redeploys) ───────────────────
let db: mysql.Pool | null = null;

async function getDb(): Promise<mysql.Pool> {
  if (!db) {
    const url = process.env.MYSQL_URL;
    if (!url) throw new Error("MYSQL_URL not set");
    db = mysql.createPool(url);
    await db.execute(`
      CREATE TABLE IF NOT EXISTS book_counters (
        delivery_type VARCHAR(20) PRIMARY KEY,
        count INT NOT NULL DEFAULT 0
      )
    `);
    for (const type of ["pdf", "audio", "physical"]) {
      await db.execute(
        "INSERT IGNORE INTO book_counters (delivery_type, count) VALUES (?, 0)",
        [type]
      );
    }
  }
  return db;
}

async function getCounters() {
  try {
    const pool = await getDb();
    const [rows] = await pool.execute("SELECT delivery_type, count FROM book_counters") as [any[], any];
    const counts: Record<string, number> = { pdf: 0, audio: 0, physical: 0 };
    for (const row of rows) counts[row.delivery_type] = row.count;
    counts.total = counts.pdf + counts.audio + counts.physical;
    return counts;
  } catch {
    return { pdf: 0, audio: 0, physical: 0, total: 0 };
  }
}

async function incrementCounter(deliveryType: string) {
  try {
    const pool = await getDb();
    await pool.execute(
      "UPDATE book_counters SET count = count + 1 WHERE delivery_type = ?",
      [deliveryType]
    );
  } catch (err) {
    console.error("Failed to increment counter:", err);
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // CORS — allow requests from claimstocourage.com and Netlify preview URLs
  app.use((req, res, next) => {
    const origin = req.headers.origin || "";
    const allowed = [
      "https://claimstocourage.com",
      "https://www.claimstocourage.com",
    ];
    if (allowed.includes(origin) || origin.endsWith(".netlify.app")) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
    }
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  app.use(express.json());

  // Resend diagnostic endpoint
  app.get("/api/test-email", async (_req, res) => {
    try {
      const result = await resend.emails.send({
        from: "Claims to Courage <info@claimstocourage.com>",
        to: ["cerelia@autoaccident.com"],
        subject: "Test email from Railway",
        text: "Resend test via Railway — if you receive this, email delivery is working!",
      });
      return res.json({ success: true, result });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // Live counters endpoint
  app.get("/api/counters", async (_req, res) => {
    const counts = await getCounters();
    res.set("Cache-Control", "public, max-age=30");
    res.json(counts);
  });

  // Book request form endpoint
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, delivery, street, city, state, zip, message } = req.body || {};

    // Support both the book request form (firstName/lastName/delivery) and the contact form (name/message)
    const isBookRequest = !!delivery;

    if (isBookRequest) {
      // Book request form
      if (!firstName || !lastName || !email || !delivery) {
        return res.status(400).json({ error: "Name, email, and format selection are required." });
      }

      const fullName = `${firstName} ${lastName}`;
      const formatLabel = delivery === "pdf" ? "PDF Download" : delivery === "audio" ? "Audio" : "Physical Copy (Mail)";
      const addressInfo = delivery === "physical"
        ? `\nMailing Address: ${street}, ${city}, ${state} ${zip}`
        : "";

      try {
        // 1. Send confirmation email to the person
        if (delivery === "pdf") {
          await resend.emails.send({
            from: "Claims to Courage <info@claimstocourage.com>",
            to: [email],
            subject: "Your Free Copy of Claims to Courage",
            html: `
              <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f6f0; border-radius: 4px;">
                <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 12px;">Thank You, ${firstName}!</h2>
                <p style="color: #555; font-size: 16px; line-height: 1.6;">Your free copy of <em>Claims to Courage</em> is ready to download. Click the button below to get your PDF:</p>
                <div style="text-align: center; margin: 32px 0;">
                  <a href="${PDF_URL}" style="display: inline-block; padding: 14px 32px; background: #c9a84c; color: #1a1a1a; font-weight: bold; text-decoration: none; border-radius: 2px; letter-spacing: 0.05em; font-family: sans-serif; font-size: 14px; text-transform: uppercase;">Download Your PDF</a>
                </div>
                <p style="color: #555; font-size: 15px; line-height: 1.6;">We hope this book helps guide you through your journey from setback to strength. If you have any questions, feel free to reach out to us at <a href="mailto:info@claimstocourage.com" style="color: #c9a84c;">info@claimstocourage.com</a>.</p>
                <p style="color: #555; font-size: 15px; line-height: 1.6; margin-top: 24px;">Warm regards,<br><strong>Edward A. Smith</strong><br><em>Founder, AutoAccident.com</em></p>
                <p style="color: #999; font-size: 12px; margin-top: 24px; border-top: 1px solid #e0d8cc; padding-top: 16px;">Claims to Courage &bull; claimstocourage.com</p>
              </div>
            `,
          });
        } else if (delivery === "audio") {
          await resend.emails.send({
            from: "Claims to Courage <info@claimstocourage.com>",
            to: [email],
            subject: "Your Free Audiobook — Claims to Courage",
            html: `
              <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f6f0; border-radius: 4px;">
                <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 12px;">Thank You, ${firstName}!</h2>
                <p style="color: #555; font-size: 16px; line-height: 1.6;">Your free audiobook of <em>Claims to Courage</em> is ready to listen. Click the button below to start streaming:</p>
                <div style="text-align: center; margin: 32px 0;">
                  <a href="${AUDIO_URL}" style="display: inline-block; padding: 14px 32px; background: #c9a84c; color: #1a1a1a; font-weight: bold; text-decoration: none; border-radius: 2px; letter-spacing: 0.05em; font-family: sans-serif; font-size: 14px; text-transform: uppercase;">Listen to Audiobook</a>
                </div>
                <p style="color: #555; font-size: 15px; line-height: 1.6;">We hope this book helps guide you through your journey from setback to strength. If you have any questions, feel free to reach out to us at <a href="mailto:info@claimstocourage.com" style="color: #c9a84c;">info@claimstocourage.com</a>.</p>
                <p style="color: #555; font-size: 15px; line-height: 1.6; margin-top: 24px;">Warm regards,<br><strong>Edward A. Smith</strong><br><em>Founder, AutoAccident.com</em></p>
                <p style="color: #999; font-size: 12px; margin-top: 24px; border-top: 1px solid #e0d8cc; padding-top: 16px;">Claims to Courage &bull; claimstocourage.com</p>
              </div>
            `,
          });
        } else if (delivery === "physical") {
          await resend.emails.send({
            from: "Claims to Courage <info@claimstocourage.com>",
            to: [email],
            subject: "Your Free Copy of Claims to Courage Is On Its Way",
            html: `
              <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f6f0; border-radius: 4px;">
                <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 12px;">Thank You, ${firstName}!</h2>
                <p style="color: #555; font-size: 16px; line-height: 1.6;">We've received your request for a physical copy of <em>Claims to Courage</em>. Your book will be mailed to:</p>
                <p style="color: #333; background: #fff; padding: 16px; border-left: 3px solid #c9a84c; border-radius: 2px; font-size: 15px;">${street}<br>${city}, ${state} ${zip}</p>
                <p style="color: #555; font-size: 15px; line-height: 1.6;">Please allow 5–10 business days for delivery. If you have any questions, feel free to reach out at <a href="mailto:info@claimstocourage.com" style="color: #c9a84c;">info@claimstocourage.com</a>.</p>
                <p style="color: #555; font-size: 15px; line-height: 1.6; margin-top: 24px;">Warm regards,<br><strong>Edward A. Smith</strong><br><em>Founder, AutoAccident.com</em></p>
                <p style="color: #999; font-size: 12px; margin-top: 24px; border-top: 1px solid #e0d8cc; padding-top: 16px;">Claims to Courage &bull; claimstocourage.com</p>
              </div>
            `,
          });
        }

        // 2. Send office notification to all 4 addresses
        await resend.emails.send({
          from: "Claims to Courage <info@claimstocourage.com>",
          to: OFFICE_EMAILS,
          replyTo: email,
          subject: `New Book Request — ${fullName} (${formatLabel})`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f6f0; border-radius: 4px;">
              <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 12px;">New Book Request</h2>
              <p style="color: #555;"><strong>Name:</strong> ${fullName}</p>
              <p style="color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #c9a84c;">${email}</a></p>
              <p style="color: #555;"><strong>Format Requested:</strong> ${formatLabel}</p>
              ${delivery === "physical" ? `<p style="color: #555;"><strong>Mailing Address:</strong> ${street}, ${city}, ${state} ${zip}</p>` : ""}
              <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent from claimstocourage.com</p>
            </div>
          `,
          text: `New Book Request\n\nName: ${fullName}\nEmail: ${email}\nFormat: ${formatLabel}${addressInfo}\n\nSent from claimstocourage.com`,
        });

        // Increment counter in MySQL
        await incrementCounter(delivery);

        return res.json({ success: true });
      } catch (err) {
        console.error("Email send error:", err);
        return res.status(500).json({ error: "Failed to send email. Please try again." });
      }
    } else {
      // General contact form
      const name = firstName ? `${firstName} ${lastName || ""}`.trim() : req.body?.name;
      const msg = message;

      if (!name || !email || !msg) {
        return res.status(400).json({ error: "All fields are required." });
      }

      try {
        await resend.emails.send({
          from: "Claims to Courage <info@claimstocourage.com>",
          to: OFFICE_EMAILS,
          replyTo: email,
          subject: `New Contact Form Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f6f0; border-radius: 4px;">
              <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a84c; padding-bottom: 12px;">New Contact Form Submission</h2>
              <p style="color: #555;"><strong>Name:</strong> ${name}</p>
              <p style="color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #c9a84c;">${email}</a></p>
              <p style="color: #555;"><strong>Message:</strong></p>
              <p style="color: #333; background: #fff; padding: 16px; border-left: 3px solid #c9a84c; border-radius: 2px;">${msg.replace(/\n/g, "<br>")}</p>
              <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent from claimstocourage.com</p>
            </div>
          `,
        });

        return res.json({ success: true });
      } catch (err) {
        console.error("Email send error:", err);
        return res.status(500).json({ error: "Failed to send email. Please try again." });
      }
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
