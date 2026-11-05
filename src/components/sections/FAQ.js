'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { faq } from '@/data/faq';
import { cn } from '@/lib/utils';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section aria-labelledby="faq-title" className="bg-deep py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5"><SectionHeading id="faq-title" eyebrow="FAQ" title="Questions Before You Begin?">Answers are illustrative website content, not verified policies.</SectionHeading></div>
        <div className="divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
          {faq.map((f, i) => (
            <div key={f.q}>
              <h3><button id={`faq-b-${i}`} aria-expanded={open === i} aria-controls={`faq-p-${i}`} onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium">
                {f.q}<Plus size={20} className={cn('shrink-0 text-teal transition-transform duration-300', open === i && 'rotate-45')} aria-hidden="true" />
              </button></h3>
              <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} className={cn('grid transition-all duration-300', open === i ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]')}>
                <p className="overflow-hidden text-mute">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
