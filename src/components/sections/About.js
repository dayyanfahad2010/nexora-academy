import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const pillars = [
  ['Learn with Purpose', 'Build strong technical foundations through structured, focused learning.'],
  ['Build with Confidence', 'Apply knowledge through practical projects and real-world scenarios.'],
  ['Grow with Guidance', 'Develop through mentorship, feedback, collaboration, and continuous improvement.'],
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <SectionHeading id="about-title" eyebrow="WHO WE ARE" title="Education Built Around Engineering.">
        Technology moves fast. The ability to build, adapt, and solve real problems matters more than ever. Nexora Academy combines structured learning, guided mentorship, and practical development to prepare learners for the challenges of modern engineering.
      </SectionHeading>
      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <ol className="divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
          {pillars.map(([t, d], i) => (
            <li key={t}><Reveal delay={i * 0.08} className="grid gap-2 py-8 sm:grid-cols-[4rem_1fr]">
              <span className="font-mono text-sm text-teal">0{i + 1}</span>
              <div><h3 className="text-2xl font-medium tracking-tight">{t}</h3><p className="mt-2 max-w-md text-mute">{d}</p></div>
            </Reveal></li>
          ))}
        </ol>
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:col-span-5">
          <Reveal className="bg-surface p-8"><h3 className="font-mono text-xs tracking-[0.18em] text-teal">MISSION</h3><p className="mt-4 text-xl leading-snug">Empower aspiring engineers with practical skills, technical knowledge, and meaningful learning experiences.</p></Reveal>
          <Reveal delay={0.1} className="bg-deep p-8"><h3 className="font-mono text-xs tracking-[0.18em] text-teal">VISION</h3><p className="mt-4 text-xl leading-snug">Create a generation of adaptable engineers capable of building technology that makes a difference.</p></Reveal>
        </div>
      </div>
    </section>
  );
}
