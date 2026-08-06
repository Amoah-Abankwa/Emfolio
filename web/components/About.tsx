import SectionHead from './SectionHead';

interface Role {
  role: string;
  tag: string;
}

const roles: Role[] = [
  { role: 'CEO', tag: 'YENMOTION' },
  { role: 'Co-founder', tag: 'SLICON' },
  { role: 'Builder', tag: 'EMFOLIO' },
  { role: 'Freelance Developer', tag: 'INDEPENDENT' },
  { role: 'Volunteer', tag: 'TECH & HUMANITARIAN' },
];

export default function About() {
  return (
    <section id="about" className="py-22 md:py-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead num="01" title="About" highlight="me" />
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          {/* Left column - About text */}
          <div className="space-y-5 text-[16.5px] text-[#3a3a3c]">
            <p className="max-w-[56ch]">
              I&apos;m <strong className="text-ink">Amoah-Abankwa Emmanuel</strong>, a software
              developer and data analyst working across mobile, web, and data. I build platforms
              solo when I need to move fast, and co-build with people and institutions when the
              problem calls for more hands.
            </p>
            <p className="max-w-[56ch]">
              Alongside development, I run <strong className="text-ink">YenMotion</strong> as CEO
              and co-founded <strong className="text-ink">Slicon</strong>. I also freelance -
              partnering with UI and graphic designers to take products from concept to a
              finished, professional experience.
            </p>
            <p className="max-w-[56ch]">
              I volunteer in tech and humanitarian work, and stay close to the wider community
              through summits, conferences, and talks. Whether it&apos;s a from-scratch build or a
              WordPress site done right, I care about the same thing: a clean, working product
              people can rely on.
            </p>
          </div>

          {/* Right column - Roles card */}
          <div className="rounded-sm border-l-4 border-[#F5C518] bg-[#0a0a0a] p-7 text-[#ffffff]">
            {roles.map(({ role, tag }) => (
              <div
                key={role}
                className="flex items-center justify-between border-b border-white/10 py-3.5 text-sm last:border-none"
              >
                <span>{role}</span>
                <span className="font-mono text-xs text-[#F5C518]">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}