/** Single source of truth for supported locales. Used by routing and product slugs to avoid circular imports. */
export const LOCALES = ['en', 'ar', 'fr', 'es', 'ru', 'it', 'tr', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];
