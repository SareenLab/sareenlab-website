import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  href?: string;
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg-primary font-semibold hover:bg-accent-light active:bg-accent-dark",
  secondary:
    "border border-accent text-accent hover:bg-accent hover:text-bg-primary",
  ghost:
    "text-text-muted hover:text-text-primary border border-grid hover:border-accent/40",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-sm font-medium tracking-label uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40";
  const styles = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
