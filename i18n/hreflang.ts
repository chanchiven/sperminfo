import {routing} from './routing';

export const baseUrl = 'https://www.sperminfo.com';

/** localePrefix: as-needed — default locale has no prefix */
function buildFullUrl(locale: string, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const finalPath = cleanPath === '/' ? '' : cleanPath.replace(/\/$/, '');
  if (locale === routing.defaultLocale) {
    return `${baseUrl}${finalPath || '/'}`;
  }
  return `${baseUrl}/${locale}${finalPath}`;
}

/** 生成当前页面的 canonical URL，用于防止权重分散 */
export function getCanonicalUrl(locale: string, path: string = '/'): string {
  return buildFullUrl(locale, path);
}

/**
 * Generates alternates.languages for Next.js Metadata (renders as link rel="alternate" hreflang).
 * - Default language: en.
 * - x-default: points to English URL (for Google/Yandex fallback).
 * - Arabic: path stays /ar/... (RTL is handled by dir="rtl" in HtmlLangDir, not URL).
 * - Russian: standard hreflang "ru" (Yandex uses same tags as Google).
 */
export function generateHreflangAlternates(currentPath: string = '/'): {languages: Record<string, string>} {
  const path = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
  const languages: Record<string, string> = {};

  routing.locales.forEach((locale) => {
    languages[locale] = buildFullUrl(locale, path);
  });

  languages['x-default'] = buildFullUrl(routing.defaultLocale, path);
  return {languages};
}

/**
 * Generates alternates.languages when each locale has a different path (e.g. product SEO slugs).
 * pathsByLocale: { en: '/products/sperm-dna-fragmentation-scd-assay', es: '/products/...', ... }
 */
export function generateHreflangAlternatesFromPaths(pathsByLocale: Record<string, string>): {
  languages: Record<string, string>;
} {
  const languages: Record<string, string> = {};
  routing.locales.forEach((locale) => {
    const path = pathsByLocale[locale] ?? '';
    const fullPath = path?.startsWith('/') ? path : path ? `/${path}` : '/';
    languages[locale] = buildFullUrl(locale, fullPath);
  });
  const defaultPath = pathsByLocale[routing.defaultLocale] ?? '/';
  languages['x-default'] = buildFullUrl(routing.defaultLocale, defaultPath);
  return {languages};
}
