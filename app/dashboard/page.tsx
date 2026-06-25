"use client";

import { useState } from "react";
import {
  BarChart3,
  Bell,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Copy,
  FileText,
  Headphones,
  Home,
  Inbox,
  LayoutDashboard,
  Library,
  LogOut,
  Menu,
  MessageSquareText,
  Package,
  PanelLeftClose,
  RefreshCcw,
  Search,
  Settings,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Chatbot } from "@/components/chatbot";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Vue d’ensemble", icon: LayoutDashboard, active: true },
  { label: "Conversations", icon: Inbox, badge: "12" },
  { label: "Base de connaissances", icon: Library },
  { label: "Automatisations", icon: Sparkles },
  { label: "Statistiques", icon: BarChart3 },
];

const knowledge = [
  { icon: CircleHelp, title: "FAQ", subtitle: "24 réponses publiées", color: "bg-violet/10 text-violet", progress: 92 },
  { icon: RefreshCcw, title: "Politique de retour", subtitle: "Mise à jour il y a 2 jours", color: "bg-blue-50 text-blue-600", progress: 100 },
  { icon: Clock3, title: "Délais de livraison", subtitle: "8 zones configurées", color: "bg-amber-50 text-amber-600", progress: 84 },
  { icon: Package, title: "Informations produits", subtitle: "128 produits synchronisés", color: "bg-emerald-50 text-emerald-600", progress: 96 },
];

const conversations = [
  { initials: "LM", name: "Léa Martin", message: "Où est ma commande #4821 ?", time: "2 min", status: "Résolu", color: "bg-[#E8E2FF] text-violet" },
  { initials: "TH", name: "Thomas Henry", message: "Comment retourner le produit ?", time: "8 min", status: "Résolu", color: "bg-blue-100 text-blue-700" },
  { initials: "SD", name: "Sofia Diallo", message: "Le modèle Nova taille-t-il grand ?", time: "14 min", status: "En cours", color: "bg-amber-100 text-amber-700" },
  { initials: "JP", name: "Jules Petit", message: "Livrez-vous en Suisse ?", time: "27 min", status: "Résolu", color: "bg-emerald-100 text-emerald-700" },
];

