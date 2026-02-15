'use client';

import {useLocale} from 'next-intl';
import {useState, useEffect, useRef} from 'react';
import {routing} from '@/i18n/routing';
import {useRouter, usePathname} from '@/i18n/routing';

const ALL_LANGUAGES = [
  {code: 'en', name: 'English'},
  {code: 'ar', name: 'العربية'},
  {code: 'fr', name: 'Français'},
  {code: 'es', name: 'Español'},
  {code: 'ru', name: 'Русский'},
  {code: 'it', name: 'Italiano'},
  {code: 'tr', name: 'Türkçe'},
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLangName, setCurrentLangName] = useState('English');
  const [clientLocale, setClientLocale] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    let detectedLocale = locale;
    if (typeof window !== 'undefined') {
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      if (pathSegments.length > 0 && routing.locales.includes(pathSegments[0] as 'en')) {
        detectedLocale = pathSegments[0];
      }
    }
    setClientLocale(detectedLocale);
    const langName = ALL_LANGUAGES.find((lang) => lang.code === detectedLocale)?.name ?? 'English';
    setCurrentLangName(langName);
  }, [locale]);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }
    // 使用 next-intl 的 router 做客户端导航，在 localhost 与生产环境都可靠
    router.replace(pathname, {locale: newLocale as 'en' | 'ar' | 'fr' | 'es' | 'ru' | 'it' | 'tr'});
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  if (!mounted) {
    return (
      <div className="language-selector" ref={menuRef}>
        <button
          className="lang-toggle"
          aria-label="Select language"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>English</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={`lang-menu ${isOpen ? 'active' : ''}`}>
          {ALL_LANGUAGES.map((lang) => (
            <a
              key={lang.code}
              href="#"
              className="lang-option"
              onClick={(e) => {
                e.preventDefault();
                switchLanguage(lang.code);
              }}
            >
              <span style={{whiteSpace: 'nowrap'}}>{lang.name}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="language-selector" ref={menuRef}>
      <button
        className="lang-toggle"
        aria-label="Select language"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLangName}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={`lang-menu ${isOpen ? 'active' : ''}`}>
        {ALL_LANGUAGES.map((lang) => (
          <a
            key={lang.code}
            href="#"
            className={`lang-option ${clientLocale === lang.code ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              switchLanguage(lang.code);
            }}
          >
            <span style={{whiteSpace: 'nowrap'}}>{lang.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
