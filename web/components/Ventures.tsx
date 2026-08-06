import React from 'react';
import SectionHead from './SectionHead';

interface Venture {
  role: string;
  name: string;
  desc: string;
  stack?: string[];
}

const ventures: Venture[] = [
  {
    role: 'Founder & CEO',
    name: 'YenMotion',
    desc: 'The company I lead - where product, technology, and business come together.',
  },
  {
    role: 'Co-founder',
    name: 'Slicon',
    desc: 'Co-built from the ground up alongside a team I trust.',
  },
  {
    role: 'Platform',
    name: 'Briii',
    desc: 'A platform built end-to-end on a modern JavaScript stack - this site included.',
    stack: ['Next.js', 'MongoDB', 'Node.js / Express'],
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-22 md:py-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead num="03" title="Ventures &" highlight="builds" />
        <div className="grid gap-5 md:grid-cols-3">
          {ventures.map((venture) => (
            <div
              key={venture.name}
              className="relative overflow-hidden rounded-sm border border-black/10 bg-paper p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-[5px] bg-hazard-sm" />
              <div className="mt-3 font-bold text-xs uppercase tracking-wide text-[#F5C518]">
                {venture.role}
              </div>
              <div className="mt-2 font-bold text-xl font-semibold">{venture.name}</div>
              <p className="mt-3 text-sm text-gray">{venture.desc}</p>
              {venture.stack && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {venture.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm bg-paper-dim px-2.5 py-1 font-mono text-[11.5px] text-[#4a4a4c]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}