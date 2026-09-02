interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs text-text-muted bg-white/[0.04] border border-grid rounded-sm tracking-wide hover:text-accent hover:border-accent/30 transition-colors duration-200 ${className}`}
    >
      {children}
    </span>
  );
}
