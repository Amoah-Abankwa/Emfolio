interface SectionHeadProps {
  num: string;
  title: string;
  highlight: string;
  center?: boolean;
}

export default function SectionHead({ num, title, highlight, center = false }: SectionHeadProps) {
  return (
    <div className={`mb-11 flex items-baseline gap-4 ${center ? 'justify-center' : ''}`}>
      <span className="rounded-sm border border-black/10 px-2.5 py-1 font-mono text-[13px] text-[#F5C518]">
        {num}
      </span>
      <h2 className="font-display text-[26px] font-semibold tracking-tight sm:text-4xl">
        {title} <span className="text-[#F5C518]">{highlight}</span>
      </h2>
    </div>
  );
}