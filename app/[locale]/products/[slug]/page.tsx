import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {PRODUCT_SLUGS} from '@/lib/products';
import {getCanonicalProductSlug, getProductUrlSlug, PRODUCT_URL_SLUGS} from '@/lib/product-slugs-i18n';
import {SLUG_TO_IMAGES, SLUG_TO_ICON} from '@/lib/product-images';
import {getProductDetailContent} from '@/lib/product-detail-content';
import {notFound} from 'next/navigation';
import {ProductDetailClient} from './ProductDetailClient';
import {JsonLdScript} from '@/components/JsonLd';
import {generateHreflangAlternatesFromPaths} from '@/i18n/hreflang';
import type {Metadata} from 'next';

const SITE_BASE_URL = 'https://sperminfo.github.io';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const canonical = getCanonicalProductSlug(locale, slug ?? '');
  if (!canonical) return {};
  const t = await getTranslations({locale, namespace: 'products'});
  const key = canonical.replace(/-/g, '_');
  const name = t(`items.${key}.name`);
  const description = t(`items.${key}.metaDescription`);
  const title = `${name} | Sperminfo`;
  const pathsByLocale: Record<string, string> = {};
  for (const loc of routing.locales) {
    pathsByLocale[loc] = `/products/${PRODUCT_URL_SLUGS[canonical][loc]}`;
  }
  const alternates = generateHreflangAlternatesFromPaths(pathsByLocale);
  return {title, description, alternates};
}

export function generateStaticParams() {
  const params: {locale: string; slug: string}[] = [];
  for (const locale of routing.locales) {
    for (const canonical of PRODUCT_SLUGS) {
      params.push({locale, slug: getProductUrlSlug(canonical, locale)});
    }
  }
  return params;
}

export default async function ProductDetailPage({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;

  const canonical = getCanonicalProductSlug(locale, slug ?? '');
  if (!canonical) {
    notFound();
  }

  const t = await getTranslations({locale, namespace: 'products'});
  const images = SLUG_TO_IMAGES[canonical] ?? [];
  const icon = SLUG_TO_ICON[canonical];
  const key = canonical.replace(/-/g, '_');
  const detailContent = getProductDetailContent(canonical);
  const name = t(`items.${key}.name`);
  const desc = t(`items.${key}.desc`);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description: desc,
    brand: {
      '@type': 'Brand',
      name: 'Sperminfo',
    },
    category: 'IVF Laboratory Diagnostics',
    url: `${SITE_BASE_URL}/${locale}/products/${getProductUrlSlug(canonical, locale)}`,
    ...(images.length > 0 && {
      image: images.map((src) => (src.startsWith('http') ? src : `${SITE_BASE_URL}${src}`)),
    }),
  };

  return (
    <>
      <JsonLdScript data={productJsonLd} />
      <ProductDetailClient
        slug={canonical}
        images={images}
        icon={icon}
        name={name}
        desc={desc}
        detailContent={detailContent}
        back={t('back')}
        contact={t('contact')}
        ctaPrimary={t('ctaPrimary')}
        relatedProductsHeading={t('relatedProductsHeading')}
        referencesHeading={t('referencesHeading')}
      />
    </>
  );
}
