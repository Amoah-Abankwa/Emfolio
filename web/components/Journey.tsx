import SectionHead from './SectionHead';

interface JourneyItem {
  tag: string;
  title: string;
  desc: string;
}

const items: JourneyItem[] = [
  {
    tag: 'SOLO',
    title: 'Independent builder',
    desc: 'Designing, building, and shipping platforms end-to-end on my own when speed and ownership matter most.',
  },
  {
    tag: 'TEAM',
    title: 'Collaborative development',
    desc: 'Co-building with other developers, institutions, and organizations on larger, longer-term products.',
  },
  {
    tag: 'DESIGN',
    title: 'Working with designers',
    desc: 'Partnering closely with UI and graphic designers so every product I ship looks as good as it works.',
  },
  {
    tag: 'FREELANCE',
    title: 'Client work',
    desc: 'Available for freelance projects - from custom-built platforms to WordPress websites, delivered clean and on time.',
  },
  {
    tag: 'GIVE BACK',
    title: 'Volunteering',
    desc: 'Contributing time to tech and humanitarian initiatives, and staying engaged through summits, conferences, and talks.',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-paper-dim py-22 md:py-24">
      <div className="mx-auto max-w-6xl px-7">
        <SectionHead num="04" title="How I" highlight="work" />
        <div className="border-t border-black/10">
          {items.map((item) => (
            <div
              key={item.tag}
              className="grid gap-1.5 border-b border-black/10 py-6 md:grid-cols-[120px_1fr] md:gap-7"
            >
              <span className="pt-0.5 font-bold text-[13px] text-[#f8c409]">{item.tag}</span>
              <div>
                <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                <p className="mt-1.5 max-w-[60ch] text-[14.5px] text-gray">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}