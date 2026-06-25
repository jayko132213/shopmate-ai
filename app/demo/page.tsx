import { ArrowLeft, CheckCircle2, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Chatbot } from "@/components/chatbot";
import { Logo } from "@/components/logo";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f7]">
      <header className="border-b border-zinc-200 bg-white">
        <div className="container-shell flex h-[72px] items-center justify-between">
          <Logo />
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-ink">
            <ArrowLeft size={16} /> Retour au site
          </Link>
        </div>
      </header>
      <section className="container-shell grid min-h-[calc(100vh-72px)] items-center gap-10 py-12 lg:grid-cols-[1fr_480px] lg:gap-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet/10 px-3 py-1.5 text-xs font-bold text-violet">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet" /> Démo interactive
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-[-.04em] sm:text-6xl">
            Parlez avec votre futur assistant.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Cette démo utilise des réponses simulées. Posez une question sur une
            commande, la livraison, les retours, un remboursement, un produit ou les prix.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {[
              [Zap, "Réponse en moins d’une seconde"],
              [MessageCircle, "Disponible 24h/24"],
              [ShieldCheck, "Réponses selon vos règles"],
              [CheckCircle2, "Transfert humain possible"],
            ].map(([Icon, text]) => {
              const FeatureIcon = Icon;
              return (
                <div key={text as string} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-700">
                  <FeatureIcon className="text-violet" size={18} />
                  {text as string}
                </div>
              );
            })}
          </div>
          <div className="mt-8 rounded-2xl border border-violet/15 bg-violet/5 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-violet">Essayez par exemple</p>
            <p className="mt-2 text-sm text-zinc-700">« Où est ma commande ? » ou « Comment faire un retour ? »</p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[480px] animate-float">
          <Chatbot compact />
        </div>
      </section>
    </main>
  );
}
