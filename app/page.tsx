import {
  ArrowUpRight,
  Bot,
  Check,
  Clock3,
  MessageCircleMore,
  PackageCheck,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink } from "@/components/ui/button";

const features = [
  {
    icon: MessageCircleMore,
    title: "Réponses automatiques",
    text: "Des réponses instantanées et cohérentes aux questions récurrentes, à toute heure.",
  },
  {
    icon: Sparkles,
    title: "FAQ intelligente",
    text: "Transformez vos informations boutique en une base de réponses facile à maintenir.",
  },
  {
    icon: RefreshCcw,
    title: "Retours simplifiés",
    text: "Expliquez clairement vos conditions et guidez chaque client dans sa demande.",
  },
  {
    icon: PackageCheck,
    title: "Suivi de commande",
    text: "Rassurez vos clients avec un statut de commande clair, sans mobiliser votre équipe.",
  },
  {
    icon: ShoppingBag,
    title: "Conseils produits",
    text: "Aidez les visiteurs à choisir le bon produit grâce à des recommandations guidées.",
  },
  {
    icon: TrendingUp,
    title: "Statistiques SAV",
    text: "Suivez les conversations, les tickets évités et le temps rendu à votre équipe.",
  },
];

const testimonials = [
  {
    quote:
      "Nous avons réduit de moitié les questions répétitives dès la première semaine. L’équipe peut enfin se concentrer sur les cas complexes.",
    name: "Clara B.",
    role: "Fondatrice, Atelier Sélène",
    initials: "CB",
  },
  {
    quote:
      "L’installation est simple et le widget paraît natif sur notre boutique. Nos clients obtiennent une réponse même le dimanche.",
    name: "Mathieu R.",
    role: "E-commerce Manager, Kinfolk Lab",
    initials: "MR",
  },
  {
    quote:
      "La FAQ intelligente nous a permis d’uniformiser toutes nos réponses. C’est devenu notre premier niveau de support.",
    name: "Inès D.",
    role: "Responsable CX, Maison Auguste",
    initials: "ID",
  },
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="relative overflow-hidden bg-ink pb-24 pt-20 text-white sm:pb-28 sm:pt-24">
        <div className="grid-fade absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-violet/25 blur-[110px]" />
        <div className="container-shell relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-3.5 py-2 text-xs font-medium text-zinc-200">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet">
                <Sparkles size={11} />
              </span>
              Le copilote SAV des boutiques qui grandissent
            </div>
            <h1 className="animate-fade-up text-balance text-4xl font-bold leading-[1.07] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
              L’assistant IA qui répond aux clients de votre boutique{" "}
              <span className="text-gradient">24h/24</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Réduisez les messages SAV, automatisez les réponses fréquentes et
              améliorez l’expérience client sans recruter.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/dashboard" variant="light" arrow>
                Explorer le dashboard
              </ButtonLink>
              <ButtonLink
                href="/demo"
                className="border border-white/15 bg-white/[.06] hover:bg-white/10"
                arrow
              >
                Tester le chatbot
              </ButtonLink>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5"><Check size={13} /> Sans carte bancaire</span>
              <span className="flex items-center gap-1.5"><Check size={13} /> Installation en 5 min</span>
              <span className="flex items-center gap-1.5"><Check size={13} /> Résiliable à tout moment</span>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute inset-x-12 -bottom-8 top-10 rounded-[40px] bg-violet/25 blur-[70px]" />
            <div className="glass relative overflow-hidden rounded-[26px] p-2 shadow-glow">
              <div className="overflow-hidden rounded-[20px] bg-[#f5f5f8]">
                <div className="flex h-11 items-center gap-1.5 border-b border-zinc-200 bg-white px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b66]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffca55]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#48c78e]" />
                  <span className="mx-auto w-48 rounded-md bg-zinc-100 py-1.5 text-center text-[9px] text-zinc-400">
                    app.shopmate.ai
                  </span>
                </div>
                <div className="grid min-h-[370px] grid-cols-[76px_1fr] sm:grid-cols-[180px_1fr]">
                  <div className="border-r border-zinc-200 bg-white p-3 sm:p-4">
                    <div className="mb-7 flex items-center gap-2">
                      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-electric to-violet" />
                      <div className="hidden h-2.5 w-20 rounded-full bg-zinc-900 sm:block" />
                    </div>
                    {[70, 85, 62, 76, 58].map((width, index) => (
                      <div
                        key={width}
                        className={`mb-4 flex items-center gap-2 rounded-lg ${index === 0 ? "bg-violet/10 p-2" : "px-2"}`}
                      >
                        <div className={`h-5 w-5 rounded-md ${index === 0 ? "bg-violet/25" : "bg-zinc-100"}`} />
                        <div className="hidden h-2 rounded-full bg-zinc-200 sm:block" style={{ width }} />
                      </div>
                    ))}
                  </div>
                  <div className="p-4 sm:p-7">
                    <div className="mb-5 flex items-end justify-between">
                      <div>
                        <div className="mb-2 h-3 w-28 rounded bg-zinc-900" />
                        <div className="h-2 w-44 rounded bg-zinc-300" />
                      </div>
                      <div className="h-8 w-24 rounded-lg bg-zinc-900" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-4">
                      {[
                        ["1 284", "+18%"],
                        ["437", "+24%"],
                        ["62 h", "+12%"],
                        ["94%", "+6%"],
                      ].map(([value, trend]) => (
                        <div key={value} className="rounded-xl border border-zinc-200 bg-white p-3">
                          <div className="mb-3 h-6 w-6 rounded-md bg-violet/10" />
                          <p className="text-lg font-bold text-zinc-900">{value}</p>
                          <p className="text-[9px] font-medium text-emerald-600">{trend} ce mois</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-[1.4fr_.8fr]">
                      <div className="h-40 rounded-xl border border-zinc-200 bg-white p-4">
                        <div className="h-2.5 w-28 rounded bg-zinc-800" />
                        <div className="mt-7 flex h-20 items-end gap-2">
                          {[38, 54, 42, 70, 62, 88, 76, 96, 80].map((height) => (
                            <div key={height} className="flex-1 rounded-t bg-gradient-to-t from-violet to-electric" style={{ height: `${height}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="h-40 rounded-xl border border-zinc-200 bg-white p-4">
                        <div className="h-2.5 w-20 rounded bg-zinc-800" />
                        <div className="mt-4 space-y-3">
                          {[72, 54, 65].map((width) => (
                            <div key={width}>
                              <div className="mb-1 h-1.5 rounded bg-zinc-200" style={{ width: `${width}%` }} />
                              <div className="h-1 rounded-full bg-violet/20">
                                <div className="h-full rounded-full bg-violet" style={{ width: `${width}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-400">
            Pensé pour votre stack e-commerce
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 text-sm font-bold text-zinc-400 sm:text-base">
            <span>Shopify</span><span>Woo</span><span>Prestashop</span><span>Stripe</span><span>Gorgias</span>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.15em] text-violet">Le constat</p>
            <h2 className="text-3xl font-bold tracking-[-.035em] sm:text-5xl">
              Votre équipe répond encore aux mêmes questions.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              « Où est ma commande ? », « Comment faire un retour ? », « Quel
              est le délai de livraison ? » Ces demandes simples saturent le SAV
              et ralentissent les réponses qui méritent vraiment une attention humaine.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                <p className="text-3xl font-bold text-red-600">68%</p>
                <p className="mt-1 text-sm text-red-950/60">des demandes sont répétitives</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-3xl font-bold text-amber-600">7h</p>
                <p className="mt-1 text-sm text-amber-950/60">perdues par semaine en moyenne</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[32px] bg-zinc-100 p-5 sm:p-8">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-violet/15 blur-2xl" />
            <div className="relative space-y-3">
              {[
                ["Où est ma commande #4821 ?", "Il y a 2 min", "Commande"],
                ["Comment retourner ma veste ?", "Il y a 4 min", "Retours"],
                ["Livrez-vous en Belgique ?", "Il y a 6 min", "Livraison"],
                ["Le modèle Nova taille grand ?", "Il y a 8 min", "Produit"],
              ].map(([message, time, tag], index) => (
                <div key={message} className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm" style={{ opacity: 1 - index * .14 }}>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-500">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{message}</p>
                    <p className="mt-1 text-xs text-zinc-400">{time}</p>
                  </div>
                  <span className="hidden rounded-full bg-violet/10 px-2.5 py-1 text-[10px] font-semibold text-violet sm:block">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fonctionnalites" className="bg-zinc-50 py-24 sm:py-32">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[.15em] text-violet">La solution</p>
            <h2 className="text-3xl font-bold tracking-[-.035em] sm:text-5xl">
              Un excellent support, sans la file d’attente.
            </h2>
            <p className="mt-5 text-zinc-600">
              ShopMate AI apprend vos règles et vos produits pour aider vos clients au bon moment.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="group rounded-[24px] border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-card">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-violet/10 text-violet transition group-hover:bg-violet group-hover:text-white">
                  <feature.icon size={22} />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[.15em] text-violet">Mise en place</p>
            <h2 className="text-3xl font-bold tracking-[-.035em] sm:text-5xl">
              Opérationnel avant votre prochain café.
            </h2>
          </div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-3">
            <div className="absolute left-[17%] right-[17%] top-7 hidden h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent md:block" />
            {[
              ["01", "Renseignez votre boutique", "Ajoutez vos FAQ, règles de livraison, retours et informations produits."],
              ["02", "Personnalisez le widget", "Adaptez les couleurs, le ton et le message d’accueil à votre marque."],
              ["03", "Copiez une ligne de code", "Collez le script sur votre site. Votre assistant est immédiatement disponible."],
            ].map(([number, title, text]) => (
              <div key={number} className="relative text-center">
                <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ink text-sm font-bold text-white shadow-lg shadow-violet/20">{number}</span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[.15em] text-[#9d8fff]">Ils gagnent du temps</p>
              <h2 className="max-w-xl text-3xl font-bold tracking-[-.035em] sm:text-5xl">
                Le SAV qui travaille aussi quand vous dormez.
              </h2>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {[1,2,3,4,5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
              <span className="ml-2 text-sm text-zinc-400">4,9/5</span>
            </div>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[24px] border border-white/10 bg-white/[.06] p-7">
                <div className="mb-5 flex gap-1 text-amber-400">
                  {[1,2,3,4,5].map((star) => <Star key={star} size={13} fill="currentColor" />)}
                </div>
                <p className="min-h-28 text-sm leading-relaxed text-zinc-300">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric to-violet text-xs font-bold">{testimonial.initials}</div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#5b65ff] via-violet to-[#8b4df7] px-6 py-16 text-center text-white shadow-glow sm:px-12">
            <div className="grid-fade absolute inset-0 opacity-30" />
            <div className="absolute -left-10 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                <Zap size={25} fill="currentColor" />
              </div>
              <h2 className="text-3xl font-bold tracking-[-.035em] sm:text-5xl">
                Prêt à rendre votre SAV instantané ?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Découvrez comment ShopMate AI peut absorber les demandes répétitives et offrir une réponse à chaque client.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/dashboard" variant="light" arrow>Voir la démo gratuite</ButtonLink>
                <ButtonLink href="/pricing" className="border border-white/20 bg-white/10 hover:bg-white/15">Découvrir les tarifs</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
