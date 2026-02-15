import {routing} from './routing';

const baseUrl = 'https://sperminfo.github.io';

export function generateHreflangAlternates(currentPath: string = '/') {
  const alternates: {languages: Record<string, string>} = {
    languages: {},
  };

  routing.locales.forEach((locale) => {
    const path = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
    const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
    alternates.languages[locale] = `${baseUrl}/${locale}${cleanPath}`;
  });

  return alternates;
}
