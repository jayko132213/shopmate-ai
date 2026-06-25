import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric to-violet text-white shadow-lg shadow-violet/25">
        <Sparkles size={17} />
      </span>
      <span className={cn("text-[17px] font-bold tracking-tight", light && "text-white")}>
        ShopMate <span className="text-violet">AI</span>
      </span>
    </Link>
  );
}
