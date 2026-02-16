'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';

export function ContactPageClient() {
  const t = useTranslations('contact');

  return (
    <div>
      <Navigation />
      <main id="main-content" style={{paddingTop: '90px'}}>
        <section className="contact">
          <div className="container">
            <div className="section-header">
              <h2>{t('title')}</h2>
              {t('subtitle') && <p>{t('subtitle')}</p>}
            </div>
            <div className="contact-image-wrap">
              <Image
                src="/images/Contact%20us.webp"
                alt="Contact Sperminfo"
                width={1200}
                height={400}
                className="contact-image"
              />
            </div>
            <div className="contact-content">
              <div className="contact-card">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt" aria-hidden />
                  <div>
                    <h4>{t('address')}</h4>
                    <p>{t('addressText')}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope" aria-hidden />
                  <div>
                    <h4>{t('email')}</h4>
                    <p>
                      <a href="mailto:info@sperminfo.com" className="contact-email">
                        {t('emailText')}
                      </a>
                    </p>
                  </div>
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
