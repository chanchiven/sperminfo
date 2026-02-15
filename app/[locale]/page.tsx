'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('index');
  const tProducts = useTranslations('products');

  return (
    <div>
      <Navigation />

      <section id="home" className="hero" role="banner">
        <div className="hero-carousel">
          <div className="carousel-slides">
            <div className="carousel-slide active">
              <div
                className="slide-image"
                style={{backgroundImage: "url('/images/banner.webp')"}}
              />
              <div className="hero-container">
                <div className="hero-content">
                  <h1>{t('hero.title')}</h1>
                  <p>{t('hero.description')}</p>
                  <div className="hero-buttons">
                    <Link href="/products" className="btn btn-primary">
                      {t('hero.products')}
                    </Link>
                    <Link href="/contact" className="btn btn-secondary">
                      {t('hero.contact')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content">
        <section id="about" className="about">
          <div className="container">
            <header className="section-header">
              <h2>{t('about.title')}</h2>
              <p className="about-tagline">{t('about.tagline')}</p>
              <p className="about-subtitle">{t('about.subtitle')}</p>
            </header>
            <div className="about-content">
              <p className="about-description">{t('about.description')}</p>
              <div className="about-points">
                <div className="about-point">
                  <h4>{t('about.points.quality.title')}</h4>
                  <p>{t('about.points.quality.desc')}</p>
                </div>
                <div className="about-point">
                  <h4>{t('about.points.expertise.title')}</h4>
                  <p>{t('about.points.expertise.desc')}</p>
                </div>
                <div className="about-point">
                  <h4>{t('about.points.reliability.title')}</h4>
                  <p>{t('about.points.reliability.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="products" role="region" aria-labelledby="products-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="products-heading">{tProducts('title')}</h2>
              <p>{tProducts('subtitle')}</p>
            </header>
            <div className="products-grid">
              <Link href={"/products/scd-assay" as any} className="product-card">
                <div className="product-image">
                  <Image
                    src="/images/scd-assay.webp"
                    alt={tProducts('items.scd_assay.alt')}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
                <h3>{tProducts('items.scd_assay.name')}</h3>
                <p>{tProducts('items.scd_assay.shortDesc')}</p>
              </Link>
              <Link href={"/products/morphology" as any} className="product-card">
                <div className="product-image">
                  <Image
                    src="/images/morphology.webp"
                    alt={tProducts('items.morphology.alt')}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
                <h3>{tProducts('items.morphology.name')}</h3>
                <p>{tProducts('items.morphology.shortDesc')}</p>
              </Link>
              <Link href={"/products/mar-iga" as any} className="product-card">
                <div className="product-image">
                  <Image
                    src="/images/mar-iga.webp"
                    alt={tProducts('items.mar_iga.alt')}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
                <h3>{tProducts('items.mar_iga.name')}</h3>
                <p>{tProducts('items.mar_iga.shortDesc')}</p>
              </Link>
              <Link href={"/products/vitality" as any} className="product-card">
                <div className="product-image">
                  <Image
                    src="/images/vitality.webp"
                    alt={tProducts('items.vitality.alt')}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
                <h3>{tProducts('items.vitality.name')}</h3>
                <p>{tProducts('items.vitality.shortDesc')}</p>
              </Link>
              <Link href={"/products/leukocyte" as any} className="product-card">
                <div className="product-image">
                  <Image
                    src="/images/leukocyte.webp"
                    alt={tProducts('items.leukocyte.alt')}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
                <h3>{tProducts('items.leukocyte.name')}</h3>
                <p>{tProducts('items.leukocyte.shortDesc')}</p>
              </Link>
              <Link href={"/products/liquefaction" as any} className="product-card">
                <div className="product-image">
                  <Image
                    src="/images/products/Semen Liquefaction Kit (Enzyme Digestion Assay).webp"
                    alt={tProducts('items.liquefaction.alt')}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
                <h3>{tProducts('items.liquefaction.name')}</h3>
                <p>{tProducts('items.liquefaction.shortDesc')}</p>
              </Link>
            </div>
            <p style={{textAlign: 'center', marginTop: '2rem'}}>
              <Link href="/products" className="btn btn-primary">
                {tProducts('viewAll')}
              </Link>
            </p>
          </div>
        </section>

        <section id="technology" className="technology">
          <div className="container">
            <header className="section-header">
              <h2>{t('technology.title')}</h2>
              <p className="tech-tagline">{t('technology.tagline')}</p>
            </header>
            <div className="tech-content">
              <div className="tech-points">
                <div className="tech-point">
                  <h4>{t('technology.points.molecular.title')}</h4>
                  <p>{t('technology.points.molecular.desc')}</p>
                </div>
                <div className="tech-point">
                  <h4>{t('technology.points.who.title')}</h4>
                  <p>{t('technology.points.who.desc')}</p>
                </div>
                <div className="tech-point">
                  <h4>{t('technology.points.rd.title')}</h4>
                  <p>{t('technology.points.rd.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
