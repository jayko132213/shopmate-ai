import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopMate AI — Votre SAV e-commerce, automatisé",
  description:
    "L’assistant IA qui répond aux clients de votre boutique 24h/24.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
