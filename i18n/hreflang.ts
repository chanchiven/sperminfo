import {routing} from './routing';

export const baseUrl = 'https://sperminfo.github.io';

/** 生成当前页面的 canonical URL，用于防止权重分散 */
export function getCanonicalUrl(locale: string, path: string = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const finalPath = cleanPath === '/' ? '' : cleanPath.replace(/\/$/, '');
  return `${baseUrl}/${locale}${finalPath}`;
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
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  const languages: Record<string, string> = {};

  routing.locales.forEach((locale) => {
    languages[locale] = `${baseUrl}/${locale}${cleanPath}`;
  });

  // x-default: fallback for users whose language is not listed (Google/Yandex best practice)
  languages['x-default'] = `${baseUrl}/${routing.defaultLocale}${cleanPath}`;

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
    const path = pathsByLocale[locale];
    const cleanPath = path?.startsWith('/') ? path.replace(/\/$/, '') : path ? `/${path}` : '';
    languages[locale] = `${baseUrl}/${locale}${cleanPath}`;
  });
  const defaultPath = pathsByLocale[routing.defaultLocale] ?? '';
  const cleanDefault = defaultPath.startsWith('/') ? defaultPath.replace(/\/$/, '') : defaultPath ? `/${defaultPath}` : '';
  languages['x-default'] = `${baseUrl}/${routing.defaultLocale}${cleanDefault}`;
  return {languages};
}
