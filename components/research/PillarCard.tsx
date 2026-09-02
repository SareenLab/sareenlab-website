import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { CellIcon, DNAIcon, TissueIcon, RobotIcon } from "./PillarIcons";
import type { Pillar } from "@/lib/pillars";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cell: CellIcon,
  dna: DNAIcon,
  tissue: TissueIcon,
  robot: RobotIcon,
};

interface PillarCardProps {
  pillar: Pillar;
  index?: number;
}

export default function PillarCard({ pillar, index = 0 }: PillarCardProps) {
  const Icon = iconMap[pillar.icon] ?? CellIcon;

  return (
    <article
      className="group relative surface-card rounded-sm p-8 flex flex-col gap-6 hover:border-accent/30 transition-all duration-300 hover:bg-bg-surface/80"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/60 transition-all duration-500" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-5xl font-semibold text-text-primary/10 tracking-tighter pillar-number select-none group-hover:text-accent/15 transition-colors duration-300">
          {pillar.number}
        </span>
        <Icon className="w-10 h-10 text-accent shrink-0 opacity-80" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold tracking-label-wide uppercase text-accent">
          {pillar.tagline}
        </p>
        <h3 className="font-display font-semibold text-xl text-text-primary tracking-tight leading-snug">
          {pillar.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">{pillar.body}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {pillar.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={pillar.href}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-200 mt-2"
      >
        Explore platform
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  );
}
