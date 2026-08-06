import SectionHead from './SectionHead';

// TODO: replace each entry with a real organization and drop its logo file into
// client/public/logos/ (transparent PNG or SVG works best). Then swap the
// placeholder <div> below for an <img src="/logos/your-file.svg" alt="..." />.
const collaborators = [
  { name: 'YenMotion' },
  { name: 'Tutors OY' },
  { name: 'Slicon' },
  { name: 'Xtra C' },
  { name: 'Handyman' },
  { name: 'WorldLab Tech' },
];

export default function Collaborators() {
  return (
    <section id="collaborators" className="py-22 md:py-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead num="05" title="Institutions &" highlight="organizations" />
        <p className="-mt-6 mb-10 max-w-xl text-sm text-gray">
          Companies, institutions, and communities I&apos;ve collaborated or volunteered with.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {collaborators.map((c) => (
            <div
              key={c.name}
              className="flex h-20 items-center justify-center rounded-sm border border-black/10 bg-[#f0f0f0] px-3 grayscale transition hover:grayscale-0"
            >
              {/* Placeholder — replace with:
                  <img src="/logos/your-file.svg" alt={c.name} className="max-h-8 w-auto" />
              */}
              <span className="text-center font-mono text-[11px] text-black">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
