import Link from 'next/link';
import React from 'react';

const WHATSAPP_LINK: string = 'https://wa.me/233000000000'; // TODO: replace with your real WhatsApp number
const GITHUB_LINK: string = 'https://github.com/yourusername'; // TODO
const LINKEDIN_LINK: string = 'https://linkedin.com/in/yourusername'; // TODO

interface Stat {
  num: string;
  label: string;
}

const stats: Stat[] = [
  { num: '2', label: 'Companies led' },
  { num: '10+', label: 'Platforms shipped' },
  { num: '5+', label: 'Core frameworks' },
  { num: '∞', label: 'Curiosity' },
];

export default function Hero() {
  return (
    <section id="top" className="bg-[#000000] py-24 text-[#FFFFFF] md:py-28">
      <div className="mx-auto max-w-6xl px-7">
        <div className="mb-6 inline-flex items-center gap-2.5 font-mono text-[13px] text-[#F5C518] before:block before:h-px before:w-6 before:bg-[#F5C518]">
          Software Developer · Data Analyst · Ai Enthusiast
        </div>

        <h1 className="max-w-4xl font-display text-[40px] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[76px]">
          Amoah-Abankwa <span className="text-[#F5C518]">Emmanuel.</span>
          <br />
          I build platforms that work.
        </h1>

        <p className="mt-6 max-w-xl text-base text-paper/70 sm:text-lg">
          Mobile &amp; web applications, data-driven products, and the businesses built around
          them. CEO of YenMotion, co-founder of Slicon - currently building Briii on Next.js,
          MongoDB &amp; Express.
        </p>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[#F5C518] px-6 py-3.5 font-mono text-sm font-medium text-[#000000] transition hover:-translate-y-0.5 hover:bg-[#ffd633]"
          >
            Chat on WhatsApp
          </Link>
          <Link
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-white/10 px-6 py-3.5 font-mono text-sm font-medium transition hover:border-[#F5C518] hover:text-[#F5C518]"
          >
            View GitHub
          </Link>
          <Link
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-white/10 px-6 py-3.5 font-mono text-sm font-medium transition hover:border-[#F5C518] hover:text-[#F5C518]"
          >
            Connect on LinkedIn
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 border-t border-white/10 pt-6 sm:grid-cols-4">
          {stats.map(({ num, label }) => (
            <div key={label}>
              <span className="font-mono text-2xl font-medium text-[#F5C518]">{num}</span>
              <span className="mt-1 block text-[12.5px] uppercase tracking-wide text-paper/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}