import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Art from '@/components/ui/Art';
import { projects } from '@/data/projects';

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p?.title, description: p?.short };
}

export default function ProjectPage({ params }) {
  const i = projects.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = projects[i];
  return (
    <article className="mx-auto max-w-5xl px-5 pb-28 pt-36 sm:px-8">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-mute hover:text-fg"><ArrowLeft size={16} /> All projects</Link>
      <p className="mt-10 text-sm text-teal">{p.category} · Fictional demonstration project</p>
      <h1 className="mt-3 text-5xl font-semibold leading-[1.05] tracking-tightest sm:text-6xl">{p.title}</h1>
      <div className="mt-10 overflow-hidden rounded-xl border border-white/10"><Art seed={i} label={`${p.title} preview`} className="aspect-[16/9] w-full" /></div>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <p className="text-xl leading-relaxed text-mute md:col-span-2">{p.long}</p>
        <div>
          <h2 className="text-sm font-medium">Technology stack</h2>
          <ul className="mt-3 space-y-1 font-mono text-sm text-teal">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          <div className="mt-6 space-y-2 text-sm text-mute">
            <p><span aria-disabled="true">Live demo: link placeholder</span></p>
            <p><span aria-disabled="true">GitHub: link placeholder</span></p>
          </div>
        </div>
      </div>
    </article>
  );
}
