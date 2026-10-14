import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SPAM_KEYWORDS = [
  "crypto",
  "bitcoin",
  "casino",
  "betting",
  "forex",
  "binary options",
  "nft",
  "blockchain investment",
  "seo expert",
  "seo service",
  "seo services",
  "seo company",
  "seo agency",
  "cheap seo",
  "google ranking",
  "improve ranking",
  "increase your traffic",
  "increase website traffic",
  "get on first page",
  "first page of google",
  "guest post",
  "guest posting",
  "sponsored post",
  "paid guest post",
  "link insertion",
  "link building",
  "link-building",
  "backlink",
  "backlinks",
  "buy backlinks",
  "high quality backlinks",
  "do follow link",
  "dofollow link",
  "dr 50+ links",
  "domain authority",
  "da 50+",
  "traffic",
  "organic traffic",
  "telegram marketing",
  "whatsapp marketing",
  "email marketing",
  "email marketing service",
  "bulk email",
  "mass email",
  "cold email",
  "lead generation",
  "b2b leads",
  "sales leads",
  "leads for your business",
  "promote your business",
  "digital marketing agency",
  "digital marketing services",
  "social media marketing",
  "instagram marketing",
  "facebook marketing",
  "online reputation management",
  "orm service",
  "ppc campaign",
  "google ads service",
  "advertising campaign",
  "website rebuild",
  "website redesign",
  "rebuild your website",
  "redesign your website",
  "revamp your website",
  "web design service",
  "web development company",
  "app development company",
  "software development company",
  "content writing service",
  "guest blogging",
  "blog outreach",
  "outreach campaign",
  "press release distribution",
  "directory submission",
  "citation building",
  "package pricing",
  "send you our package",
  "pricing and past work details",
  "would love to collaborate",
  "collaboration opportunity",
  "business proposal",
  "marketing proposal",
  "growth hacking",
  "affiliate marketing",
  "influencer marketing",
  "youtube promotion",
  "promotion service",
  "branding agency",
  "performance marketing",
  "porn",
  "xxx",
  "adult video",
  "adult content",
  "escort",
  "sex chat",
  "nude",
  "nudes",
  "nsfw",
  "18+",
  "dating service",
  "hookup",
  "cam site",
  "webcam girls",
  "onlyfans",
];

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function nl2br(value = "") {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}

function buildEmailTemplate(data) {
  const {
    fullName,
    company,
    email,
    phone,
    department,
    location,
    requirementType,
    projectTimeline,
    estimatedBudget,
    preferredContact,
    description,
  } = data;

  const safeRequirementType = escapeHtml(requirementType || "New Inquiry");

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Inquiry</title>
    </head>
    <body style="margin:0;padding:0;background:#f4f1eb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
      <div style="padding:32px 16px;">
        <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e5ded3;border-radius:18px;overflow:hidden;">
          <div style="background:#1f2937;padding:28px 32px;">
            <div style="font-size:12px;letter-spacing:1.8px;text-transform:uppercase;color:#f59e0b;font-weight:700;">
              Resseaux Tech
            </div>
            <h1 style="margin:10px 0 0;font-size:26px;line-height:1.3;color:#ffffff;">
              New Website Inquiry Received
            </h1>
            <p style="margin:10px 0 0;font-size:14px;line-height:1.7;color:rgba(255,255,255,0.75);">
              A new contact form submission has been received from the Resseaux Tech website.
            </p>
          </div>

          <div style="padding:28px 32px 10px;">
            <div style="margin-bottom:24px;padding:18px 20px;background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;">
              <div style="font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#c2410c;margin-bottom:8px;">
                Requirement Summary
              </div>
              <div style="font-size:20px;line-height:1.4;font-weight:700;color:#111827;">
                ${safeRequirementType}
              </div>
            </div>

            <h2 style="margin:0 0 14px;font-size:16px;color:#111827;">Contact Details</h2>

            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse:collapse;margin-bottom:28px;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;width:220px;font-size:13px;color:#6b7280;">Full Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:14px;color:#111827;font-weight:600;">${escapeHtml(fullName || "-")}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:13px;color:#6b7280;">Email Address</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:14px;color:#111827;font-weight:600;">
                  <a href="mailto:${escapeHtml(email || "")}" style="color:#0f766e;text-decoration:none;">${escapeHtml(email || "-")}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:13px;color:#6b7280;">Phone Number</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:14px;color:#111827;">${escapeHtml(phone || "-")}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:13px;color:#6b7280;">Company / Organisation</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:14px;color:#111827;">${escapeHtml(company || "-")}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:13px;color:#6b7280;">Department / Role</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:14px;color:#111827;">${escapeHtml(department || "-")}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;font-size:13px;color:#6b7280;">Location</td>
                <td style="padding:12px 0;font-size:14px;color:#111827;">${escapeHtml(location || "-")}</td>
              </tr>
            </table>

            <h2 style="margin:0 0 14px;font-size:16px;color:#111827;">Requirement Details</h2>

            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse:collapse;margin-bottom:28px;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;width:220px;font-size:13px;color:#6b7280;">Requirement Type</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:14px;color:#111827;">${escapeHtml(requirementType || "-")}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:13px;color:#6b7280;">Project Timeline</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:14px;color:#111827;">${escapeHtml(projectTimeline || "-")}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:13px;color:#6b7280;">Estimated Budget</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee4d8;font-size:14px;color:#111827;">${escapeHtml(estimatedBudget || "-")}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;font-size:13px;color:#6b7280;">Preferred Contact Method</td>
                <td style="padding:12px 0;font-size:14px;color:#111827;">${escapeHtml(preferredContact || "-")}</td>
              </tr>
            </table>

            <h2 style="margin:0 0 14px;font-size:16px;color:#111827;">Project / Requirement Description</h2>
            <div style="margin-bottom:28px;padding:18px 20px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:14px;font-size:14px;line-height:1.8;color:#111827;">
              ${nl2br(description || "-")}
            </div>

            <div style="margin-bottom:28px;padding:16px 18px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:14px;">
              <div style="font-size:12px;font-weight:700;letter-spacing:1.3px;text-transform:uppercase;color:#047857;margin-bottom:6px;">
                Quick Action
              </div>
              <div style="font-size:14px;line-height:1.7;color:#065f46;">
                Use <strong>Reply</strong> in your email client to respond directly to the sender at
                <strong> ${escapeHtml(email || "-")}</strong>.
              </div>
            </div>
          </div>

          <div style="padding:18px 32px;background:#faf7f2;border-top:1px solid #eee4d8;font-size:12px;line-height:1.8;color:#6b7280;">
            This email was generated automatically from the Resseaux Tech contact form.
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
}

