import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  arrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200",
        variant === "primary" &&
          "bg-ink text-white shadow-lg shadow-violet/20 hover:-translate-y-0.5 hover:bg-violet",
        variant === "secondary" &&
          "border border-zinc-200 bg-white text-ink hover:border-zinc-400 hover:bg-zinc-50",
        variant === "light" &&
          "bg-white text-ink shadow-xl shadow-black/10 hover:-translate-y-0.5",
        className
      )}
    >
      {children}
      {arrow && <ArrowRight size={16} />}
    </Link>
  );
}
