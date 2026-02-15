# JSON-LD Product Schema 说明

每个产品详情页（`/products/[slug]`）均输出一套 **Schema.org Product** 结构化数据，便于 Google 等搜索引擎索引产品信息。

---

## 一、输出位置与方式

- **页面**：`app/[locale]/products/[slug]/page.tsx`
- **输出**：在页面顶层插入 `<script type="application/ld+json">`，内容为单条 Product 类型的 JSON-LD
- **组件**：`components/JsonLd.tsx` 负责渲染 `application/ld+json` 脚本

---

## 二、Product Schema 字段

| 字段 | 说明 | 取值来源 |
|------|------|----------|
| **@context** | Schema.org 上下文 | `https://schema.org` |
| **@type** | 类型 | `Product` |
| **name** | 产品名称 | 当前语言的 `products.items.<slug>.name` |
| **description** | 产品描述 | 当前语言的 `products.items.<slug>.desc` |
| **brand** | 品牌 | `{ "@type": "Brand", "name": "Sperminfo" }` |
| **category** | 分类 | `IVF Laboratory Diagnostics` |
| **url** | 产品页 URL | `https://sperminfo.github.io/{locale}/products/{slug}` |
| **image** | 产品图片（可选） | 该产品在 `SLUG_TO_IMAGES` 中的图片列表，转为绝对 URL |

---

## 三、示例（SCD Assay 英文页）

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sperm DNA Fragmentation Test Kit (SCD Assay)",
  "description": "Our SCD Assay utilizes a proprietary slide-based technology...",
  "brand": {
    "@type": "Brand",
    "name": "Sperminfo"
  },
  "category": "IVF Laboratory Diagnostics",
  "url": "https://sperminfo.github.io/en/products/scd-assay",
  "image": [
    "https://sperminfo.github.io/images/products/Sperm DNA Fragmentation Test Kit (SCD Assay).webp",
    "https://sperminfo.github.io/images/products/Sperm DNA Fragmentation Test Kit (SCD Assay) 2.webp"
  ]
}
```

---

## 四、覆盖的产品

所有 `lib/products.ts` 中 `PRODUCT_SLUGS` 下的 12 个产品均会按当前 locale 和 slug 动态生成上述 Product JSON-LD：

- scd-assay, comet-assay, mar-iga, mar-igg, morphology, liquefaction, vitality, leukocyte, nbt-assay, counting-chamber, cp200, if208

---

## 五、站点 URL 与 basePath

- 当前使用 **SITE_BASE_URL = `https://sperminfo.github.io`**（与 `app/layout.tsx` 的 `metadataBase` 一致）。
- 若部署到子路径（如 `https://用户名.github.io/sperminfo/`），需在 `page.tsx` 中把 `SITE_BASE_URL` 改为带 basePath 的完整站点 URL，或从 `next.config.js` 的 `basePath` 读取并拼接，以保证 `url` 与 `image` 为正确的绝对 URL。
