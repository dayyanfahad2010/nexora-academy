import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { programs } from '@/data/programs';

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="bg-deep py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="programs-title" eyebrow="EXPLORE YOUR PATH" title="Choose Your Engineering Direction.">
          Six illustrative tracks. These are program concepts, not claims about enrollment, duration, pricing, or certification.
        </SectionHeading>
        <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <li key={p.slug} className="bg-ink">
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <Link href={`/programs/${p.slug}`} className="group relative flex h-full flex-col p-8 transition-colors duration-300 hover:bg-surface">
                  <span className="font-mono text-sm text-teal">{p.n}</span>
                  <h3 className="mt-6 text-2xl font-medium leading-tight tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-mute">{p.short}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {p.tags.map((t) => <li key={t} className="rounded border border-white/10 px-2 py-1 font-mono text-[11px] text-mute">{t}</li>)}
                  </ul>
                  <ul className="mt-6 space-y-1.5 text-sm text-mute">
                    {p.outcomes.map((o) => <li key={o} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{o}</li>)}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-fg">Explore Track <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
