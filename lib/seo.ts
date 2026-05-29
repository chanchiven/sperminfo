import type {Metadata} from 'next';
import {baseUrl} from '@/i18n/hreflang';

const DEFAULT_OG_IMAGE = '/images/banner.webp';

type PageSocialMeta = {
  title: string;
  description: string;
  locale: string;
  path: string;
  image?: string;
};

/** Append trailing slash to match next.config trailingSlash: true */
export function withTrailingSlash(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export function absoluteUrl(locale: string, path: string = '/'): string {
  if (path === '/') return `${baseUrl}/${locale}/`;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}/${locale}${withTrailingSlash(normalized)}`;
}

export function buildSocialMetadata({
  title,
  description,
  locale,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageSocialMeta): Pick<Metadata, 'openGraph' | 'twitter'> {
  const url = absoluteUrl(locale, path);
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    openGraph: {
      type: 'website',
      locale,
      url,
      title,
      description,
      siteName: 'Sperminfo',
      images: [{url: imageUrl, alt: title}],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
