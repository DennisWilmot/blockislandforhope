import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "white";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-forest text-white hover:bg-brand-forest-dark focus-visible:outline-brand-forest shadow-sm hover:shadow-md",
  ghost:
    "border border-white/30 bg-white/5 text-white hover:bg-white/15 focus-visible:outline-white backdrop-blur-sm",
  white:
    "bg-white text-brand-forest hover:bg-brand-cream focus-visible:outline-white shadow-sm hover:shadow-md",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
