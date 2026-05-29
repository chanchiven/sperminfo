import {getTranslations} from 'next-intl/server';
import {JsonLdScript} from '@/components/JsonLd';
import {absoluteUrl} from '@/lib/seo';
import {HomePageClient} from './HomePageClient';

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'index'});

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sperminfo',
    url: 'https://www.sperminfo.com',
    logo: 'https://www.sperminfo.com/logo.svg',
    description: t('meta.description'),
    sameAs: [],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sperminfo',
    url: absoluteUrl(locale, '/'),
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: 'Sperminfo',
    },
  };

  return (
    <>
      <JsonLdScript data={organizationJsonLd} />
      <JsonLdScript data={websiteJsonLd} />
      <HomePageClient />
    </>
  );
}
