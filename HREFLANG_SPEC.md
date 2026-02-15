# link rel="alternate" hreflang 说明

## 一、是否已存在

- **此前**：仅有 `i18n/hreflang.ts` 和 `[locale]/layout.tsx` 使用 `generateHreflangAlternates('/')`，因此**只有首页**有正确的 hreflang；产品、知识库、联系等子路径**没有**按当前路径生成 hreflang。
- **现在**：所有带路径的页面均在各自的 `generateMetadata` 中返回 `alternates: generateHreflangAlternates(当前路径)`，并已补充 **x-default** 指向默认语言（英语）URL。

---

## 二、代码放在哪里、如何自动放置

- **位置**：`<link rel="alternate" hreflang="..." href="...">` 由 **Next.js Metadata API** 自动写入 **HTML 的 `<head>` 内**，无需在 layout 或页面里手写 `<link>`。
- **方式**：在对应页面的 `generateMetadata` 中返回 `alternates: { languages: { en: '...', ar: '...', ..., 'x-default': '...' } }`。Next.js 会为每个 `languages` 键输出一条 `<link rel="alternate" hreflang="{key}" href="{value}">`。
- **已修改文件**：
  - `i18n/hreflang.ts`：为当前路径生成所有 locale 的 URL，并增加 **x-default** 指向 `defaultLocale`（en）的 URL。
  - `app/[locale]/layout.tsx`：首页沿用 `generateHreflangAlternates('/')`（已有）。
  - `app/[locale]/products/page.tsx`：`alternates = generateHreflangAlternates('/products')`。
  - `app/[locale]/products/[slug]/page.tsx`：`alternates = generateHreflangAlternates(\`/products/${slug}\`)`。
  - `app/[locale]/knowledge/page.tsx`：`alternates = generateHreflangAlternates('/knowledge')`。
  - `app/[locale]/knowledge/[slug]/page.tsx`：`alternates = generateHreflangAlternates(\`/knowledge/${slug}\`)`。
  - `app/[locale]/contact/page.tsx`：`alternates = generateHreflangAlternates('/contact')`。

---

## 三、默认语言与 x-default

- **默认语言**：`routing.defaultLocale` = **en**（英语）。
- **x-default**：`languages['x-default']` 指向 **英语版当前页**（`${baseUrl}/en${path}`），用作未匹配语言时的回退，符合 Google / Yandex 建议。

---

## 四、俄语与 Yandex

- 使用标准 **hreflang="ru"**，与 Google 一致；Yandex 采用同一套 hreflang 约定，无需单独处理。
- 每个页面的俄语版 URL 形如：`https://sperminfo.github.io/ru/products/scd-assay`。

---

## 五、阿拉伯语与 RTL

- **路径**：阿拉伯语与其它语言一致，仍为 **/ar/...**（如 `/ar/products/scd-assay`），**不**为 RTL 单独改路径。
- **RTL**：由 **`components/HtmlLangDir.tsx`** 根据 `locale === 'ar'` 设置 `<html dir="rtl">`，内容从右到左排版，与 hreflang 的 URL 无关。

---

## 六、输出示例（产品页 /en/products/scd-assay）

```html
<head>
  ...
  <link rel="alternate" hreflang="en" href="https://sperminfo.github.io/en/products/scd-assay" />
  <link rel="alternate" hreflang="ar" href="https://sperminfo.github.io/ar/products/scd-assay" />
  <link rel="alternate" hreflang="fr" href="https://sperminfo.github.io/fr/products/scd-assay" />
  <link rel="alternate" hreflang="es" href="https://sperminfo.github.io/es/products/scd-assay" />
  <link rel="alternate" hreflang="ru" href="https://sperminfo.github.io/ru/products/scd-assay" />
  <link rel="alternate" hreflang="it" href="https://sperminfo.github.io/it/products/scd-assay" />
  <link rel="alternate" hreflang="tr" href="https://sperminfo.github.io/tr/products/scd-assay" />
  <link rel="alternate" hreflang="x-default" href="https://sperminfo.github.io/en/products/scd-assay" />
  ...
</head>
```

上述标签由 Next.js 根据各页的 `alternates.languages` 自动生成，无需在 HTML 中手写。
