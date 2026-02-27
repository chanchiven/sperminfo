import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import {LOCALES} from '@/i18n/locales';
import {PRODUCT_URL_SLUGS} from '@/lib/product-slugs-i18n';
import {ARTICLE_URL_SLUGS} from '@/lib/article-slugs-i18n';
import {PRODUCT_SLUGS} from '@/lib/products';
import {ARTICLE_SLUGS} from '@/lib/knowledge';

const productPathnames: Record<string, Record<string, string>> = {};
for (const canonical of PRODUCT_SLUGS) {
  const base = `/products/${canonical}`;
  productPathnames[base] = {};
  for (const [locale, urlSlug] of Object.entries(PRODUCT_URL_SLUGS[canonical])) {
    productPathnames[base][locale] = `/products/${urlSlug}`;
  }
}

const articlePathnames: Record<string, Record<string, string>> = {};
for (const canonical of ARTICLE_SLUGS) {
  const base = `/knowledge/${canonical}`;
  articlePathnames[base] = {};
  for (const [locale, urlSlug] of Object.entries(ARTICLE_URL_SLUGS[canonical])) {
    articlePathnames[base][locale] = `/knowledge/${urlSlug}`;
  }
}

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true,
  pathnames: {
    '/': '/',
    '/products': '/products',
    ...productPathnames,
    '/knowledge': '/knowledge',
    ...articlePathnames,
    '/contact': '/contact',
  },
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
