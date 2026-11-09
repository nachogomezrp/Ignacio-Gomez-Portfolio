import { education, experience } from "@/lib/data";

type Item = {
  title: string;
  org?: string;
  period?: string;
  status?: string;
  detail?: string;
};

function Timeline({ heading, items }: { heading: string; items: Item[] }) {
  return (
    <div>
      <h3 className="label mb-8 text-signal">{heading}</h3>
      <ol className="border-l border-line">
        {items.map((it) => (
          <li key={it.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-signal"
              aria-hidden
            />
            {it.period && (
              <p className="font-mono text-xs text-muted">{it.period}</p>
            )}
            <p className="mt-1 text-xl font-bold">{it.title}</p>
            {it.org && <p className="text-muted">{it.org}</p>}
            {it.status && (
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {it.status}
              </p>
            )}
            {it.detail && (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {it.detail}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="wrap border-t border-line py-24">
      <p data-reveal="up" className="label">
        <span className="text-signal">[02]</span> Trayectoria
      </p>
      <div data-reveal="up" className="mt-12 grid gap-16 md:grid-cols-2">
        <Timeline heading="Formación" items={education} />
        <Timeline heading="Experiencia" items={experience} />
      </div>
    </div>
  );
}
