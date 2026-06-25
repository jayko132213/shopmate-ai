/**
 * Points d'entrée préparés pour la V2.
 *
 * - Supabase : authentification, boutiques et base de connaissances.
 * - Stripe : abonnements et portail client.
 * - API IA : génération de réponses enrichies par les données boutique.
 * - Shopify / WooCommerce : commandes, catalogue et suivi.
 *
 * Les fonctions restent volontairement non implémentées dans ce MVP sans backend.
 */
export const futureIntegrations = {
  database: "supabase",
  billing: "stripe",
  ai: "openai-compatible-api",
  commerce: ["shopify", "woocommerce"],
} as const;
