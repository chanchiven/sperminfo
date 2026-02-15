import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ar', 'fr', 'es', 'ru', 'it', 'tr'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true,
  pathnames: {
    '/': '/',
    '/products': '/products',
    '/products/scd-assay': '/products/scd-assay',
    '/products/comet-assay': '/products/comet-assay',
    '/products/mar-iga': '/products/mar-iga',
    '/products/mar-igg': '/products/mar-igg',
    '/products/morphology': '/products/morphology',
    '/products/liquefaction': '/products/liquefaction',
    '/products/vitality': '/products/vitality',
    '/products/leukocyte': '/products/leukocyte',
    '/products/nbt-assay': '/products/nbt-assay',
    '/products/counting-chamber': '/products/counting-chamber',
    '/products/cp200': '/products/cp200',
    '/products/if208': '/products/if208',
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
    '/knowledge/comet-assay': '/knowledge/comet-assay',
    '/knowledge/nbt-assay': '/knowledge/nbt-assay',
    '/contact': '/contact',
  },
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
