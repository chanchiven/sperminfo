'use client';

import {useEffect} from 'react';
import {useLocale} from 'next-intl';

/** 客户端同步更新 html lang 和 dir（静态导出无法在根布局使用 headers，故采用此方式） */
export function HtmlLangDir() {
  const locale = useLocale();

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', locale);
    html.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
  }, [locale]);

  return null;
}
