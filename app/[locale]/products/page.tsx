import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';
import {generateHreflangAlternates} from '@/i18n/hreflang';
import {ProductsPageClient} from './ProductsPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({namespace: 'products'});
  const title = t('meta.title');
  const description = t('meta.description');
  const alternates = generateHreflangAlternates('/products');
  return {
    title: title === 'meta.title' ? 'Products - Semen Analysis & Diagnostic Kits | Sperminfo' : title,
    description: description === 'meta.description' ? 'Browse sperm DNA fragmentation (SCD, Comet), morphology, MAR, vitality, leukocyte, liquefaction, NBT assay, and counting chambers. WHO 6th Edition compliant. View products and get a quote.' : description,
    alternates,
  };
}

export default function ProductsPage() {
  return <ProductsPageClient />;
}
