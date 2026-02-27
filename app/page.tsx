import {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {LOCALES} from '@/i18n/locales';

const LOCALE_NAMES: Record<string, string> = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
  es: 'Español',
  ru: 'Русский',
  it: 'Italiano',
  tr: 'Türkçe',
  pt: 'Português',
};

export const metadata: Metadata = {
  title: 'Choose Your Language | Sperminfo',
  description: 'Sperminfo - High-quality male reproductive health testing reagents. Select your language to continue.',
};

export default function LanguageSelectorPage() {
  return (
    <main
      role="main"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f7f9fc 0%, #eef2f7 100%)',
        padding: '1.5rem',
      }}
    >
      <div style={{textAlign: 'center', maxWidth: 480, width: '100%'}}>
        <div style={{marginBottom: '1.5rem'}}>
          <Link href="/en/" aria-label="Sperminfo Home">
            <Image
              src="/logo.svg"
              alt="Sperminfo - Male reproductive medicine and semen analysis reagents"
              width={220}
              height={52}
              style={{height: 52, width: 'auto', maxWidth: 220, objectFit: 'contain'}}
            />
          </Link>
        </div>
        <p
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#5a5a5a',
            marginBottom: '1.75rem',
            lineHeight: 1.4,
          }}
        >
          Choose your language / 选择语言
        </p>
        <nav
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
          aria-label="Language selection"
        >
          {LOCALES.map((locale) => (
            <Link key={locale} href={`/${locale}/`} className="lang-selector-btn">
              {LOCALE_NAMES[locale] ?? locale}
            </Link>
          ))}
        </nav>
        <p style={{fontSize: '0.875rem', color: '#8a8a8a', marginTop: '1.25rem'}}>
          Professional sperm analysis kits and fertility testing reagents
        </p>
      </div>
    </main>
  );
}
