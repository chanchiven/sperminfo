import createMiddleware from 'next-intl/middleware';
import {routing} from '../i18n/routing';
import {NextRequest, NextResponse} from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  // 根路径 / 显示语言选择页，不根据 Accept-Language 自动跳转
  if (pathname === '/' || pathname === '') {
    return NextResponse.next();
  }

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
