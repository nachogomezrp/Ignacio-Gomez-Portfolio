import { profile } from "@/lib/data";
import { ArrowIcon } from "./Icons";
import ContactForm from "./ContactForm";
import CvPreview from "./CvPreview";

const links = [
  {
    label: "Email",
    text: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    text: "Ver perfil",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    text: "Ver repositorios",
    href: profile.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="wrap pt-24">
      <p data-reveal="up" className="label">
        <span className="text-signal">[05]</span> Contacto
      </p>
      <h2
        data-reveal="left"
        className="mt-10 max-w-4xl text-4xl font-black leading-[1] tracking-tighter md:text-7xl"
      >
        ¿Tenés un proyecto <span className="text-signal">en mente?</span>
      </h2>
      <p
        data-reveal="up"
        className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
      >
        Estoy abierto a nuevas oportunidades profesionales, desafíos técnicos y
        proyectos donde pueda seguir creciendo como desarrollador.
      </p>

      <div className="mt-16 grid gap-16 border-t border-line pt-16 lg:grid-cols-12">
        <div data-reveal="left" className="lg:col-span-7">
          <ContactForm />
        </div>

        <div data-reveal="right" className="space-y-10 lg:col-span-5">
          <ul className="border-t border-line">
            {links.map((l) => (
              <li key={l.label} className="border-b border-line">
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 py-5 transition-colors duration-200 hover:text-signal"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {l.label}
                  </span>
                  <span className="flex items-center gap-3 break-all text-lg font-bold">
                    {l.text}
                    <ArrowIcon className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div>
            <p className="label mb-4">Currículum</p>
            <CvPreview />
          </div>
        </div>
      </div>

      <footer className="mt-16 flex flex-col justify-between gap-2 border-t border-line py-10 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:flex-row">
        <span>Todos los derechos reservados - Ignacio Gómez © 2026</span>
        <span>Lo mejor está por vernir.</span>
      </footer>
    </div>
  );
}
