import SectionHead from './SectionHead';

interface CaseStudy {
  role: string;
  name: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  liveLink: string;
}

const caseStudies: CaseStudy[] = [
  {
    role: 'Founder & CEO',
    name: 'Hey Girl',
    problem: 'Women and girls lack a comprehensive, personalized tool to track menstrual cycles, symptoms, emotions, and flow intensity — leading to missed health insights and poor period preparedness.',
    approach: 'Building an advanced menstrual tracker with features for logging daily symptoms, emotional states, flow weight, and cycle patterns. Implementing data visualization to help users understand their unique cycle trends and predict future periods accurately.',
    result: 'A full-featured menstrual health platform that empowers users with personalized insights, helping them prepare for their cycles and understand their bodies better — launching soon.',
    stack: ['React Native', 'Node.js', 'MongoDB', 'Express'],
    liveLink: '', // TODO: e.g. 'https://heygirl.app'
  },
  {
    role: 'Co-founder',
    name: 'Sukuu Link',
    problem: 'Schools in Ghana struggle with fragmented management systems, making it difficult to track students, manage fees, communicate with parents, and generate reports efficiently.',
    approach: 'Co-building a comprehensive school management platform that handles student records, fee tracking, parent communication, attendance, and academic reporting — designed for both private and public school environments.',
    result: 'A centralized, user-friendly system that streamlines school operations, reduces administrative overhead, and improves parent-school communication, currently being piloted in select schools.',
    stack: ['React Native', 'Node.js', 'MongoDB', 'Tailwind'],
    liveLink: '',
  },
  {
    role: 'Platform',
    name: 'Ofie',
    problem: 'Finding and listing properties in Ghana is fragmented across multiple platforms with poor user experiences, limited search filters, and unreliable listing information.',
    approach: 'Building a property listing platform specifically for the Ghanaian market — with advanced search filters, verified listings, and a clean, intuitive interface that makes property discovery and listing effortless.',
    result: 'A modern, responsive property platform that connects property owners with potential buyers and renters across Ghana, featuring easy listing management and powerful search capabilities.',
    stack: ['Next.js', 'MongoDB', 'Node.js / Express', 'Tailwind'],
    liveLink: '',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-22 md:py-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead num="03" title="Case" highlight="studies" />
        
        <div className="space-y-6">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="relative overflow-hidden rounded-sm border border-black/10 bg-paper p-7 transition hover:shadow-xl md:p-9"
            >
              <div className="absolute inset-x-0 top-0 h-[5px] bg-hazard-sm" />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-bold text-xs uppercase tracking-wide text-[#F5C518]">
                    {study.role}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{study.name}</h3>
                </div>

                {study.liveLink ? (
                  <a
                    href={study.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border border-ink px-4 py-2 font-mono text-xs font-medium transition hover:bg-ink hover:text-yellow"
                  >
                    View live ↗
                  </a>
                ) : (
                  <span className="rounded-sm border border-black/10 px-4 py-2 font-mono text-xs text-gray">
                    Live link coming soon
                  </span>
                )}
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wide text-gray">
                    Problem
                  </div>
                  <p className="mt-2 text-sm text-[#3a3a3c]">{study.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wide text-gray">
                    Approach
                  </div>
                  <p className="mt-2 text-sm text-[#3a3a3c]">{study.approach}</p>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wide text-gray">
                    Result
                  </div>
                  <p className="mt-2 text-sm text-[#3a3a3c]">{study.result}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm bg-[#f0f0f0] px-2.5 py-1 font-mono text-[11.5px] text-[#4a4a4c]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}