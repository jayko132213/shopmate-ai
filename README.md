# ShopMate AI

MVP front-end d’un SaaS français pour automatiser le support client des boutiques e-commerce.

## Fonctionnalités

- Landing page SaaS responsive
- Page de tarifs avec trois offres
- Dashboard de démonstration
- Chatbot front-end fonctionnel avec réponses par mots-clés
- Base de connaissances, conversations et statistiques simulées
- Code d’intégration copiable
- Structure prête pour Supabase, Stripe, une API IA, Shopify et WooCommerce

## Technologies

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React

## 1. Lancer le projet en local

Prérequis : installer [Node.js](https://nodejs.org/) en version 20 ou plus récente.

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

Pour vérifier la version de production :

```bash
npm run build
npm run start
```

## 2. Mettre le projet sur GitHub

1. Créez un compte sur [GitHub](https://github.com/) si nécessaire.
2. Créez un nouveau dépôt vide nommé `shopmate-ai`.
3. Dans le terminal, à la racine du projet, lancez :

```bash
git init
git add .
git commit -m "Initial commit - ShopMate AI"
git branch -M main
git remote add origin https://github.com/VOTRE-IDENTIFIANT/shopmate-ai.git
git push -u origin main
```

Remplacez `VOTRE-IDENTIFIANT` par votre nom d’utilisateur GitHub.

## 3. Déployer gratuitement sur Vercel

1. Rendez-vous sur [vercel.com](https://vercel.com/) et connectez-vous avec GitHub.
2. Cliquez sur **Add New**, puis **Project**.
3. Sélectionnez le dépôt `shopmate-ai`.
4. Vercel détecte automatiquement Next.js. Ne modifiez pas les réglages.
5. Cliquez sur **Deploy**.
6. Après environ une minute, Vercel fournit une adresse publique en `.vercel.app`.

Chaque nouveau `git push` sur la branche `main` déclenchera ensuite automatiquement un nouveau déploiement.

## Pages

- `/` — Landing page
- `/pricing` — Tarifs
- `/dashboard` — Dashboard de démonstration
- `/demo` — Chatbot interactif

## Préparer la V2

Les futurs services sont documentés dans `lib/integrations.ts`.

- Supabase : authentification et base de données
- Stripe : paiements et abonnements
- API IA : réponses générées à partir de la base de connaissances
- Shopify / WooCommerce : commandes, catalogue et suivi

Le MVP actuel ne nécessite aucune variable d’environnement, aucun paiement et aucune base de données.
