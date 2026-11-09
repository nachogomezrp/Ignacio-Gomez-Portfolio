import Image from "next/image";
import { profile, terminal } from "@/lib/data";
import { GithubIcon, LinkedinIcon, DownloadIcon, ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative grid min-h-screen grid-cols-12 pt-16"
    >
      <div className="relative col-span-12 min-h-[55vh] lg:col-span-6 lg:min-h-0">
        <Image
          src={profile.photo}
          alt={`Retrato de ${profile.first} ${profile.last}`}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-ink lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,32,32,0.35),transparent_70%)]" />
      </div>

      <div className="col-span-12 flex flex-col justify-center gap-7 px-6 pb-24 pt-10 lg:col-span-6 lg:px-12 lg:pb-28 xl:pr-16">
        <p
          data-hero
          className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em]"
        >
          <span className="h-px w-10 bg-signal" />
          <span>
            <span className="text-signal">Software Developer</span>
            <span className="text-muted"> / {profile.location}</span>
          </span>
        </p>

        <h1
          data-hero
          className="text-[clamp(3rem,8.5vw,7.5rem)] font-black uppercase leading-[0.9] tracking-tighter"
        >
          {profile.first}
          <br />
          <span className="text-signal">{profile.last}.</span>
        </h1>

        <p
          data-hero
          className="border-l-2 border-signal pl-4 text-xl font-medium md:text-2xl"
        >
          {profile.role}
        </p>

        <p
          data-hero
          className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {profile.description}
        </p>

        <div
          data-hero
          className="max-w-xl border border-line bg-panel p-4 font-mono text-xs leading-relaxed sm:text-sm"
        >
          <div className="mb-3 flex justify-end gap-2" aria-hidden>
            <span className="h-2.5 w-2.5 bg-signal" />
            <span className="h-2.5 w-2.5 bg-line" />
            <span className="h-2.5 w-2.5 bg-line" />
          </div>
          {terminal.map((t) => (
            <p key={t.cmd}>
              <span className="text-signal">&gt;</span> {t.cmd}
              <span className="block pl-3 text-muted">{t.out}</span>
            </p>
          ))}
        </div>

        <div data-hero className="flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-3 bg-signal px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-200 hover:bg-signal-dark hover:text-white"
          >
            Ver proyectos
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 border border-line px-7 py-4 font-mono text-sm uppercase tracking-[0.2em] transition-colors duration-200 hover:border-white"
          >
            Contactar
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <ul
          data-hero
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
        >
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <GithubIcon /> GitHub
            </a>
          </li>
          <li className="h-4 w-px bg-signal" aria-hidden />
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </li>
          <li className="h-4 w-px bg-signal" aria-hidden />
          <li>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <DownloadIcon /> Descargar CV
            </a>
          </li>
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden items-center gap-6 px-6 pb-6 lg:flex lg:px-16">
        <p className="border-l-2 border-signal pl-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Buenas ideas. Código real.
        </p>
        <span className="h-px flex-1 bg-line" />
      </div>
    </section>
  );
}
