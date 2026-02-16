import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';
import {generateHreflangAlternates, getCanonicalUrl} from '@/i18n/hreflang';
import {routing} from '@/i18n/routing';
import {KnowledgePageClient} from './KnowledgePageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  if (!locale || !routing.locales.includes(locale as 'en')) {
    return {};
  }
  const t = await getTranslations({locale, namespace: 'knowledge'});
  const title = t('meta.title');
  const description = t('meta.description');
  const alternates = generateHreflangAlternates('/knowledge');
  return {
    title: title === 'meta.title' ? 'Knowledge Hub - Male Reproductive Health & Andrology | Sperminfo' : title,
    description: description === 'meta.description' ? 'Science-based articles on sperm DNA fragmentation, MAR test, morphology, vitality, leukocyte, and WHO 6th Edition. Learn more about andrology diagnostics.' : description,
    alternates: {
      ...alternates,
      canonical: getCanonicalUrl(locale, '/knowledge'),
    },
  };
}

export default function KnowledgePage() {
  return <KnowledgePageClient />;
}
