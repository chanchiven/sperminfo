import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {absolute: '404 - Page Not Found | Sperminfo'},
  description:
    'The page you are looking for does not exist or has been moved. Back to home or contact us for male reproductive medicine reagents.',
  robots: {index: false, follow: true},
};

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <h1 style={{fontSize: '4rem', marginBottom: '1rem'}}>404</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: '#64748b'}}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/en/" style={{color: '#2563eb', textDecoration: 'none', fontWeight: 600}}>
          Back to home
        </Link>
      </body>
    </html>
  );
}
