"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "stack", label: "Stack" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Nav() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  // Sección activa según el centro del viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/95">
      <nav
        aria-label="Principal"
        className="wrap flex h-16 items-center justify-between"
      >
        <a
          href="#inicio"
          className="text-xl font-extrabold tracking-tight"
          aria-label="Inicio"
        >
          IG<span className="text-signal">/</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                aria-current={active === it.id ? "page" : undefined}
                className={`relative block py-5 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${
                  active === it.id
                    ? "text-signal"
                    : "text-muted hover:text-white"
                }`}
              >
                {it.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-signal transition-transform duration-300 ${
                    active === it.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="border border-line px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] md:hidden"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-line bg-ink md:hidden">
          {items.map((it) => (
            <li key={it.id} className="border-b border-line last:border-b-0">
              <a
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className={`wrap block py-4 font-mono text-sm uppercase tracking-[0.2em] ${
                  active === it.id ? "text-signal" : "text-muted"
                }`}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
