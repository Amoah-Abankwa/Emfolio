import Link from 'next/link';
import SectionHead from './SectionHead';

interface GitHubConfig {
  username: string;
  link: string;
}

// Or dynamically:
const GITHUB_USERNAME: string = process.env.GITHUB_USERNAME || 'yourusername';
const GITHUB_LINK: string = `https://github.com/${GITHUB_USERNAME}`;

export default function GitHubActivity() {
  return (
    <section id="activity" className="bg-paper-dim py-22 md:py-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead num="04" title="Code" highlight="activity" />

        <div className="overflow-hidden rounded-sm border border-black/10 bg-paper p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-mono text-xs uppercase tracking-wide text-[#16241C]/60">
                GitHub
              </div>
              <div className="mt-1 font-display text-lg font-semibold">
                @{GITHUB_USERNAME}
              </div>
            </div>
            <Link
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-ink px-4 py-2 font-mono text-xs font-medium transition hover:bg-ink hover:text-yellow"
            >
              View profile ↗
            </Link>
          </div>

          {/* Contribution graph — rendered by an external image service using the
              GitHub username above. No API key needed, but it only shows real
              data once GITHUB_USERNAME is a real, public GitHub account. */}
          <div className="mt-6 overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/2ea043/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              className="min-w-[640px]"
            />
          </div>

          <p className="mt-4 font-mono text-[11px] text-gray">
            Contribution graph updates automatically from GitHub — nothing to maintain here once
            your username is set.
          </p>
        </div>
      </div>
    </section>
  );
}