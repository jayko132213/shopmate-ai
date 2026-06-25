"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, CheckCheck, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const responses: Array<{ words: string[]; answer: string }> = [
  {
    words: ["commande", "suivi", "colis"],
    answer:
      "Bien sûr ! Votre commande #SM-4821 a été expédiée et arrivera mardi. Vous recevrez un lien de suivi dès sa prise en charge par le transporteur.",
  },
  {
    words: ["livraison", "délai", "livré"],
    answer:
      "La livraison standard prend 2 à 4 jours ouvrés en France métropolitaine. Elle est offerte dès 60 € d’achat.",
  },
  {
    words: ["retour", "renvoyer", "échanger"],
    answer:
      "Vous disposez de 30 jours après réception pour retourner gratuitement un article non utilisé. Je peux vous guider pour générer l’étiquette.",
  },
  {
    words: ["remboursement", "remboursé", "argent"],
    answer:
      "Un remboursement est traité sous 3 à 5 jours ouvrés après réception du retour. Il apparaît ensuite sur votre moyen de paiement initial.",
  },
  {
    words: ["produit", "taille", "stock", "recommand"],
    answer:
      "Je peux vous aider à choisir ! Notre modèle Nova est le plus polyvalent et taille normalement. Quelle taille portez-vous habituellement ?",
  },
  {
    words: ["prix", "coûte", "promo", "réduction"],
    answer:
      "Le prix affiché inclut la TVA. La livraison est offerte dès 60 €, et le code BIENVENUE10 offre -10 % sur une première commande.",
  },
  {
    words: ["contact", "humain", "conseiller", "email"],
    answer:
      "Notre équipe est disponible du lundi au vendredi, de 9h à 18h. Je peux transmettre votre demande à un conseiller dès maintenant.",
  },
];

function getBotAnswer(message: string) {
  const normalized = message.toLowerCase();
  return (
    responses.find(({ words }) => words.some((word) => normalized.includes(word)))
      ?.answer ??
    "Je peux vous renseigner sur une commande, la livraison, un retour, un remboursement, un produit ou nos prix. Que souhaitez-vous savoir ?"
  );
}

export function Chatbot({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: "Bonjour 👋 Je suis l’assistant de Maison Nova. Comment puis-je vous aider aujourd’hui ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || typing) return;

    setMessages((current) => [
      ...current,
      { id: Date.now(), from: "user", text },
    ]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: Date.now() + 1, from: "bot", text: getBotAnswer(text) },
      ]);
      setTyping(false);
    }, 650);
  }

  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-[26px] border border-zinc-200 bg-white shadow-2xl shadow-black/10",
        compact ? "h-[570px]" : "h-[680px]",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-zinc-100 px-5 py-4">
          <div className="relative grid h-11 w-11 place-items-center rounded-full bg-ink text-white">
            <Bot size={21} />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">Assistant Maison Nova</p>
            <p className="text-xs text-emerald-600">En ligne · répond instantanément</p>
          </div>
          <Sparkles className="ml-auto text-violet" size={18} />
        </div>

        <div className="hide-scrollbar flex-1 space-y-4 overflow-y-auto bg-zinc-50/60 p-4">
          <div className="text-center text-[11px] font-medium uppercase tracking-wider text-zinc-400">
            Aujourd’hui
          </div>
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn("flex", message.from === "user" && "justify-end")}
            >
              <div
                className={cn(
                  "max-w-[88%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed",
                  message.from === "bot"
                    ? "rounded-tl-md border border-zinc-200 bg-white text-zinc-700 shadow-sm"
                    : "rounded-tr-md bg-gradient-to-br from-electric to-violet text-white"
                )}
              >
                {message.text}
                {message.from === "user" && (
                  <CheckCheck className="ml-auto mt-1 opacity-70" size={13} />
                )}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex">
              <div className="flex gap-1 rounded-2xl rounded-tl-md border border-zinc-200 bg-white px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:240ms]" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-zinc-100 bg-white p-3">
          <form onSubmit={submit} className="flex items-center gap-2 rounded-2xl bg-zinc-100 p-1.5 pl-4">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Écrivez votre question…"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
              aria-label="Votre message"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-white transition hover:bg-violet disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Envoyer"
            >
              <Send size={16} />
            </button>
          </form>
          <p className="mt-2 text-center text-[10px] text-zinc-400">
            Propulsé par <span className="font-semibold text-zinc-600">ShopMate AI</span>
          </p>
        </div>
      </div>
    </div>
  );
}
