interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "surface" | "outline";
  className?: string;
}

const variantStyles = {
  accent: "bg-accent/10 text-accent border border-accent/20",
  surface: "bg-bg-surface text-text-muted border border-grid",
  outline: "border border-grid text-text-muted",
};

export default function Badge({ children, variant = "surface", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium tracking-label uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
