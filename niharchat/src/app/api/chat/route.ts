import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  const model = "mistralai/Mistral-7B-Instruct-v0.2";

  if (!apiKey) {
    return NextResponse.json({ error: "Hugging Face API key not set." }, { status: 500 });
  }

  // Format the prompt for Mistral-7B-Instruct
  const prompt = `<s>[INST] ${message} [/INST]`;

  try {
    const hfRes = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_new_tokens: 200, return_full_text: false },
      }),
    });

    if (!hfRes.ok) {
      const error = await hfRes.text();
      return NextResponse.json({ error }, { status: hfRes.status });
    }

    const data = await hfRes.json();
    // Hugging Face returns an array of generated texts
    const aiMessage = Array.isArray(data) && data[0]?.generated_text
      ? data[0].generated_text.trim()
      : (data.generated_text || "Sorry, I couldn't generate a response.");
    return NextResponse.json({ message: aiMessage });
  } catch (err) {
    return NextResponse.json({ error: "Failed to contact Hugging Face API." }, { status: 500 });
  }
} 