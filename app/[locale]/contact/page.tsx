import {getTranslations} from 'next-intl/server';
import {Metadata} from 'next';
import {generateHreflangAlternates} from '@/i18n/hreflang';
import {ContactPageClient} from './ContactPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({namespace: 'contact'});
  const title = t('meta.title');
  const description = t('meta.description');
  const alternates = generateHreflangAlternates('/contact');
  return {
    title: title === 'meta.title' ? 'Contact Us - Get a Quote | Sperminfo' : title,
    description: description === 'meta.description' ? 'Contact Sperminfo for semen analysis reagents, OEM inquiries, and technical support. Get a quote or learn more about our male reproductive medicine solutions.' : description,
    alternates,
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
