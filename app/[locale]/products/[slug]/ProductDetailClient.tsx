'use client';

import Image from 'next/image';
import {Link} from '@/i18n/routing';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';
import type {ProductDetailContent} from '@/lib/product-detail-content';

interface ProductDetailClientProps {
  slug: string;
  images: string[];
  icon?: string;
  name: string;
  desc: string;
  detailContent: ProductDetailContent | null;
  back: string;
  contact: string;
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
}: ProductDetailClientProps) {
  const hasImages = images.length > 0;
  const hasDetailContent = detailContent && (detailContent.sections?.length ?? 0) > 0;

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
                          alt={`${name} ${i + 1}`}
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
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="product-detail-desc">{desc}</p>
                )}
                <Link href="/contact" className="btn btn-primary" style={{marginTop: '1.5rem'}}>
                  {contact}
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
