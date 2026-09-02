interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({ eyebrow, title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <div className={`pt-32 pb-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-label-wide uppercase text-accent mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tighter leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-text-muted max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
