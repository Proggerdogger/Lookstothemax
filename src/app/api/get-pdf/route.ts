import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import PdfEmail from "@/components/emails/PdfEmail";
import * as fs from "fs/promises";
import * as path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const pdfPath = path.resolve(process.cwd(), "public", "Looksmaxxing_guide.pdf");
    
    let pdfAttachment;
    try {
      pdfAttachment = await fs.readFile(pdfPath);
    } catch (error) {
      console.error("Error reading PDF file:", error);
      return NextResponse.json({ error: "Could not read PDF file" }, { status: 500 });
    }

    const emailHtml = await render(PdfEmail({ firstName }));

    const { error } = await resend.emails.send({
      from: "LooksMaxPlus.ai <onboarding@resend.dev>",
      to: [email],
      subject: "Your Free Looksmaxxing PDF Guide!",
      html: emailHtml,
      attachments: [
        {
          filename: "Looksmaxxing_guide.pdf",
          content: pdfAttachment,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
} 