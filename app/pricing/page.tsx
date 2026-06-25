import { Check, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Pour lancer un support plus rapide.",
    features: ["500 conversations / mois", "1 boutique", "FAQ intelligente", "Widget personnalisable", "Statistiques essentielles"],
  },
  {
    name: "Pro",
    price: "79",
    description: "Pour les boutiques en pleine croissance.",
    popular: true,
    features: ["3 000 conversations / mois", "3 boutiques", "Toutes les automatisations", "Recommandations produits", "Statistiques avancées", "Support prioritaire"],
  },
  {
    name: "Business",
    price: "149",
    description: "Pour les équipes à fort volume.",
    features: ["Conversations illimitées", "10 boutiques", "Rôles d’équipe", "Intégrations avancées", "Rapports exportables", "Accompagnement dédié"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <SiteHeader />
      <section className="relative overflow-hidden pb-20 pt-20 sm:pb-28">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/10 blur-[100px]" />
        <div className="container-shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet/15 bg-violet/5 px-3 py-1.5 text-xs font-bold text-violet">
              <Sparkles size={13} /> Tarification simple
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-[-.04em] sm:text-6xl">
              Un plan adapté à votre croissance.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-zinc-600">
              Commencez simplement, évoluez quand vous en avez besoin. Tous les plans sont sans engagement.
            </p>
          </div>
          <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-[28px] border bg-white p-7 shadow-sm sm:p-8",
                  plan.popular ? "border-violet shadow-glow lg:-translate-y-3" : "border-zinc-200"
                )}
              >
                {plan.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-violet px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Le plus choisi
                  </span>
                )}
                <h2 className="text-lg font-bold">{plan.name}</h2>
                <p className="mt-2 min-h-10 text-sm text-zinc-500">{plan.description}</p>
                <div className="mt-7 flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-[-.05em]">{plan.price} €</span>
                  <span className="pb-1 text-sm text-zinc-500">/ mois</span>
                </div>
                <ButtonLink
                  href="/dashboard"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="mt-7 w-full"
                >
                  Démarrer gratuitement
                </ButtonLink>
                <div className="my-7 h-px bg-zinc-100" />
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-700">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-zinc-500">
            Prix hors taxes · 14 jours d’essai gratuit · Aucune carte bancaire requise
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
