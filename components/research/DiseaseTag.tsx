interface DiseaseTagProps {
  label: string;
  active?: boolean;
}

export default function DiseaseTag({ label, active = true }: DiseaseTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm border transition-colors duration-200 ${
        active
          ? "border-accent/30 text-text-primary bg-accent/5 hover:bg-accent/10"
          : "border-grid text-text-muted bg-transparent hover:border-accent/20"
      }`}
    >
      {active && (
        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
      )}
      {label}
    </span>
  );
}
