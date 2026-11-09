import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <div className="wrap py-24">
      <p data-reveal="up" className="label">
        <span className="text-signal">[03]</span> Stack tecnológico
      </p>
      <h2
        data-reveal="left"
        className="mt-10 text-4xl font-extrabold tracking-tight md:text-6xl"
      >
        Lo que uso y lo que estoy aprendiendo.
      </h2>
      <div data-line className="mt-8 h-0.5 w-16 bg-signal" />

      <div className="mt-14 border-t border-line">
        {stack.map((g) => (
          <div
            key={g.group}
            data-reveal="up"
            className="grid gap-4 border-b border-line py-8 md:grid-cols-12"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] md:col-span-3">
              {g.learning && (
                <span
                  className="mr-2 inline-block h-2 w-2 bg-signal"
                  aria-hidden
                />
              )}
              <span className={g.learning ? "text-signal" : "text-muted"}>
                {g.group}
              </span>
            </h3>
            <ul className="flex flex-wrap gap-2 md:col-span-9">
              {g.items.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
