import createMiddleware from 'next-intl/middleware';
import {routing} from '../i18n/routing';
import {NextRequest, NextResponse} from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  // 根路径交给 next-intl：根据 Accept-Language 匹配支持的语种，否则用 defaultLocale（英语）
  // 不在此处重定向，由 intlMiddleware 做语言检测与重定向

  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length >= 2) {
    const first = pathSegments[0];
    const second = pathSegments[1];
    if (
      routing.locales.includes(first as 'en') &&
      routing.locales.includes(second as 'en') &&
      first === second
    ) {
      const remainingPath = pathSegments.slice(1).join('/');
      const correctPath = remainingPath ? `/${first}/${remainingPath}/` : `/${first}/`;
      const redirectUrl = new URL(correctPath, request.url);
      redirectUrl.search = request.nextUrl.search;
      return NextResponse.redirect(redirectUrl);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/((?!api|_next|.*\\..*).*)'],
};
