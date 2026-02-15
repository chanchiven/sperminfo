'use client';

import Image from 'next/image';
import {Link} from '@/i18n/routing';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';
import type {ProductDetailContent} from '@/lib/product-detail-content';
import {ContentWithLinks} from '@/components/ContentWithLinks';
import {getRelatedProductSlugs} from '@/lib/related-products';
import {isValidProductSlug} from '@/lib/products';
import {useTranslations} from 'next-intl';

interface ProductDetailClientProps {
  slug: string;
  images: string[];
  icon?: string;
  name: string;
  desc: string;
  detailContent: ProductDetailContent | null;
  back: string;
  contact: string;
  /** Primary CTA label (e.g. "Get a Quote") */
  ctaPrimary?: string;
  relatedProductsHeading?: string;
  referencesHeading?: string;
}

export function ProductDetailClient({
  slug,
  images,
  icon,
  name,
  desc,
  detailContent,
  back,
  contact,
  ctaPrimary,
  relatedProductsHeading,
  referencesHeading = 'References',
}: ProductDetailClientProps) {
  const t = useTranslations('products');
  const hasImages = images.length > 0;
  const hasDetailContent = detailContent && (detailContent.sections?.length ?? 0) > 0;
  const relatedSlugs = isValidProductSlug(slug) ? getRelatedProductSlugs(slug) : [];
  const ctaLabel = (ctaPrimary && ctaPrimary !== 'ctaPrimary') ? ctaPrimary : contact;
  const relatedHeading = (relatedProductsHeading && relatedProductsHeading !== 'relatedProductsHeading') ? relatedProductsHeading : 'Related Products';

  return (
    <div>
      <Navigation />
      <main id="main-content" style={{paddingTop: '90px'}}>
        <section className="products product-detail" style={{padding: '4rem 0'}}>
          <div className="container">
            <Link href="/products" style={{display: 'inline-block', marginBottom: '2rem', color: 'var(--primary-color)'}}>
              ← {back}
            </Link>
            <div className="product-detail-layout">
              <div className="product-detail-gallery">
                {hasImages ? (
                  <div className="product-detail-images">
                    {images.map((src, i) => (
                      <div key={i} className="product-detail-image-wrap">
                        <Image
                          src={src}
                          alt={`${name} - sperminfo andrology product image ${i + 1}`}
                          width={600}
                          height={450}
                          className="product-detail-image"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={i === 0}
                          style={{objectFit: 'contain'}}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  icon && (
                    <div className="product-detail-icon">
                      <i className={`fas ${icon}`} />
                    </div>
                  )
                )}
              </div>
              <div className="product-detail-info">
                <h1>{name}</h1>
                {detailContent?.subtitle && (
                  <p className="product-detail-subtitle">{detailContent.subtitle}</p>
                )}
                {hasDetailContent ? (
                  <div className="product-detail-body">
                    {detailContent!.sections.map((sec, i) => (
                      <div key={i} className="product-detail-section">
                        {sec.heading && (
                          <h3 className="product-detail-section-heading">{sec.heading}</h3>
                        )}
                        <div className="product-detail-section-content">
                          {sec.paragraphs.map((para, j) => (
                            <p key={j} className="product-detail-para">
                              <ContentWithLinks text={para} />
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="product-detail-desc">{desc}</p>
                )}
                {detailContent?.references && detailContent.references.length > 0 && (
                  <section className="product-detail-references" style={{marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)'}}>
                    <h3 className="product-detail-section-heading" style={{marginBottom: '0.75rem'}}>{referencesHeading}</h3>
                    <ol style={{margin: 0, paddingLeft: '1.25rem', lineHeight: 1.7, fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                      {detailContent.references.map((ref, i) => (
                        <li key={i} style={{marginBottom: '0.5rem'}}>
                          {ref.url ? (
                            <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary-color)', textDecoration: 'none'}}>{ref.text}</a>
                          ) : (
                            ref.text
                          )}
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
                {relatedSlugs.length > 0 && (
                  <section className="product-detail-related" style={{marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)'}}>
                    <h3 className="product-detail-section-heading" style={{marginBottom: '0.75rem'}}>{relatedHeading}</h3>
                    <ul style={{margin: 0, paddingLeft: '1.25rem', listStyle: 'disc', lineHeight: 1.8, fontSize: '0.95rem'}}>
                      {relatedSlugs.map((relatedSlug) => {
                        const key = relatedSlug.replace(/-/g, '_');
                        return (
                          <li key={relatedSlug}>
                            <Link href={`/products/${relatedSlug}` as any} style={{color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 500}}>
                              {t(`items.${key}.name`)}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                )}
                <Link href="/contact" className="btn btn-primary" style={{marginTop: '1.5rem'}}>
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
