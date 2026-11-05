'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV, cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    if (pathname !== '/') { setActive(pathname.split('/')[1] || 'home'); return; }
    const ids = NAV.map((n) => n.id).filter((i) => i !== 'home');
    const els = ids.map((i) => document.getElementById(i)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    els.forEach((el) => io.observe(el));
    const top = () => { if (window.scrollY < 200) setActive('home'); };
    window.addEventListener('scroll', top, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', top); };
  }, [pathname]);

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition duration-300', scrolled || open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-md' : 'border-b border-transparent')}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-accent focus:px-4 focus:py-2">Skip to content</a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2" aria-label="Nexora Academy home">
          <span className="text-lg font-semibold tracking-tight">NEXORA</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-mute">ACADEMY</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link key={n.id} href={n.href} aria-current={active === n.id ? 'true' : undefined}
              className={cn('relative rounded-full px-3 py-2 text-sm transition-colors hover:text-fg', active === n.id ? 'text-fg' : 'text-mute')}>
              {n.label}
              <span className={cn('absolute inset-x-3 -bottom-0.5 h-px origin-left bg-teal transition-transform duration-300', active === n.id ? 'scale-x-100' : 'scale-x-0')} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/#programs" className="hidden !px-5 !py-2.5 sm:inline-flex">Explore Programs</Button>
          <button className="rounded-lg p-2 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-5 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.id}><Link href={n.href} onClick={() => setOpen(false)} aria-current={active === n.id ? 'true' : undefined}
                className={cn('block border-b border-white/5 py-3.5 text-lg', active === n.id ? 'text-fg' : 'text-mute')}>{n.label}</Link></li>
            ))}
          </ul>
          <Button href="/#programs" className="mt-5 w-full" onClick={() => setOpen(false)}>Explore Programs</Button>
        </nav>
      )}
    </header>
  );
}
