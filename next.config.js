const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 仅生产构建时静态导出（开发模式不启用，避免 500 等异常）
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),

  // GitHub Pages：若站点在 sperminfo.github.io（根路径）则 basePath 留空
  // 若在 username.github.io/sperminfo 则取消注释下一行并重新 build
  // basePath: process.env.NODE_ENV === 'production' ? '/sperminfo' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/sperminfo' : '',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
