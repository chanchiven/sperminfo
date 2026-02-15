'use client';

import {useState, useEffect, useRef} from 'react';
import {Link} from '@/i18n/routing';
import {useTranslations, useLocale} from 'next-intl';
import {LanguageSwitcher} from '@/components/LanguageSwitcher';

export function Navigation() {
  const t = useTranslations('index');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <nav className="navbar" ref={navRef} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" locale={locale as 'en'} onClick={closeMenu} className="logo-link" aria-label="Sperminfo Home">
            <img src="/logo.svg" alt="Sperminfo" className="logo-image" width={240} height={60} />
          </Link>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link href="/" locale={locale as 'en'} onClick={closeMenu} className="nav-link">
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link href="/products" locale={locale as 'en'} onClick={closeMenu} className="nav-link">
              {t('nav.products')}
            </Link>
          </li>
          <li>
            <Link href="/knowledge" locale={locale as 'en'} onClick={closeMenu} className="nav-link">
              {t('nav.knowledge')}
            </Link>
          </li>
          <li>
            <Link href="/contact" locale={locale as 'en'} onClick={closeMenu} className="nav-link">
              {t('nav.contact')}
            </Link>
          </li>
        </ul>

        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem'}}>
          <LanguageSwitcher />
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
