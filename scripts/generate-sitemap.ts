/**
 * Generates sitemap.xml for Sperminfo site.
 * Run: npx tsx scripts/generate-sitemap.ts
 * Output: public/sitemap.xml (copied to out/ during next build)
 */

import { writeFileSync } from 'fs';
import { join } from 'path';
import { LOCALES, type Locale } from '../i18n/locales';
import { PRODUCT_SLUGS } from '../lib/products';
import { ARTICLE_SLUGS } from '../lib/knowledge';
import { PRODUCT_URL_SLUGS } from '../lib/product-slugs-i18n';
import { ARTICLE_URL_SLUGS } from '../lib/article-slugs-i18n';

const BASE_URL = 'https://www.sperminfo.com';
const DEFAULT_LOCALE = 'en';
const TODAY = new Date().toISOString().slice(0, 10);

type PageEntry = {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

function buildUrl(locale: string, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const withTrailing = normalized.endsWith('/') ? normalized : `${normalized}/`;
  return `${BASE_URL}/${locale}${withTrailing === '//' ? '' : withTrailing}`;
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildProductUrl(locale: string, productSlug: (typeof PRODUCT_SLUGS)[number]): string {
  const urlSlug = PRODUCT_URL_SLUGS[productSlug][locale as Locale];
  return buildUrl(locale, `/products/${urlSlug}/`);
}

function buildArticleUrl(locale: string, articleSlug: (typeof ARTICLE_SLUGS)[number]): string {
  const urlSlug = ARTICLE_URL_SLUGS[articleSlug][locale as Locale];
  return buildUrl(locale, `/knowledge/${urlSlug}/`);
}

function renderUrlEntryWithAlternates(
  entry: PageEntry,
  urlBuilder?: (locale: string) => string
): string {
  const alternates = LOCALES.map((locale) => {
    const url = urlBuilder ? urlBuilder(locale) : buildUrl(locale, entry.path);
    const hreflang = locale === DEFAULT_LOCALE ? 'x-default' : locale;
    return `        <xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(url)}"/>`;
  }).join('\n');

  const canonicalUrl = urlBuilder
    ? urlBuilder(DEFAULT_LOCALE)
    : buildUrl(DEFAULT_LOCALE, entry.path);

  return `    <url>
        <loc>${escapeXml(canonicalUrl)}</loc>
        <lastmod>${TODAY}</lastmod>
        <changefreq>${entry.changefreq}</changefreq>
        <priority>${entry.priority.toFixed(1)}</priority>
${alternates}
    </url>`;
}

// Build XML output
const urlEntries: string[] = [];

// Static pages (same path for all locales)
const staticPages: PageEntry[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/products/', priority: 0.9, changefreq: 'weekly' },
  { path: '/knowledge/', priority: 0.9, changefreq: 'weekly' },
  { path: '/contact/', priority: 0.8, changefreq: 'monthly' },
];

for (const entry of staticPages) {
  urlEntries.push(renderUrlEntryWithAlternates(entry));
}

// Product detail pages
for (const slug of PRODUCT_SLUGS) {
  const entry: PageEntry = {
    path: `/products/${PRODUCT_URL_SLUGS[slug][DEFAULT_LOCALE]}/`,
    priority: 0.8,
    changefreq: 'monthly',
  };
  urlEntries.push(
    renderUrlEntryWithAlternates(entry, (locale) => buildProductUrl(locale, slug))
  );
}

// Article pages
for (const slug of ARTICLE_SLUGS) {
  const entry: PageEntry = {
    path: `/knowledge/${ARTICLE_URL_SLUGS[slug][DEFAULT_LOCALE]}/`,
    priority: 0.7,
    changefreq: 'monthly',
  };
  urlEntries.push(
    renderUrlEntryWithAlternates(entry, (locale) => buildArticleUrl(locale, slug))
  );
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urlEntries.join('\n\n')}

</urlset>
`;

const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outputPath, xml, 'utf-8');
console.log(`Sitemap written to ${outputPath}`);
console.log(`Total URLs: ${urlEntries.length} (each with ${LOCALES.length} hreflang alternates)`);
