type Props = { index: string; title: string; meta: string };

export default function SectionHead({ index, title, meta }: Props) {
  return (
    <header className="border-b border-white/10 px-6 py-10 lg:px-16">
      <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.3em]">
        <span className="text-[#FF0000]">[{index}]</span>
        <span className="text-white/40">{meta}</span>
      </div>
      <h2
        data-reveal="right"
        className="mt-6 font-grotesk text-3xl font-medium tracking-tight md:text-5xl"
      >
        {title}
      </h2>
      <div data-line className="mt-6 h-px w-16 bg-[#FF0000]" />
    </header>
  );
}
