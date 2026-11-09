import Image from "next/image";
import { projects } from "@/lib/data";
import { ArrowIcon, GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <div className="wrap py-24">
      <p data-reveal="up" className="label">
        <span className="text-signal">[04]</span> Proyectos
      </p>
      <h2
        data-reveal="left"
        className="mt-10 text-4xl font-extrabold tracking-tight md:text-6xl"
      >
        Trabajo seleccionado.
      </h2>
      <div data-line className="mt-8 h-0.5 w-16 bg-signal" />

      <div className="mt-16 space-y-24">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="group grid items-center gap-10 lg:grid-cols-12"
          >
            <div
              data-reveal={i % 2 ? "right" : "left"}
              className={`relative aspect-video overflow-hidden border border-line lg:col-span-7 ${
                i % 2 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={p.image}
                alt={`Captura de ${p.name}`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>

            <div data-reveal="up" className="lg:col-span-5">
              <p className="font-mono text-xs text-signal">{p.id}</p>
              <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">
                {p.name}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{p.description}</p>

              <p className="label mt-6">Problema</p>
              <p className="mt-2 text-sm leading-relaxed">{p.problem}</p>

              <p className="label mt-6">Funcionalidades</p>
              <ul className="mt-2 space-y-1 text-sm">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="mr-2 text-signal">&gt;</span>
                    {f}
                  </li>
                ))}
              </ul>

              {p.tech.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-signal px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-200 hover:bg-signal-dark hover:text-white"
                >
                  <GithubIcon /> Repositorio
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/b inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:border-white"
                >
                  Demo
                  <ArrowIcon className="transition-transform duration-200 group-hover/b:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        ))}

        <div
          data-reveal="up"
          className="border border-dashed border-line p-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          Próximo proyecto en desarrollo
        </div>
      </div>
    </div>
  );
}