function buildTextTemplate(data) {
  return `
New Website Inquiry - Resseaux Tech

Contact Details
---------------
Full Name: ${data.fullName || "-"}
Email Address: ${data.email || "-"}
Phone Number: ${data.phone || "-"}
Company / Organisation: ${data.company || "-"}
Department / Role: ${data.department || "-"}
Location: ${data.location || "-"}

Requirement Details
-------------------
Requirement Type: ${data.requirementType || "-"}
Project Timeline: ${data.projectTimeline || "-"}
Estimated Budget: ${data.estimatedBudget || "-"}
Preferred Contact Method: ${data.preferredContact || "-"}

Description
-----------
${data.description || "-"}
  `.trim();
}

function checkSpamAndKeyword(fields) {
  const {
    fullName,
    email,
    company,
    requirementType,
    description,
    website,
  } = fields;

  const merged = [
    fullName,
    email,
    company,
    requirementType,
    description,
    website,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (website && String(website).trim() !== "") {
    return { isSpam: true, matchedKeyword: "honeypot" };
  }

  const matchedKeyword = SPAM_KEYWORDS.find((keyword) =>
    merged.includes(keyword)
  );

  return {
    isSpam: Boolean(matchedKeyword),
    matchedKeyword: matchedKeyword || "",
  };
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      fullName,
      company,
      email,
      phone,
      department,
      location,
      requirementType,
      projectTimeline,
      estimatedBudget,
      preferredContact,
      description,
    } = body;

    if (!fullName || !email || !requirementType || !description) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { isSpam, matchedKeyword } = checkSpamAndKeyword(body);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `New Inquiry • ${requirementType || "Website Contact Form"}`;

    if (isSpam) {
      console.warn("Spam blocked:", { email, matchedKeyword });

      if (process.env.SPAM_BCC) {
        await transporter.sendMail({
          from:
            process.env.FROM_EMAIL ||
            '"Resseaux Tech Website (Spam)" <noreply.resseauxtech@gmail.com>',
          to: process.env.SPAM_BCC,
          replyTo: email,
          subject: `[SPAM FLAGGED] ${subject}`,
          text: `Matched Keyword: ${matchedKeyword || "unknown"}\n\n${buildTextTemplate({
            fullName,
            company,
            email,
            phone,
            department,
            location,
            requirementType,
            projectTimeline,
            estimatedBudget,
            preferredContact,
            description,
          })}`,
          html: `
            <div style="font-family:Arial,Helvetica,sans-serif;padding:16px 0;color:#b91c1c;font-weight:700;">
              Spam Flagged Reason: ${escapeHtml(matchedKeyword || "unknown")}
            </div>
            ${buildEmailTemplate({
              fullName,
              company,
              email,
              phone,
              department,
              location,
              requirementType,
              projectTimeline,
              estimatedBudget,
              preferredContact,
              description,
            })}
          `,
        });
      }

      return NextResponse.json(
        {
          message:
            "Your message looks promotional or unrelated to our services, so it was not sent. If this is a genuine inquiry, please email us directly at info@resseauxtech.com.",
        },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from:
        process.env.FROM_EMAIL ||
        '"Resseaux Tech Website" <noreply.resseauxtech@gmail.com>',
      to: process.env.CONTACT_TO || "info@resseauxtech.com",
      bcc: process.env.CONTACT_BCC || "",
      replyTo: email,
      subject,
      text: buildTextTemplate({
        fullName,
        company,
        email,
        phone,
        department,
        location,
        requirementType,
        projectTimeline,
        estimatedBudget,
        preferredContact,
        description,
      }),
      html: buildEmailTemplate({
        fullName,
        company,
        email,
        phone,
        department,
        location,
        requirementType,
        projectTimeline,
        estimatedBudget,
        preferredContact,
        description,
      }),
    });

    return NextResponse.json(
      { message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      { message: error?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}