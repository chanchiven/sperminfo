'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('index');

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center'}}>
      <h1 style={{fontSize: '4rem', marginBottom: '1rem'}}>404</h1>
      <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)'}}>
        {t('notFound.description')}
      </p>
      <Link href="/" className="btn btn-primary">
        {t('notFound.backToHome')}
      </Link>
    </div>
  );
}
