import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const items = [
  ['Practical-First Learning', 'Apply knowledge through meaningful technical work.'],
  ['Guided Mentorship', 'Get structured guidance and constructive feedback.'],
  ['Project-Based Development', 'Build applications that demonstrate practical capabilities.'],
  ['Professional Growth', 'Develop problem-solving, collaboration, communication, and engineering skills.'],
];

export default function Differentiators() {
  return (
    <section aria-labelledby="diff-title" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <SectionHeading id="diff-title" eyebrow="WHY NEXORA" title="More Than Learning. A Better Way to Build." />
      <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-12">
        {items.map(([t, d], i) => (
          <Reveal key={t} delay={0.05 * i} className={['md:col-span-7', 'md:col-span-5 md:mt-20', 'md:col-span-5', 'md:col-span-7 md:mt-20'][i]}>
            <div className="border-t border-white/15 pt-6">
              <span className="font-mono text-sm text-teal">0{i + 1}</span>
              <h3 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">{t}</h3>
              <p className="mt-3 max-w-md text-lg text-mute">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
