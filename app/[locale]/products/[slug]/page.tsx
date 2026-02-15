import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {PRODUCT_SLUGS, isValidProductSlug} from '@/lib/products';
import {SLUG_TO_IMAGES, SLUG_TO_ICON} from '@/lib/product-images';
import {getProductDetailContent} from '@/lib/product-detail-content';
import {notFound} from 'next/navigation';
import {ProductDetailClient} from './ProductDetailClient';

export function generateStaticParams() {
  const params: {locale: string; slug: string}[] = [];
  for (const locale of routing.locales) {
    for (const slug of PRODUCT_SLUGS) {
      params.push({locale, slug});
    }
  }
  return params;
}

export default async function ProductDetailPage({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {slug} = await params;

  if (!slug || !isValidProductSlug(slug)) {
    notFound();
  }

  const t = await getTranslations('products');
  const images = SLUG_TO_IMAGES[slug] ?? [];
  const icon = SLUG_TO_ICON[slug];
  const key = slug.replace(/-/g, '_');
  const detailContent = getProductDetailContent(slug);

  return (
    <ProductDetailClient
      slug={slug}
      images={images}
      icon={icon}
      name={t(`items.${key}.name`)}
      desc={t(`items.${key}.desc`)}
      detailContent={detailContent}
      back={t('back')}
      contact={t('contact')}
    />
  );
}
