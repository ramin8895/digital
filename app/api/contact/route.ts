import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || body.website) return NextResponse.json({ ok: true }); // honeypot
  const name = String(body.name ?? "").trim().slice(0, 100);
  const contact = String(body.contact ?? "").trim().slice(0, 150);
  if (name.length < 2 || contact.length < 5) return NextResponse.json({ ok: false }, { status: 400 });
  // TODO: send an email here (Resend / Nodemailer) or persist the lead to a database / CRM
  console.log("New lead:", { name, contact, service: body.service, message: String(body.message ?? "").slice(0, 1000) });
  return NextResponse.json({ ok: true });
}
