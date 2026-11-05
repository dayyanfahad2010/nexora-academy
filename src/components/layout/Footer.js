'use client';
import Link from 'next/link';
import { ArrowUp, Linkedin, Github, Twitter } from 'lucide-react';
import { NAV } from '@/lib/utils';
import { programs } from '@/data/programs';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xl font-semibold tracking-tight">NEXORA <span className="font-mono text-[10px] tracking-[0.3em] text-mute">ACADEMY</span></p>
          <p className="mt-4 max-w-sm text-mute">A fictional demonstration academy for technology education. Learn. Engineer. Evolve.</p>
          <p className="mt-8 text-2xl font-medium leading-snug tracking-tight">Building skills for a future that keeps evolving.</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <h3 className="mb-4 text-sm font-medium">Navigate</h3>
          <ul className="space-y-2.5 text-sm text-mute">{NAV.map((n) => <li key={n.id}><Link className="hover:text-fg" href={n.href}>{n.label}</Link></li>)}</ul>
        </nav>
        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-medium">Learning tracks</h3>
          <ul className="space-y-2.5 text-sm text-mute">{programs.map((p) => <li key={p.slug}><Link className="hover:text-fg" href={`/programs/${p.slug}`}>{p.title}</Link></li>)}</ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="mb-4 text-sm font-medium">Contact</h3>
          <p className="text-sm text-mute">hello@example.com<br />+00 000 000 0000<br /><span className="text-xs">(placeholders)</span></p>
          <div className="mt-5 flex gap-3 text-mute">
            <span role="img" aria-label="LinkedIn placeholder"><Linkedin size={18} /></span>
            <span role="img" aria-label="GitHub placeholder"><Github size={18} /></span>
            <span role="img" aria-label="Twitter placeholder"><Twitter size={18} /></span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-mute sm:px-8">
          <p>© {new Date().getFullYear()} Nexora Academy. Fictional demonstration brand; all content is illustrative.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/40 hover:text-fg">
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
