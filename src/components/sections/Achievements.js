'use client';
import { useEffect, useRef, useState } from 'react';
import { Award, Code2, Flag, GraduationCap, Users, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const items = [
  [Award, 'Certificates', 'Preview how a completion certificate could be presented.'],
  [Code2, 'Technical achievements', 'Highlight skills demonstrated through challenges.'],
  [Flag, 'Project milestones', 'Mark key stages of a build.'],
  [GraduationCap, 'Learning accomplishments', 'Record completed modules and tracks.'],
  [Users, 'Community activities', 'Showcase workshops and peer sessions.'],
];

function Certificate() {
  return (
    <div className="rounded-lg border border-white/15 bg-surface p-8 sm:p-10">
      <p className="font-mono text-xs tracking-[0.2em] text-teal">NEXORA ACADEMY</p>
      <p className="mt-8 text-sm text-mute">This sample certificate is presented to</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">Sample Learner Name</p>
      <p className="mt-4 text-mute">for completing the demonstration track</p>
      <p className="text-xl">Full-Stack Web Development</p>
      <div className="mt-10 flex items-end justify-between text-xs text-mute"><span>Date placeholder</span><span className="rounded border border-white/10 px-2 py-1">Demonstration only. Not an official certificate.</span></div>
    </div>
  );
}

export default function Achievements() {
  const [open, setOpen] = useState(false);
  const btn = useRef(null);
  const close = useRef(null);
  useEffect(() => {
    if (!open) return;
    close.current?.focus();
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => { window.removeEventListener('keydown', esc); btn.current?.focus(); };
  }, [open]);
  return (
    <section aria-labelledby="ach-title" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <SectionHeading id="ach-title" eyebrow="RECOGNITION" title="Progress Worth Showcasing.">Demonstration placeholders only. No accreditation, issuers, or awards are implied.</SectionHeading>
      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <ul className="divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
          {items.map(([Icon, t, d]) => (
            <li key={t} className="flex gap-5 py-5"><Icon size={20} className="mt-1 shrink-0 text-teal" aria-hidden="true" /><div><h3 className="font-medium">{t}</h3><p className="text-sm text-mute">{d}</p></div></li>
          ))}
        </ul>
        <div className="lg:col-span-5">
          <button ref={btn} onClick={() => setOpen(true)} className="group w-full text-left" aria-haspopup="dialog">
            <div className="origin-bottom-left -rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]"><Certificate /></div>
            <span className="mt-6 inline-block text-sm text-teal">Preview certificate</span>
          </button>
        </div>
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Certificate preview" className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-5 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <button ref={close} onClick={() => setOpen(false)} aria-label="Close preview" className="absolute -top-12 right-0 rounded-full border border-white/20 p-2"><X size={18} /></button>
            <Certificate />
          </div>
        </div>
      )}
    </section>
  );
}
