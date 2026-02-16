'use client';

import {useTranslations} from 'next-intl';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';
import {Link} from '@/i18n/routing';
import Image from 'next/image';
import {PRODUCT_SLUGS} from '@/lib/products';
import {SLUG_TO_IMAGE, SLUG_TO_ICON} from '@/lib/product-images';

export function ProductsPageClient() {
  const t = useTranslations('products');

  return (
    <div>
      <Navigation />
      <main id="main-content" style={{paddingTop: '90px'}}>
        <section className="products">
          <div className="container">
            <header className="section-header">
              <h1>{t('title')}</h1>
              <p>{t('subtitle')}</p>
            </header>
            <div className="products-grid">
              {PRODUCT_SLUGS.map((slug) => {
                const key = slug.replace(/-/g, '_');
                const nameKey = `items.${key}.name` as const;
                const shortDescKey = `items.${key}.shortDesc` as const;
                const descKey = `items.${key}.desc` as const;
                const altKey = `items.${key}.alt` as const;
                const img = SLUG_TO_IMAGE[slug];
                const icon = SLUG_TO_ICON[slug];
                const shortDesc = t(shortDescKey);
                const displayDesc = shortDesc || t(descKey);
                return (
                  <Link key={slug} href={`/products/${slug}` as any} className="product-card">
                    {img ? (
                      <div className="product-image">
                        <Image
                          src={img}
                          alt={t(altKey)}
                          width={400}
                          height={300}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      icon && (
                        <div className="product-icon" aria-hidden>
                          <i className={`fas ${icon}`} />
                        </div>
                      )
                    )}
                    <h3>{t(nameKey)}</h3>
                    <p>{displayDesc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
