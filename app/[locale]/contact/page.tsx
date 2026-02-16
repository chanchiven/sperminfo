import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';
import {generateHreflangAlternates, getCanonicalUrl} from '@/i18n/hreflang';
import {routing} from '@/i18n/routing';
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
  return {
    title: title === 'meta.title' ? 'Contact Us - Get a Quote | Sperminfo' : title,
    description: description === 'meta.description' ? 'Contact Sperminfo for semen analysis reagents, OEM inquiries, and technical support. Get a quote or learn more about our male reproductive medicine solutions.' : description,
    alternates: {
      ...alternates,
      canonical: getCanonicalUrl(locale, '/contact'),
    },
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
