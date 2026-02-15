# Sperminfo - Next.js 框架说明

## 技术栈

- **Next.js 14** - App Router
- **TypeScript**
- **next-intl** - 国际化
- **React 18**

## 支持语言

英语 (en)、阿拉伯语 (ar)、法语 (fr)、西班牙语 (es)、俄语 (ru)、意大利语 (it)、土耳其语 (tr)

## 项目结构

```
sperminfo/
├── app/
│   ├── layout.tsx           # 根布局
│   ├── globals.css
│   ├── middleware.ts        # 语言路由
│   └── [locale]/
│       ├── layout.tsx       # 语言布局
│       ├── page.tsx         # 首页
│       ├── about/page.tsx
│       ├── products/page.tsx
│       ├── products/[slug]/page.tsx   # 产品详情
│       ├── contact/page.tsx
│       └── not-found.tsx
├── components/
│   ├── Navigation.tsx
│   ├── LanguageSwitcher.tsx
│   ├── HtmlLangDir.tsx
│   └── AnimatedSection.tsx
├── i18n/
│   ├── routing.ts
│   ├── request.ts
│   └── hreflang.ts
├── lib/
│   └── products.ts          # 产品 slug 配置
├── messages/
│   ├── en/
│   ├── ar/
│   ├── fr/
│   ├── es/
│   ├── ru/
│   ├── it/
│   └── tr/
└── public/
    ├── index.html           # 根路径重定向
    └── images/
```

## 产品详情 URL

- `/products/scd-assay`
- `/products/morphology`
- `/products/mar-test`
- `/products/vitality`
- `/products/leukocyte`
- `/products/liquefaction`

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000 会重定向到 http://localhost:3000/en/

## 构建与部署

```bash
npm run build
```

构建产物在 `out/` 目录，适合 GitHub Pages 静态部署。

## GitHub Pages 部署

项目已配置 `.github/workflows/deploy.yml`：

1. 推送到 main 或 master 分支时自动构建
2. 使用 Next.js 静态导出 (`output: 'export'`)
3. 部署 `out` 目录到 GitHub Pages

### basePath 配置

- 若站点在根路径（如 sperminfo.github.io 或自定义域名），`basePath` 保持注释
- 若在 username.github.io/sperminfo，在 `next.config.js` 中取消注释：

```js
basePath: process.env.NODE_ENV === 'production' ? '/sperminfo' : '',
```

## 翻译

翻译文件位于 `messages/[locale]/` 下：
- `index.json` - 首页、导航、页脚
- `about.json` - 关于页
- `products.json` - 产品列表与详情
- `contact.json` - 联系页

当前 ar、fr、es、ru、it、tr 使用英文占位，可后续替换为正式翻译。
