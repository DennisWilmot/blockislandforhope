import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "white";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-forest text-white hover:bg-[#165a3f] focus-visible:outline-brand-forest",
  ghost:
    "border border-current bg-transparent text-white/90 hover:bg-white/10 focus-visible:outline-white",
  white:
    "bg-white text-brand-forest hover:bg-brand-cream focus-visible:outline-white",
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
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
