import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import { programs } from '@/data/programs';

export const dynamicParams = false;
export const generateStaticParams = () => programs.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }) {
  const p = programs.find((x) => x.slug === params.slug);
  return { title: p?.title, description: p?.short };
}

export default function ProgramPage({ params }) {
  const p = programs.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <article className="mx-auto max-w-4xl px-5 pb-28 pt-36 sm:px-8">
      <Link href="/#programs" className="inline-flex items-center gap-2 text-sm text-mute hover:text-fg"><ArrowLeft size={16} /> All programs</Link>
      <p className="mt-10 font-mono text-sm text-teal">Track {p.n}</p>
      <h1 className="mt-3 text-5xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl">{p.title}</h1>
      <p className="mt-6 max-w-2xl text-xl text-mute">{p.overview}</p>
      <h2 className="mt-14 text-2xl font-medium">Technologies</h2>
      <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded border border-white/10 px-3 py-1.5 font-mono text-xs text-mute">{t}</li>)}</ul>
      <h2 className="mt-12 text-2xl font-medium">Learning outcomes</h2>
      <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">{p.outcomes.map((o) => <li key={o} className="py-4 text-lg">{o}</li>)}</ul>
      <p className="mt-10 text-sm text-mute">Illustrative concept. Duration, pricing, availability, and certification are not defined.</p>
      <Button href="/contact" className="mt-8">Ask about this track</Button>
    </article>
  );
}