export default function DashboardPage() {
  const [mobileNav, setMobileNav] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyEmbed() {
    await navigator.clipboard.writeText(
      '<script src="https://cdn.shopmate.ai/widget.js" data-shop="ma-boutique"></script>'
    );
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="min-h-screen bg-[#f6f6f8] text-[#16161d]">
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-[250px] border-r border-zinc-200 bg-white p-4 transition-transform lg:translate-x-0",
        mobileNav ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-11 items-center justify-between px-2">
          <Logo />
          <button className="lg:hidden" onClick={() => setMobileNav(false)} aria-label="Fermer le menu"><X size={20} /></button>
        </div>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-zinc-200 p-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-xs font-bold text-white">MN</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold">Maison Nova</p>
            <p className="truncate text-[10px] text-zinc-400">Plan Pro</p>
          </div>
          <ChevronDown size={14} className="text-zinc-400" />
        </div>
        <nav className="mt-6 space-y-1">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.15em] text-zinc-400">Espace de travail</p>
          {nav.map((item) => (
            <button key={item.label} className={cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition",
              item.active ? "bg-ink text-white" : "text-zinc-600 hover:bg-zinc-100 hover:text-ink"
            )}>
              <item.icon size={17} />
              <span className="flex-1">{item.label}</span>
              {item.badge && <span className="rounded-full bg-violet px-2 py-0.5 text-[9px] font-bold text-white">{item.badge}</span>}
            </button>
          ))}
        </nav>
        <div className="mt-7 space-y-1">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.15em] text-zinc-400">Compte</p>
          {[
            [Users, "Équipe"],
            [Settings, "Paramètres"],
            [CircleHelp, "Centre d’aide"],
          ].map(([Icon, label]) => {
            const ItemIcon = Icon;
            return (
              <button key={label as string} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-zinc-600 hover:bg-zinc-100">
                <ItemIcon size={17} /> {label as string}
              </button>
            );
          })}
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-gradient-to-br from-violet to-[#5547db] p-4 text-white">
          <Sparkles size={18} />
          <p className="mt-3 text-xs font-bold">1 946 conversations restantes</p>
          <div className="mt-2 h-1.5 rounded-full bg-white/20">
            <div className="h-full w-[64%] rounded-full bg-white" />
          </div>
          <p className="mt-2 text-[10px] text-white/65">Renouvellement dans 18 jours</p>
        </div>
      </aside>

      {mobileNav && <button onClick={() => setMobileNav(false)} className="fixed inset-0 z-40 bg-black/30 lg:hidden" aria-label="Fermer" />}

      <div className="lg:pl-[250px]">
        <header className="sticky top-0 z-30 flex h-[72px] items-center border-b border-zinc-200 bg-white/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <button onClick={() => setMobileNav(true)} className="mr-3 grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 lg:hidden" aria-label="Ouvrir le menu"><Menu size={18} /></button>
          <div>
            <p className="text-sm font-bold sm:text-base">Vue d’ensemble</p>
            <p className="hidden text-[11px] text-zinc-400 sm:block">Jeudi 25 juin 2026</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="relative grid h-9 w-9 place-items-center rounded-xl border border-zinc-200 bg-white text-zinc-500">
              <Bell size={17} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet" />
            </button>
            <div className="ml-1 flex items-center gap-2 border-l border-zinc-200 pl-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-[10px] font-bold text-white">NB</div>
              <div className="hidden sm:block">
                <p className="text-xs font-bold">Nina Bernard</p>
                <p className="text-[10px] text-zinc-400">Administratrice</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-2xl font-bold tracking-[-.03em] sm:text-3xl">Bonjour Nina 👋</h1>
              <p className="mt-1 text-sm text-zinc-500">Voici ce que votre assistant a accompli cette semaine.</p>
            </div>
            <Link href="/demo" className="inline-flex w-fit items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet">
              <MessageSquareText size={15} /> Tester le chatbot
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              [MessageSquareText, "Conversations", "1 284", "+18,4%", "bg-violet/10 text-violet"],
              [Headphones, "Tickets évités", "437", "+24,1%", "bg-blue-50 text-blue-600"],
              [Clock3, "Temps économisé", "62 h", "+12,8%", "bg-amber-50 text-amber-600"],
              [Star, "Satisfaction", "94%", "+6,2%", "bg-emerald-50 text-emerald-600"],
            ].map(([Icon, label, value, trend, color]) => {
              const StatIcon = Icon;
              return (
                <article key={label as string} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className={cn("grid h-10 w-10 place-items-center rounded-xl", color as string)}><StatIcon size={18} /></div>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">{trend as string}</span>
                  </div>
                  <p className="mt-5 text-2xl font-bold">{value as string}</p>
                  <p className="mt-1 text-xs text-zinc-400">{label as string}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 2xl:grid-cols-[1fr_375px]">
            <div className="space-y-5">
              <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-bold">Base de connaissances</h2>
                    <p className="mt-1 text-[11px] text-zinc-400">Les sources utilisées par votre assistant</p>
                  </div>
                  <button className="text-xs font-bold text-violet">Tout gérer</button>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {knowledge.map((item) => (
                    <button key={item.title} className="group flex items-center gap-3 rounded-2xl border border-zinc-200 p-4 text-left transition hover:border-violet/30 hover:shadow-sm">
                      <div className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", item.color)}><item.icon size={18} /></div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold">{item.title}</p>
                        <p className="mt-1 truncate text-[10px] text-zinc-400">{item.subtitle}</p>
                        <div className="mt-2 h-1 rounded-full bg-zinc-100"><div className="h-full rounded-full bg-violet" style={{ width: `${item.progress}%` }} /></div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-zinc-100 p-5 sm:px-6">
                  <div>
                    <h2 className="text-sm font-bold">Conversations récentes</h2>
                    <p className="mt-1 text-[11px] text-zinc-400">Réponses prises en charge automatiquement</p>
                  </div>
                  <button className="hidden text-xs font-bold text-violet sm:block">Voir toutes</button>
                </div>
                <div className="divide-y divide-zinc-100">
                  {conversations.map((conversation) => (
                    <div key={conversation.name} className="flex items-center gap-3 px-4 py-3.5 sm:px-6">
                      <div className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full text-[10px] font-bold", conversation.color)}>{conversation.initials}</div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold">{conversation.name}</p>
                        <p className="mt-0.5 truncate text-[11px] text-zinc-400">{conversation.message}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-zinc-400">{conversation.time}</p>
                        <span className={cn("mt-1 inline-flex items-center gap-1 text-[9px] font-bold", conversation.status === "Résolu" ? "text-emerald-600" : "text-amber-600")}>
                          <span className={cn("h-1.5 w-1.5 rounded-full", conversation.status === "Résolu" ? "bg-emerald-500" : "bg-amber-500")} /> {conversation.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-4">
              <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-bold">Aperçu du widget</h2>
                    <p className="mt-1 text-[10px] text-zinc-400">Visible par vos clients</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Actif</span>
                </div>
                <Chatbot compact className="h-[510px] rounded-2xl shadow-none" />
              </section>

              <button
                onClick={copyEmbed}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold text-white transition",
                  copied ? "bg-emerald-600" : "bg-ink hover:bg-violet"
                )}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Code copié !" : "Copier le code d’intégration"}
              </button>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
