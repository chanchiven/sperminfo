'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export function Footer() {
  const t = useTranslations('index');

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sperminfo</h3>
            <p>{t('footer.description')}</p>
            <p className="company-name">{t('footer.companyLine1')}</p>
            <p className="company-name">{t('footer.companyLine2')}</p>
            <address className="company-info">
              <p>
                <i className="fas fa-map-marker-alt" aria-hidden /> {t('footer.address')}
              </p>
              <p>
                <i className="fas fa-envelope" aria-hidden />{' '}
                <a href="mailto:info@sperminfo.com" className="footer-email">
                  info@sperminfo.com
                </a>
              </p>
            </address>
          </div>
          <div className="footer-section">
            <h4>{t('footer.products')}</h4>
            <ul>
              <li>
                <Link href="/products">DNA Fragmentation</Link>
              </li>
              <li>
                <Link href="/products">Sperm Morphology</Link>
              </li>
              <li>
                <Link href="/products">MAR Test</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t('footer.support')}</h4>
            <ul>
              <li>
                <Link href="/contact">Technical</Link>
              </li>
              <li>
                <Link href="/contact">Product Training</Link>
              </li>
              <li>
                <Link href="/contact">After Sale</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
