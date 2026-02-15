import {routing} from '@/i18n/routing';
import {ARTICLE_SLUGS, isValidArticleSlug, ARTICLE_TO_PRODUCT_SLUG} from '@/lib/knowledge';
import {ARTICLES} from '@/lib/articles-content';
import type {ArticleContent} from '@/lib/articles-content';
import {notFound} from 'next/navigation';
import {getTranslations, getMessages} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';

export function generateStaticParams() {
  const params: {locale: string; slug: string}[] = [];
  for (const locale of routing.locales) {
    for (const slug of ARTICLE_SLUGS) {
      params.push({locale, slug});
    }
  }
  return params;
}

export default async function ArticlePage({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;

  if (!slug || !isValidArticleSlug(slug)) {
    notFound();
  }

  const messages = await getMessages();
  const articlesByLocale = messages['knowledge-articles'] as Record<string, ArticleContent> | undefined;
  const key = slug.replace(/-/g, '_');
  const article: ArticleContent | undefined = articlesByLocale?.[key] ?? ARTICLES[slug];
  if (!article) notFound();

  const t = await getTranslations('knowledge');
  const productSlug = ARTICLE_TO_PRODUCT_SLUG[slug];

  return (
    <div>
      <Navigation />
      <main id="main-content" style={{paddingTop: '90px'}}>
        <article style={{padding: '4rem 0'}} className="container">
          <Link href="/knowledge" style={{display: 'inline-block', marginBottom: '2rem', color: 'var(--primary-color)', textDecoration: 'none'}}>
            ← {t('backToList')}
          </Link>

          {article.subtitle && (
            <p style={{fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
              {article.subtitle}
            </p>
          )}
          <h1 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.3, color: 'var(--text-primary)'}}>
            {article.title}
          </h1>

          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            {article.sections.map((section, i) => (
              <section key={i}>
                <h2 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--primary-color)'}}>
                  {section.heading}
                </h2>
                <p style={{lineHeight: 1.8, color: 'var(--text-primary)', margin: 0, whiteSpace: 'pre-line'}}>
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {article.references.length > 0 && (
            <section style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)'}}>
              <h2 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)'}}>
                {t('referencesHeading')}
              </h2>
              <ol style={{margin: 0, paddingLeft: '1.5rem', lineHeight: 1.8, color: 'var(--text-secondary)', fontSize: '0.95rem'}}>
                {article.references.map((ref, i) => (
                  <li key={i} style={{marginBottom: '0.5rem'}}>{ref.text}</li>
                ))}
              </ol>
            </section>
          )}

          <aside style={{marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-color)'}}>
            <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6}}>
              {t('whoNotice')}
            </p>
          </aside>

          <p style={{marginTop: '2rem'}}>
            <Link href={`/products/${productSlug}` as any} className="btn btn-primary">
              {t('relatedProduct')}: {t(`articles.${slug.replace(/-/g, '_')}`)} → {t('viewProduct')}
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
