import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  const model = "HuggingFaceH4/zephyr-7b-beta"; // Try this model

  if (!apiKey) {
    return NextResponse.json({ error: "Hugging Face API key not set." }, { status: 500 });
  }

  try {
    const hfRes = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "user", content: message }
        ],
        stream: false
      }),
    });

    if (!hfRes.ok) {
      const error = await hfRes.text();
      console.log("Hugging Face error:", error);
      return NextResponse.json({ error }, { status: hfRes.status });
    }

    const data = await hfRes.json();
    const aiMessage = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
    return NextResponse.json({ message: aiMessage });
  } catch (err) {
    return NextResponse.json({ error: "Failed to contact Hugging Face API." }, { status: 500 });
  }
}