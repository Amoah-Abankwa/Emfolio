import Link from 'next/link';
import ContactForm from './ContactForm';

const WHATSAPP_LINK: string = 'https://wa.me/233547846425'; 
const GITHUB_LINK: string = 'https://github.com/Amoah-Abankwa'; 
const LINKEDIN_LINK: string = 'https://www.linkedin.com/in/emmanuel-amoah-abankwa'; 
const EMAIL: string = 'amoahabankwa@gmail.com'; 

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 text-center text-[#ffffff] md:py-28">
      <div className="mx-auto max-w-6xl px-7">
        <div className="mb-11 flex items-baseline justify-center gap-4">
          <span className="rounded-sm border border-white/15 px-2.5 py-1 font-mono text-[13px] text-[#F5C518]">
            05
          </span>
          <h2 className="font-display text-[26px] font-semibold tracking-tight sm:text-4xl">
            Let&apos;s <span className="text-[#F5C518]">build together</span>
          </h2>
        </div>

        <h2 className="mx-auto max-w-3xl font-display text-[32px] font-bold leading-tight tracking-tight sm:text-5xl">
          Have a project in mind - <span className="text-[#F5C518]">or need a developer</span> on
          your team?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-paper/70">
          Message me directly on WhatsApp, or send a message through the form below.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[#F5C518] px-6 py-3.5 font-mono text-sm font-medium text-[#000000] transition hover:-translate-y-0.5 hover:bg-[#ffd633]"
          >
            Message on WhatsApp
          </Link>
          <Link
            href={`mailto:${EMAIL}`}
            className="rounded-sm border border-white/15 px-6 py-3.5 font-mono text-sm font-medium transition hover:border-[#F5C518] hover:text-[#F5C518]"
          >
            Send an email
          </Link>
        </div>

        <ContactForm />

        <div className="mt-14 flex flex-wrap justify-center gap-8 font-mono text-[13.5px]">
          <Link
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent opacity-75 transition hover:border-[#F5C518] hover:text-[#F5C518] hover:opacity-100"
          >
            GitHub ↗
          </Link>
          <Link
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent opacity-75 transition hover:border-[#F5C518] hover:text-[#F5C518] hover:opacity-100"
          >
            LinkedIn ↗
          </Link>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent opacity-75 transition hover:border-[#F5C518] hover:text-[#F5C518] hover:opacity-100"
          >
            WhatsApp ↗
          </Link>
        </div>
      </div>
    </section>
  );
}