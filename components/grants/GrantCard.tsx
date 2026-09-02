interface Grant {
  agency: string;
  title: string;
  amount?: string;
  role: string;
  period: string;
  status?: "active" | "past";
}

interface GrantCardProps {
  grant: Grant;
  index: number;
}

export default function GrantCard({ grant, index }: GrantCardProps) {
  return (
    <div className="surface-card rounded-sm p-5 flex flex-col gap-3 hover:border-accent/20 transition-colors duration-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono text-text-muted/40">{String(index + 1).padStart(2, "0")}</span>
          <span
            className={`text-xs font-semibold tracking-label uppercase px-2 py-0.5 rounded-sm border ${
              grant.role === "PI"
                ? "text-accent bg-accent/10 border-accent/20"
                : grant.role === "Co-PI"
                ? "text-accent/80 bg-accent/5 border-accent/15"
                : "text-text-muted bg-white/[0.03] border-grid"
            }`}
          >
            {grant.role}
          </span>
        </div>
        <span className="text-xs text-text-muted shrink-0">{grant.period}</span>
      </div>
      <div>
        <p className="text-xs font-semibold tracking-label uppercase text-accent/70 mb-1">{grant.agency}</p>
        <p className="text-sm text-text-primary leading-snug">{grant.title}</p>
      </div>
      {grant.amount && (
        <p className="text-sm font-medium text-text-muted">{grant.amount}</p>
      )}
    </div>
  );
}

export type { Grant };
