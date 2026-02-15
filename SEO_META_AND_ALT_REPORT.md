# SEO：Title / Meta Description / Alt 检查与修改报告

## 一、&lt;head&gt;：Title 与 Meta Description

### 1. 检查结论

- **此前**：仅根 `app/layout.tsx` 与 `[locale]/layout.tsx` 提供 metadata；`[locale]/layout` 对所有子路由（products、knowledge、contact、产品详情、文章详情）共用首页的 `index.meta`，导致**无唯一 Title/Description**，且描述中**无 CTA**。
- **现在**：每个页面均有**唯一 Title** 和 **Meta Description**，且描述中均含**行动号召**（如 “Learn more”、“Get a quote”、“View products and get a quote”）。

### 2. 各页面 Title / Description 来源与 CTA

| 页面 | Title 来源 | Meta Description 来源 | CTA 表述 |
|------|------------|----------------------|----------|
| **首页** | `index.meta.title` | `index.meta.description` | “Learn more and get a quote for your lab.” |
| **产品列表** | `products.meta.title` | `products.meta.description` | “View products and get a quote.” |
| **产品详情** | `{产品名称} \| Sperminfo` | 产品 shortDesc + 一句 | “View product details and get a quote.” |
| **知识库列表** | `knowledge.meta.title` | `knowledge.meta.description` | “Learn more about andrology diagnostics.” |
| **知识库文章** | `{文章标题} \| Sperminfo` | 文章 subtitle 或 title + 一句 | “Learn more and view related products.” |
| **联系** | `contact.meta.title` | `contact.meta.description` | “Get a quote or learn more...” |
| **404** | 固定 | 固定 | “Back to home or contact us...” |
| **根 layout** | template | 根 description | “Learn more and get a quote.” |

### 3. 涉及文件与代码

- **文案**：`messages/en/index.json`（meta.description 加 CTA）、`messages/en/products.json`（新增 `meta.title` / `meta.description`）、`messages/en/knowledge.json`（新增 `meta`）、`messages/en/contact.json`（新增 `meta`）。
- **Metadata 逻辑**：
  - `app/[locale]/products/page.tsx`：改为服务端组件，`generateMetadata()` 使用 `products.meta`，缺翻译时回退英文。
  - `app/[locale]/products/[slug]/page.tsx`：新增 `generateMetadata()`，按产品 name/shortDesc 生成 title/description + CTA。
  - `app/[locale]/knowledge/page.tsx`：改为服务端包装 + 客户端内容，`generateMetadata()` 使用 `knowledge.meta`，缺翻译时回退英文。
  - `app/[locale]/knowledge/[slug]/page.tsx`：新增 `generateMetadata()`，按文章 title/subtitle 生成 + “Learn more”.
  - `app/[locale]/contact/page.tsx`：同上，服务端包装 + `contact.meta`，缺翻译时回退英文。
  - `app/[locale]/not-found.tsx`：改为服务端组件，`export const metadata` 含唯一 title/description 与 CTA。
- **根**：`app/layout.tsx` 的默认 description 已改为含 “Learn more and get a quote.”。

---

## 二、图片 &lt;img&gt; / &lt;Image&gt; 的 Alt 属性

### 1. 检查结论

- **产品列表 / 首页产品卡片**：使用 `products.items.<slug>.alt`，已包含产品名或关键词（如 “Sperm DNA Fragmentation Test Kit SCD Assay”、“Semen Leukocyte Staining Solution”），**无需改**。
- **产品详情页**：原为 `alt={\`${name} ${i + 1}\`}`，已改为 **`${name} - sperminfo andrology product image ${i + 1}`**，明确包含产品名与 “andrology”“product” 等关键词。
- **导航 Logo**：原为 `alt="Sperminfo"`，已改为 **`alt="Sperminfo - Male reproductive medicine and semen analysis reagents"`**，包含品牌与业务关键词。
- **首页 Hero**：使用 `background-image` 的 div，无 `<img>`，故无 alt；若需为 banner 做 SEO/可访问性，可另行增加隐藏或装饰性 `<img>` 并设 alt。

### 2. 涉及文件

- `app/[locale]/products/[slug]/ProductDetailClient.tsx`：产品详情图 alt 改为含 “sperminfo andrology product image”。
- `components/Navigation.tsx`：Logo `<img>` 的 alt 改为含 “Male reproductive medicine and semen analysis reagents”。

---

## 三、多语言说明

- 英文（en）已完整配置 `meta.title` / `meta.description` 及 CTA。
- 其他语言（ar, fr, es, ru, it, tr）若尚未在 `products` / `knowledge` / `contact` 中配置 `meta`，`generateMetadata` 会使用**英文回退**，避免出现 “meta.title” 等 key 作为标题。

如需为其他语言提供专属 Title/Description，在对应 locale 的 `products.json`、`knowledge.json`、`contact.json` 中增加 `meta.title` 与 `meta.description` 即可。
