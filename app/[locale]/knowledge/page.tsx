'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';
import {ARTICLE_SLUGS} from '@/lib/knowledge';

export default function KnowledgePage() {
  const t = useTranslations('knowledge');

  return (
    <div>
      <Navigation />
      <main id="main-content" style={{paddingTop: '90px'}}>
        <section className="about" style={{padding: '4rem 0'}}>
          <div className="container">
            <header className="section-header">
              <h2>{t('title')}</h2>
              <p>{t('subtitle')}</p>
            </header>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem', maxWidth: '100%'}}>
              {ARTICLE_SLUGS.map((slug) => {
                const key = slug.replace(/-/g, '_');
                const label = t(`articles.${key}`);
                return (
                  <li key={slug}>
                    <Link
                      href={`/knowledge/${slug}`}
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
