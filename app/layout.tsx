import {Metadata, Viewport} from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://sperminfo.github.io'),
  title: {
    default: 'Sperminfo - Professional Male Reproductive Medicine Reagents',
    template: '%s | Sperminfo',
  },
  description:
    'Sperminfo specializes in high-quality male reproductive health testing reagents. Professional sperm DNA fragmentation, morphology staining, MAR test, and vitality analysis kits.',
  alternates: {
    canonical: 'https://sperminfo.github.io',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Google tag (gtag.js) - 紧跟在 <head> 之后 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1QPRLS7KGW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1QPRLS7KGW');
            `,
          }}
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
