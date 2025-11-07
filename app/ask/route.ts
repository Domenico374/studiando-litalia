export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response("Missing OPENAI_API_KEY", { status: 500 });
    }

    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: prompt
      })
    });

    if (!r.ok) {
      const t = await r.text();
      return new Response(t, { status: r.status });
    }

    const data = await r.json();
    return Response.json({ text: data.output_text ?? "" });
  } catch (e: any) {
    return new Response(e?.message ?? "Server error", { status: 500 });
  }
}
