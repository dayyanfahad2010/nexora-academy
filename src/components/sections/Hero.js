'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { EASE } from '@/lib/utils';

const line = (reduce, i) => reduce ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: EASE } };

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl" aria-hidden="true">
      <svg viewBox="0 0 500 400" className="absolute inset-0 h-full w-full">
        <defs><radialGradient id="hg" cx=".6" cy=".4" r=".6"><stop offset="0" stopColor="#6657FF" stopOpacity=".35" /><stop offset="1" stopColor="#6657FF" stopOpacity="0" /></radialGradient></defs>
        <rect width="500" height="400" fill="url(#hg)" />
        <g fill="none" stroke="#23C8B8" strokeOpacity=".55" strokeWidth="1.2">
          <path className="flow" d="M90 110 C 180 110, 190 200, 270 200" />
          <path className="flow" d="M270 200 C 340 200, 340 300, 410 300" />
          <path className="flow" d="M410 90 C 380 130, 330 150, 270 200" />
        </g>
        {[[90, 110], [270, 200], [410, 300], [410, 90]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="#080B12" stroke="#23C8B8" strokeWidth="1.5" />)}
      </svg>
      <div className="float-a absolute left-[2%] top-[6%] w-[62%] rounded-lg border border-white/10 bg-surface/90 shadow-2xl">
        <div className="flex gap-1.5 border-b border-white/10 px-3 py-2"><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/20" /><span className="ml-2 font-mono text-[10px] text-mute">api/tracks.js</span></div>
        <pre className="overflow-hidden p-4 font-mono text-[11px] leading-5 text-mute"><span className="text-accent">export async function</span> <span className="text-fg">GET</span>() {'{'}{'\n'}  <span className="text-accent">const</span> tracks = <span className="text-accent">await</span> db.tracks(){'\n'}  <span className="text-accent">return</span> Response.<span className="text-teal">json</span>(tracks){'\n'}{'}'}</pre>
      </div>
      <div className="float-b absolute bottom-[8%] right-[2%] w-[56%] rounded-lg border border-white/10 bg-deep/95 shadow-2xl">
        <div className="border-b border-white/10 px-3 py-2 font-mono text-[10px] text-mute">terminal</div>
        <pre className="p-4 font-mono text-[11px] leading-5 text-mute"><span className="text-teal">$</span> npm run build{'\n'}<span className="text-teal">✓</span> Compiled successfully{'\n'}<span className="text-teal">✓</span> 6 tracks, 6 projects</pre>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p {...line(reduce, 0)} className="mb-6 font-mono text-xs tracking-[0.2em] text-teal">THE NEXT GENERATION OF ENGINEERS</motion.p>
          <h1 id="hero-title" className="text-[2.9rem] font-semibold leading-[0.98] tracking-tightest sm:text-7xl lg:text-[5.5rem]">
            <motion.span className="block" {...line(reduce, 1)}>Build Skills.</motion.span>
            <motion.span className="block" {...line(reduce, 2)}>Engineer the Future.</motion.span>
          </h1>
          <motion.p {...line(reduce, 3)} className="mt-7 max-w-xl text-lg leading-relaxed text-mute">Develop practical technology skills, work on meaningful projects, and learn from experienced mentors in an environment designed for future engineers.</motion.p>
          <motion.div {...line(reduce, 4)} className="mt-9 flex flex-wrap gap-4">
            <Button href="/#programs">Explore Programs <ArrowRight size={16} /></Button>
            <Button href="/#learning" variant="ghost">Discover Our Approach</Button>
          </motion.div>
          <motion.p {...line(reduce, 5)} className="mt-10 text-sm text-mute">Practical Learning · Expert Mentorship · Real-World Projects</motion.p>
        </div>
        <motion.div className="lg:col-span-5" initial={reduce ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4, ease: EASE }}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
