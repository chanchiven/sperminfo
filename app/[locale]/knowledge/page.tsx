import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';
import {generateHreflangAlternates} from '@/i18n/hreflang';
import {KnowledgePageClient} from './KnowledgePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({namespace: 'knowledge'});
  const title = t('meta.title');
  const description = t('meta.description');
  const alternates = generateHreflangAlternates('/knowledge');
  return {
    title: title === 'meta.title' ? 'Knowledge Hub - Male Reproductive Health & Andrology | Sperminfo' : title,
    description: description === 'meta.description' ? 'Science-based articles on sperm DNA fragmentation, MAR test, morphology, vitality, leukocyte, and WHO 6th Edition. Learn more about andrology diagnostics.' : description,
    alternates,
  };
}

export default function KnowledgePage() {
  return <KnowledgePageClient />;
}
