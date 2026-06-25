import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <div className="container-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />
        <div className="flex flex-wrap justify-center gap-5 text-sm text-zinc-500">
          <Link href="/pricing" className="hover:text-ink">Tarifs</Link>
          <Link href="/demo" className="hover:text-ink">Démo</Link>
          <Link href="/dashboard" className="hover:text-ink">Dashboard</Link>
        </div>
        <p className="text-sm text-zinc-400">© 2026 ShopMate AI</p>
      </div>
    </footer>
  );
}
