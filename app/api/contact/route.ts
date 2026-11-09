import { NextResponse } from "next/server";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
  }

  const { name, email, message, website } = body as Record<string, unknown>;

  // Campo trampa: los bots lo completan, las personas no lo ven
  if (website) return NextResponse.json({ ok: true });

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const n = name.trim();
  const e = email.trim();
  const m = message.trim();

  if (
    !n ||
    n.length > 100 ||
    !isEmail(e) ||
    e.length > 200 ||
    m.length < 10 ||
    m.length > 3000
  ) {
    return NextResponse.json({ error: "Revisá los campos" }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO,
      reply_to: e,
      subject: `Nuevo mensaje de ${n}`,
      text: `Nombre: ${n}\nEmail: ${e}\n\n${m}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
