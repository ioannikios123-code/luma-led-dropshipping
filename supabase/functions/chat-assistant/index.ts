import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with messages:", messages);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are an expert AI customer service agent for Luma Lights, a premium LED lighting company. Your role is to provide exceptional support and assistance.

PRODUCT KNOWLEDGE:
- LED Strip Lights: RGB color-changing, smart home compatible, easy installation, various lengths (5m, 10m, 15m)
- Smart LED Bulbs: Voice control, app-controlled, energy-efficient, 16 million colors, dimming features
- Gaming LED Lights: Sync with gameplay, reactive lighting, RGB customization, desktop/monitor mounting
- Features: WiFi connectivity, smartphone app control, voice assistant integration (Alexa, Google Home), scheduling, scenes/presets

HOW TO USE PRODUCTS:
1. Installation: Peel-and-stick adhesive backing, connect power adapter, link to WiFi via mobile app
2. Mobile App: Download Luma Lights app, create account, add devices via WiFi pairing
3. Voice Control: Link account to Alexa/Google Home, use voice commands for colors, brightness, on/off
4. Customization: Create custom scenes, set schedules, adjust brightness and colors, sync with music

CUSTOMER SUPPORT TOPICS:
- Product Selection: Help choose right products based on needs, room size, compatibility
- Installation Help: Step-by-step guidance, troubleshooting setup issues, mounting advice
- Technical Support: WiFi connectivity issues, app problems, firmware updates, compatibility questions
- Orders & Shipping: Order status, tracking, delivery timeframes, shipping options
- Returns & Refunds: 30-day money-back guarantee, easy return process, refund timeframe 5-7 business days
- Warranty: 2-year warranty on all products, covers manufacturing defects

COMPANY POLICIES:
- Free shipping on orders over $50
- 30-day money-back guarantee
- 2-year product warranty
- Same-day shipping for orders before 2 PM EST
- Customer satisfaction is our priority

RESPONSE STYLE:
- Be warm, friendly, and professional
- Provide clear, step-by-step instructions when needed
- Offer specific product recommendations based on customer needs
- If you don't have exact information, offer to escalate to human support
- Always end with asking if they need anything else

CONTACT ESCALATION:
For complex issues or when needed: support@lumalights.com or 1-800-LUMA-LED (Monday-Friday 9 AM - 8 PM EST)`
          },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI response received successfully");

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in chat-assistant function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
