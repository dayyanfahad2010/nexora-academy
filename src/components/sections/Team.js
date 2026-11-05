import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { team } from '@/data/team';

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="bg-deep py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="team-title" eyebrow="LEARN FROM EXPERIENCE" title="Guidance That Moves You Forward.">
          Sample placeholder profiles. No real identities, qualifications, or employment history are implied.
        </SectionHeading>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={m.id}><Reveal delay={i * 0.07}>
              <article className="group overflow-hidden rounded-xl border border-white/10 bg-ink">
                <div className="relative flex aspect-[4/5] items-end bg-surface p-5">
                  <div className="grid-bg absolute inset-0 opacity-70" aria-hidden="true" />
                  <span className="relative select-none text-8xl font-semibold tracking-tightest text-white/10 transition-colors duration-500 group-hover:text-teal/40" aria-hidden="true">{m.name.slice(-1)}</span>
                  <span className="absolute right-4 top-4 rounded border border-white/10 px-2 py-0.5 text-[11px] text-mute">Photo placeholder</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium">{m.name}</h3>
                  <p className="text-sm text-teal">{m.role}</p>
                  <p className="mt-1 text-sm text-mute">{m.focus}</p>
                  <p className="mt-3 text-sm text-mute">{m.bio}</p>
                  <p className="mt-4 text-xs text-mute">LinkedIn: add verified profile link</p>
                </div>
              </article>
            </Reveal></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
