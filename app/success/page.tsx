import { CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-zinc-50 px-4 py-12">
      <section className="w-full max-w-xl rounded-[32px] border border-zinc-200 bg-white p-8 text-center shadow-card sm:p-12">
        <Logo />
        <div className="mx-auto mt-10 grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={34} />
        </div>
        <h1 className="mt-7 text-3xl font-bold tracking-[-.04em] sm:text-4xl">
          Votre essai est lancé !
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
          Votre abonnement ShopMate AI bénéficie de 14 jours d’essai gratuit.
          Vous pouvez maintenant découvrir votre espace de démonstration.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/dashboard">Ouvrir le dashboard</ButtonLink>
          <ButtonLink href="/" variant="secondary">Retour à l’accueil</ButtonLink>
        </div>
        <p className="mt-8 text-xs text-zinc-400">
          Paiement Stripe en environnement de test — aucun prélèvement réel.
        </p>
      </section>
    </main>
  );
}
