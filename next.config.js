const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 避免 dev 时 "Cannot find module './vendor-chunks/@formatjs.js'"：将 @formatjs 从服务端打包中外部化
    serverComponentsExternalPackages: ['@formatjs/intl'],
  },

  // 仅生产构建时静态导出（开发模式不启用，避免 500 等异常）
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),

  // GitHub Pages：若站点在 sperminfo.github.io（根路径）则 basePath 留空
  // 若在 username.github.io/sperminfo 子路径部署，取消下面两行注释并重新 build，否则会 404 layout.css / webpack.js 等
  // basePath: process.env.NODE_ENV === 'production' ? '/sperminfo' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/sperminfo' : '',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
