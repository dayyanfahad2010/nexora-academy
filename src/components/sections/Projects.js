'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Art from '@/components/ui/Art';
import { categories, projects } from '@/data/projects';
import { cn } from '@/lib/utils';

export function ProjectCard({ p, i, large }) {
  return (
    <Link href={`/projects/${p.slug}`} className={cn('group relative block overflow-hidden rounded-xl border border-white/10 bg-surface', large && 'md:col-span-2 md:row-span-2')}>
      <div className={cn('overflow-hidden', large ? 'aspect-[16/10]' : 'aspect-[16/10]')}>
        <Art seed={i} label={`${p.title} thumbnail`} className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 text-xs text-mute"><span>{p.category}</span><span className="rounded border border-white/10 px-2 py-0.5">Demo project</span></div>
        <h3 className={cn('mt-3 font-medium tracking-tight', large ? 'text-3xl' : 'text-xl')}>{p.title}</h3>
        <p className="mt-2 text-mute">{p.short}</p>
        <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-teal">{p.stack.map((s) => <span key={s}>{s}</span>)}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm">View project <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
      </div>
    </Link>
  );
}

export default function Projects({ heading = true }) {
  const [cat, setCat] = useState('All');
  const list = projects.map((p, i) => ({ p, i })).filter(({ p }) => cat === 'All' || p.category === cat);
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <SectionHeading id="projects-title" eyebrow="WORK THAT SPEAKS" title="Built Through Practice.">
        Six fictional demonstration projects. They are not student work, and the components are built so real projects can replace them.
      </SectionHeading>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={cn('rounded-full border px-4 py-2 text-sm transition', cat === c ? 'border-accent bg-accent text-white' : 'border-white/15 text-mute hover:border-white/40 hover:text-fg')}>{c}</button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3" aria-live="polite">
        {list.length === 0 && <p className="text-mute">No projects in this category yet.</p>}
        {list.map(({ p, i }, idx) => <ProjectCard key={p.slug} p={p} i={i} large={cat === 'All' && idx === 0} />)}
      </div>
    </section>
  );
}
