import { pillars } from "@/lib/data";

export default function About() {
  return (
    <div className="wrap py-24">
      <p data-reveal="up" className="label">
        <span className="text-signal">[01]</span> Sobre mí
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2
            data-reveal="left"
            className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"
          >
            Construyendo soluciones, entendiendo problemas.
          </h2>
          <div data-line className="mt-8 h-0.5 w-16 bg-signal" />
          <p
            data-reveal="up"
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            Estudiante avanzado de Sistemas con formación técnica y experiencia
            en entornos de soporte y resolución de incidentes. Esa base me dio
            criterio analítico, y hoy lo aplico al desarrollo backend con Java.
          </p>
        </div>

        <ul
          data-reveal="right"
          className="grid border-l border-t border-line sm:grid-cols-2 lg:col-span-6"
        >
          {pillars.map((p, i) => (
            <li
              key={p.title}
              className="border-b border-r border-line p-6 transition-colors duration-200 hover:bg-surface"
            >
              <p className="font-mono text-xs text-signal">0{i + 1}</p>
              <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
