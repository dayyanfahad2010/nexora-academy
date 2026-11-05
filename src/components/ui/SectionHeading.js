import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, children, id }) {
  return (
    <Reveal className="max-w-3xl">
      <p className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-teal">
        <span className="h-px w-8 bg-teal" aria-hidden="true" />{eyebrow}
      </p>
      <h2 id={id} className="text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl">{title}</h2>
      {children && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">{children}</p>}
    </Reveal>
  );
}
