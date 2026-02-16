import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';
import {generateHreflangAlternates, getCanonicalUrl} from '@/i18n/hreflang';
import {routing} from '@/i18n/routing';
import {ProductsPageClient} from './ProductsPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  if (!locale || !routing.locales.includes(locale as 'en')) {
    return {};
  }
  const t = await getTranslations({locale, namespace: 'products'});
  const title = t('meta.title');
  const description = t('meta.description');
  const alternates = generateHreflangAlternates('/products');
  return {
    title: title === 'meta.title' ? 'Products - Semen Analysis & Diagnostic Kits | Sperminfo' : title,
    description: description === 'meta.description' ? 'Browse sperm DNA fragmentation (SCD, Comet), morphology, MAR, vitality, leukocyte, liquefaction, NBT assay, and counting chambers. WHO 6th Edition compliant. View products and get a quote.' : description,
    alternates: {
      ...alternates,
      canonical: getCanonicalUrl(locale, '/products'),
    },
  };
}

export default function ProductsPage() {
  return <ProductsPageClient />;
}
