import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Metadata} from 'next';
import {routing} from '@/i18n/routing';
import {generateHreflangAlternates, getCanonicalUrl} from '@/i18n/hreflang';
import {buildSocialMetadata} from '@/lib/seo';
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
    const title = t('meta.title');
    const description = t('meta.description');
    const alternates = generateHreflangAlternates('/');
    return {
      title,
      description,
      alternates: {
        ...alternates,
        canonical: getCanonicalUrl(locale, '/'),
      },
      ...buildSocialMetadata({title, description, locale, path: '/'}),
    };
  } catch {
    const title = 'Sperminfo - Professional Male Reproductive Medicine Reagents';
    const description = 'High-quality male reproductive health testing reagents.';
    return {
      title,
      description,
      ...buildSocialMetadata({title, description, locale, path: '/'}),
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
  setRequestLocale(locale);

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

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1QPRLS7KGW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1QPRLS7KGW');
            `,
          }}
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
