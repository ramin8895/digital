"use client";
import { useState } from "react";

export default function ContactForm({ services }: { services: string[] }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(res.ok ? "ok" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch { setState("error"); }
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email or phone<input name="contact" required autoComplete="email" /></label>
      <label>Service you need<select name="service">{services.map((s) => <option key={s}>{s}</option>)}</select></label>
      <label>Details<textarea name="message" rows={3} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
      <button className="btn btn--light btn--lg" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send request"}</button>
      <p role="status" className="form__msg">
        {state === "ok" && "Your request is in. We'll get back to you shortly."}
        {state === "error" && "Something went wrong. Please try again."}
      </p>
    </form>
  );
}
