import SectionHead from './SectionHead';

const tools: string[] = [
  'React',
  'React Native',
  'Next.js',
  'Flutter',
  'Node.js / Express',
  'NestJS',
  'MongoDB',
  'PostgreSQL',
  'WordPress',
  'Data Analysis',
];

export default function Stack() {
  return (
    <section id="stack" className="bg-paper-dim py-22 md:py-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead num="02" title="Tools I" highlight="build with" />
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-sm border border-black/10 bg-paper px-4 py-2.5 font-mono text-[13.5px] transition hover:bg-ink hover:text-yellow"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}