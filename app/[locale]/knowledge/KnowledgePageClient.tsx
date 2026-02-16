'use client';

import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';
import {Link} from '@/i18n/routing';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';
import {ARTICLE_SLUGS} from '@/lib/knowledge';

export function KnowledgePageClient() {
  const t = useTranslations('knowledge');
  const locale = useLocale();

  return (
    <div>
      <Navigation />
      <main id="main-content" style={{paddingTop: '90px'}}>
        <section className="knowledge-banner" role="banner">
          <Image
            src="/images/hero-bg.webp"
            alt={t('bannerAlt')}
            fill
            className="knowledge-banner-img"
            priority
            sizes="100vw"
          />
          <div className="knowledge-banner-content">
            <h1>{t('title')}</h1>
            <p>{t('subtitle')}</p>
          </div>
        </section>
        <section className="about" style={{padding: '4rem 0'}}>
          <div className="container">
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem', maxWidth: '100%'}}>
              {ARTICLE_SLUGS.map((slug) => {
                const key = slug.replace(/-/g, '_');
                const label = t(`articles.${key}`);
                return (
                  <li key={slug}>
                    <Link
                      href={`/knowledge/${slug}` as any}
                      locale={locale as 'en' | 'ar' | 'fr' | 'es' | 'ru' | 'it' | 'tr' | 'pt'}
                      style={{
                        display: 'block',
                        padding: '1rem 1.25rem',
                        background: 'var(--bg-secondary)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontWeight: 500,
                        border: '1px solid var(--border-color)',
                        transition: 'background 0.2s, border-color 0.2s',
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
