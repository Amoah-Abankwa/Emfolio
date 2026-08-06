'use client';
import { useState } from 'react';
import Link from 'next/link';

const WHATSAPP_LINK: string = 'https://wa.me/233000000000'; // TODO: replace with your real WhatsApp number

interface NavLink {
  href: string;
  label: string;
}

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  const links: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#stack', label: 'Stack' },
    { href: '#ventures', label: 'Ventures' },
    { href: '#journey', label: 'Journey' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="h-[10px] w-full bg-hazard" />
      <header className="sticky top-0 z-50 border-b border-black/10 bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
          <Link href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
            <span className="inline-block h-2 w-2 rounded-sm border border-ink bg-[#F5C518]" />
            EMMANUEL.DEV
          </Link>

          <div
            className={`fixed left-0 right-0 top-16 z-40 flex flex-col gap-0 border-b border-black/10 bg-paper px-7 pb-4 pt-2 transition-transform duration-200 md:static md:flex-row md:items-center md:gap-8 md:border-none md:bg-transparent md:p-0 md:transition-none ${
              open ? 'translate-y-0' : '-translate-y-[140%] md:translate-y-0'
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-3 text-sm font-medium opacity-75 transition hover:opacity-100 md:border-none md:py-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm border border-[#000000] bg-[#000000] px-4 py-2.5 font-mono text-[13px] font-medium text-[#F5C518] transition hover:-translate-y-0.5 md:inline-block"
          >
            Let&apos;s talk →
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="flex flex-col gap-[5px] p-1.5 md:hidden"
          >
            <span className="block h-[2px] w-[22px] bg-ink" />
            <span className="block h-[2px] w-[22px] bg-ink" />
            <span className="block h-[2px] w-[22px] bg-ink" />
          </button>
        </nav>
      </header>
    </>
  );
}