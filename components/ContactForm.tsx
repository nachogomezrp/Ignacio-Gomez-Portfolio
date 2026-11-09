"use client";

import { useState } from "react";
import { ArrowIcon } from "./Icons";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-signal focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="name" className="label">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          className={`${field} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={`${field} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="message" className="label">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          className={`${field} mt-2 resize-y`}
        />
      </div>

      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center gap-3 bg-signal px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-200 hover:bg-signal-dark hover:text-white disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>

      <p role="status" aria-live="polite" className="min-h-5 font-mono text-xs">
        {status === "ok" && (
          <span className="text-white">
            Mensaje enviado. Te respondo a la brevedad.
          </span>
        )}
        {status === "error" && (
          <span className="text-signal">
            No se pudo enviar. Probá de nuevo o escribime por email.
          </span>
        )}
      </p>
    </form>
  );
}
