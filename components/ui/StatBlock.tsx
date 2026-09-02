interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatBlock({ value, label, className = "" }: StatBlockProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="font-display font-semibold text-3xl md:text-4xl text-text-primary tracking-tight">
        {value}
      </span>
      <span className="text-xs text-text-muted tracking-label uppercase">{label}</span>
    </div>
  );
}
