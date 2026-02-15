import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Metadata} from 'next';
import {routing} from '@/i18n/routing';
import {HtmlLangDir} from '@/components/HtmlLangDir';
import {generateHreflangAlternates} from '@/i18n/hreflang';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  if (!resolvedParams?.locale || !routing.locales.includes(resolvedParams.locale as 'en')) {
    notFound();
  }
  const {locale} = resolvedParams;
  try {
    const t = await getTranslations({locale, namespace: 'index'});
    const alternates = generateHreflangAlternates('/');
    return {
      title: t('meta.title'),
      description: t('meta.description'),
      alternates,
    };
  } catch {
    return {
      title: 'Sperminfo - Professional Male Reproductive Medicine Reagents',
      description: 'High-quality male reproductive health testing reagents.',
    };
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams?.locale || !routing.locales.includes(resolvedParams.locale as 'en')) {
    notFound();
  }
  const {locale} = resolvedParams;
  let messages = {};
  try {
    messages = await getMessages({locale});
  } catch {
    try {
      messages = await getMessages({locale: routing.defaultLocale});
    } catch {
      messages = {};
    }
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <HtmlLangDir />
      {children}
    </NextIntlClientProvider>
  );
}
