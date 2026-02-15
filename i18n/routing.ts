import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import {LOCALES} from '@/i18n/locales';
import {PRODUCT_URL_SLUGS} from '@/lib/product-slugs-i18n';
import {PRODUCT_SLUGS} from '@/lib/products';

const productPathnames: Record<string, Record<string, string>> = {};
for (const canonical of PRODUCT_SLUGS) {
  const base = `/products/${canonical}`;
  productPathnames[base] = {};
  for (const [locale, urlSlug] of Object.entries(PRODUCT_URL_SLUGS[canonical])) {
    productPathnames[base][locale] = `/products/${urlSlug}`;
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
    '/knowledge/scd-assay': '/knowledge/scd-assay',
    '/knowledge/mar-iga': '/knowledge/mar-iga',
    '/knowledge/mar-igg': '/knowledge/mar-igg',
    '/knowledge/morphology': '/knowledge/morphology',
    '/knowledge/liquefaction': '/knowledge/liquefaction',
    '/knowledge/vitality': '/knowledge/vitality',
    '/knowledge/leukocyte': '/knowledge/leukocyte',
    '/knowledge/counting-chamber': '/knowledge/counting-chamber',
    '/knowledge/cp200': '/knowledge/cp200',
    '/knowledge/if208': '/knowledge/if208',
    '/knowledge/comet-assay': '/knowledge/comet-assay',
    '/knowledge/nbt-assay': '/knowledge/nbt-assay',
    '/contact': '/contact',
  },
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
