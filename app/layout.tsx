import type {Metadata, Viewport} from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sperminfo.com'),
  title: {
    default: 'Sperminfo - Professional Male Reproductive Medicine Reagents',
    template: '%s | Sperminfo',
  },
  description:
    'Sperminfo specializes in high-quality male reproductive health testing reagents: sperm DNA fragmentation, morphology, MAR test, vitality and leukocyte kits. Learn more and get a quote.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

/** Passthrough root — html/body live in app/[locale]/layout.tsx for per-locale lang/dir. */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return children;
}
