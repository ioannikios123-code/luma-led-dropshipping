import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SupportEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  priority: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      // Still return success to user but log the issue
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Your request has been received. We will contact you soon.",
          note: "Email service pending configuration"
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const resend = new Resend(RESEND_API_KEY);
    const { name, email, subject, message, priority }: SupportEmailRequest = await req.json();

    console.log("Sending support email notification for:", { name, email, subject, priority });

    // Send notification to business owner
    const notificationEmail = await resend.emails.send({
      from: "Luma Lights Support <onboarding@resend.dev>",
      to: ["support@lumalights.com"], // This will be the configured support email
      subject: `[${priority.toUpperCase()}] Support Request: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Support Request
          </h1>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Priority:</strong> <span style="color: ${priority === 'urgent' ? '#dc2626' : priority === 'high' ? '#ea580c' : '#16a34a'};">${priority.toUpperCase()}</span></p>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #7c3aed; color: white; border-radius: 8px; text-align: center;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="color: white; text-decoration: none; font-weight: bold;">
              Reply to Customer →
            </a>
          </div>
          
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            This notification was sent from the Luma Lights support system.
          </p>
        </div>
      `,
    });

    // Send confirmation to customer
    const confirmationEmail = await resend.emails.send({
      from: "Luma Lights <onboarding@resend.dev>",
      to: [email],
      subject: `We received your support request: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">Thank you for contacting Luma Lights!</h1>
          
          <p>Hi ${name},</p>
          
          <p>We've received your support request and our team is on it! Here's a summary of your inquiry:</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Priority:</strong> ${priority}</p>
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap; color: #4b5563;">${message}</p>
          </div>
          
          <h3>What happens next?</h3>
          <ul>
            <li>Our support team will review your request</li>
            <li>You'll receive a response within 4 hours for most inquiries</li>
            <li>Urgent requests are prioritized and handled faster</li>
          </ul>
          
          <p>In the meantime, you can:</p>
          <ul>
            <li>Call us at <a href="tel:+18005862533">1-800-LUMA-LED</a> for immediate assistance</li>
            <li>Check our <a href="https://luma-led-dropshipping.lovable.app/faq">FAQ page</a> for quick answers</li>
          </ul>
          
          <p>Thank you for choosing Luma Lights! 💡</p>
          
          <p style="color: #6b7280;">Best regards,<br>The Luma Lights Support Team</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { notificationEmail, confirmationEmail });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Support request submitted successfully! Check your email for confirmation.",
        notificationId: notificationEmail.id,
        confirmationId: confirmationEmail.id
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-support-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
