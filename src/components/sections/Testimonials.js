'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d) => setI((i + d + testimonials.length) % testimonials.length);
  return (
    <section aria-labelledby="t-title" className="bg-deep py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="t-title" eyebrow="VOICES" title="Perspectives on Learning." />
        <figure className="mt-14 max-w-4xl" aria-live="polite">
          <blockquote className="text-2xl font-medium leading-snug tracking-tight sm:text-4xl">“{t.quote}”</blockquote>
          <figcaption className="mt-6 text-mute">{t.who} <span className="ml-2 rounded border border-white/10 px-2 py-0.5 text-xs">Demonstration content</span></figcaption>
        </figure>
        <div className="mt-8 flex items-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous testimonial" className="rounded-full border border-white/15 p-3 hover:border-white/40"><ChevronLeft size={18} /></button>
          <button onClick={() => go(1)} aria-label="Next testimonial" className="rounded-full border border-white/15 p-3 hover:border-white/40"><ChevronRight size={18} /></button>
          <span className="ml-2 font-mono text-xs text-mute">{i + 1} / {testimonials.length}</span>
        </div>
      </div>
    </section>
  );
}
