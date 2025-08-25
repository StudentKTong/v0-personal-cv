import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        {
          error: "Email service not configured. Please contact the administrator.",
        },
        { status: 500 },
      )
    }

    // Use Resend to send email
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email to Khon Tong
    const emailData = await resend.emails.send({
      from: "CV Contact Form <onboarding@resend.dev>", // Using Resend's default sender
      to: ["khontong21@mekong.edu.kh"], // Your email from the screenshot
      replyTo: email, // So you can reply directly to the sender
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">From your CV website</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 25px;">
              <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">👤 Contact Information</h3>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #7c3aed;">
                <p style="margin: 0 0 8px 0; color: #475569;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0; color: #475569;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a></p>
              </div>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">💬 Message</h3>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                📧 You can reply directly to this email to respond to ${name}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This message was sent from your CV website contact form at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    })

    console.log("Email sent successfully:", emailData)

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
      id: emailData.data?.id,
    })
  } catch (error) {
    console.error("Email sending error:", error)

    // More specific error handling
    if (error.message?.includes("API key")) {
      return NextResponse.json(
        {
          error: "Email service configuration error. Please try again later.",
        },
        { status: 500 },
      )
    }

    if (error.message?.includes("rate limit")) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a moment and try again.",
        },
        { status: 429 },
      )
    }

    return NextResponse.json(
      {
        error: "Failed to send email. Please try again or contact me directly.",
      },
      { status: 500 },
    )
  }
}
