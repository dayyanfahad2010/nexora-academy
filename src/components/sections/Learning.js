'use client';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { EASE } from '@/lib/utils';

const stages = [
  ['Discover', 'Identify interests and establish learning objectives.'],
  ['Understand', 'Develop technical fundamentals and core concepts.'],
  ['Practice', 'Apply skills through guided exercises and technical challenges.'],
  ['Build', 'Develop practical applications and collaborative projects.'],
  ['Review', 'Receive structured technical feedback and evaluation.'],
  ['Showcase', 'Present completed work through a professional portfolio.'],
];

export default function Learning() {
  const reduce = useReducedMotion();
  return (
    <section id="learning" aria-labelledby="learning-title" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <SectionHeading id="learning-title" eyebrow="HOW WE DEVELOP ENGINEERS" title="From Curiosity to Capability." />
      <div className="relative mt-20">
        <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/10 lg:block" aria-hidden="true" />
        <motion.div className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-teal lg:block" aria-hidden="true"
          initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-120px' }} transition={{ duration: 1.6, ease: EASE }} />
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10 lg:hidden" aria-hidden="true" />
        <ol className="grid gap-10 lg:grid-cols-6 lg:gap-6">
          {stages.map(([t, d], i) => (
            <motion.li key={t} className="relative pl-10 lg:pl-0 lg:pt-12" style={{ marginTop: undefined }}
              initial={reduce ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}>
              <span className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-teal bg-ink lg:top-0" aria-hidden="true" />
              <span className="font-mono text-xs text-teal">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-medium tracking-tight">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{d}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
