import {getRequestConfig} from 'next-intl/server';
import {AbstractIntlMessages} from 'next-intl';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale: string = routing.defaultLocale;
  try {
    if (requestLocale) {
      const resolvedLocale = await requestLocale;
      if (resolvedLocale) locale = resolvedLocale;
    }
  } catch {
    locale = routing.defaultLocale;
  }

  if (!locale || !routing.locales.includes(locale as 'en' | 'ar' | 'fr' | 'es' | 'ru' | 'it' | 'tr')) {
    locale = routing.defaultLocale;
  }

  const translationFiles = ['index', 'products', 'contact', 'knowledge', 'knowledge-articles'];

  const messages: Record<string, Record<string, unknown>> = {};

  for (const fileName of translationFiles) {
    try {
      const fileMessages = await import(`../messages/${locale}/${fileName}.json`);
      messages[fileName] = (fileMessages.default || fileMessages) as Record<string, unknown>;
    } catch {
      try {
        const fallbackMessages = await import(`../messages/${routing.defaultLocale}/${fileName}.json`);
        messages[fileName] = (fallbackMessages.default || fallbackMessages) as Record<string, unknown>;
      } catch {
        messages[fileName] = {};
      }
    }
  }

  return {locale, messages: messages as AbstractIntlMessages};
});
