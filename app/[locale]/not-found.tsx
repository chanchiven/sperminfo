import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/routing';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Sperminfo',
  description: 'The page you are looking for does not exist or has been moved. Back to home or contact us for male reproductive medicine reagents.',
};

export default async function NotFound() {
  const t = await getTranslations('index');

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
