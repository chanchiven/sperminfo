import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';
import {generateHreflangAlternates, getCanonicalUrl} from '@/i18n/hreflang';
import {routing} from '@/i18n/routing';
import {buildSocialMetadata} from '@/lib/seo';
import {ContactPageClient} from './ContactPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  if (!locale || !routing.locales.includes(locale as 'en')) {
    return {};
  }
  const t = await getTranslations({locale, namespace: 'contact'});
  const title = t('meta.title');
  const description = t('meta.description');
  const alternates = generateHreflangAlternates('/contact');
  const resolvedTitle = title === 'meta.title' ? 'Contact Us - Get a Quote | Sperminfo' : title;
  const resolvedDescription =
    description === 'meta.description'
      ? 'Contact Sperminfo for semen analysis reagents, OEM inquiries, and technical support. Get a quote or learn more about our male reproductive medicine solutions.'
      : description;
  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      ...alternates,
      canonical: getCanonicalUrl(locale, '/contact'),
    },
    ...buildSocialMetadata({
      title: resolvedTitle,
      description: resolvedDescription,
      locale,
      path: '/contact',
    }),
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
