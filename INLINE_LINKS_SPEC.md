# 内链系统规范（Inline Links Spec）

项目**没有**独立 HTML/Markdown 文件，正文来自 **`lib/product-detail-content.ts`**（产品详情）和 **`lib/articles-content.ts`**（知识库文章）。内链通过正文中的标记 `[[/path|锚文本]]` 实现，由组件 `ContentWithLinks` 解析并渲染为站内链接。

---

## 一、内链标记格式

- **格式**: `[[/path|锚文本]]`
- **产品页**: `/products/<slug>`，例如 `/products/nbt-assay`
- **知识库**: `/knowledge/<slug>`，例如 `/knowledge/leukocyte`
- **解析**: `components/ContentWithLinks.tsx` 用正则解析并渲染为 `<Link href={path}>{锚文本}</Link>`

---

## 二、已添加内链的位置（需在哪些文件的哪个段落增加链接）

### 1. 产品详情 · `lib/product-detail-content.ts`

| 产品 (slug) | 段落所在 section | 段落内容摘要 | 已添加的链接标记 |
|-------------|------------------|--------------|------------------|
| **scd-assay** | The Science of Genetic Health | 讲 DFI、氧化应激、男性不育 | `[[/products/nbt-assay\|NBT Assay]]`（在 “quantify it with the” 后） |
| **comet-assay** | The Ultimate Sensitivity | 与 SCD 等筛查方法对比 | `[[/products/scd-assay\|SCD Assay]]`（在 “Unlike the” 后） |
| **nbt-assay** | Clinical Application · Diagnostic Mapping | 氧化应激来自白细胞或精子线粒体 | `[[/products/leukocyte\|leukocyte]]`（在 “from” 后） |
| **liquefaction** | The Sperminfo® Advantage · Improved Accuracy | 浓度、活力、DFI 检测所需样本 | `[[/products/counting-chamber\|Sperm Counting Chamber]]`、`[[/products/scd-assay\|DFI testing]]` |
| **leukocyte** | Clinical Significance · ROS Prevention | 白细胞产生 ROS，早期发现可治疗 | `[[/products/nbt-assay\|NBT Assay]]`、`[[/products/scd-assay\|SCD Assay]]` |
| **counting-chamber** | The Modern Standard for Safety and Precision | 符合 WHO 6th、高通量精液分析 | `[[/products/liquefaction\|Liquefaction Kit]]`（在 “For viscous samples” 后） |
| **cp200** | Key Semen Biochemical Parameters · Elastase | 炎症与白细胞/感染 | `[[/products/leukocyte\|Leukocyte Staining]]`（在 “see also” 后） |

### 2. 知识库文章 · `lib/articles-content.ts`

| 文章 (slug) | Section heading | 段落内容摘要 | 已添加的链接标记 |
|-------------|-----------------|--------------|------------------|
| **scd-assay** | Why it is Essential (Clinical Impact) | Identifying Oxidative Stress、DFI 与毒素 | `[[/products/nbt-assay\|NBT Assay]]`（句末） |
| **comet-assay** | What it is (Single-Cell Electrophoresis) | 与 SCD 对比 | `[[/products/scd-assay\|SCD assay]]`（在 “Unlike the” 后） |
| **liquefaction** | Why it is Essential | 高黏度妨碍吸样与活力测定 | `[[/products/counting-chamber\|sperm concentration and motility]]`（括号内说明液化是计数的前置步骤） |
| **leukocyte** | Why it is Essential | ROS、膜脂过氧化、DNA 损伤 | `[[/products/nbt-assay\|NBT Assay]]`、`[[/products/scd-assay\|SCD Assay]]`（句末） |
| **counting-chamber** | Why it is Essential | 计数是男科基础、消除重叠、活力准确性 | `[[/products/liquefaction\|Liquefaction Kit]]`（在 “For viscous samples” 后） |
| **cp200** | Why it is Essential (The Diagnostic Map) | Elastase 与炎症 | `[[/products/leukocyte\|leukocyte counting]]`（在 “simple” 后） |
| **nbt-assay** | Why it is Essential (The "Silent" Infertility Cause) | ROS 来自白细胞或精子、DNA 损伤 | `[[/products/leukocyte\|Leukocyte Staining]]`（在 “identify them with” 后） |

---

## 三、内链关系图（语义）

- **Leukocyte Staining** → **NBT Assay**（白细胞产生氧化应激，NBT 定量）
- **Leukocyte Staining** → **SCD Assay**（ROS 导致 DNA 损伤，SCD 检测）
- **Liquefaction Kit** → **Sperm Counting Chamber**（液化是浓度/活力计数的前置步骤）
- **Liquefaction Kit** → **SCD Assay / DFI testing**（液化后取样本做 DFI）
- **NBT Assay** → **Leukocyte Staining**（NBT 区分白细胞 vs 精子来源的 ROS）
- **Counting Chamber** → **Liquefaction Kit**（黏稠样本先液化再计数）
- **SCD Assay** → **NBT Assay**（DFI 与氧化应激，NBT 量化）
- **Comet Assay** → **SCD Assay**（同为 DNA 碎裂检测，互补）
- **CP200** → **Leukocyte Staining**（Elastase 与白细胞/过氧化物酶检测）

---

## 四、渲染与路由

- **产品详情**: `app/[locale]/products/[slug]/ProductDetailClient.tsx` 中每段 `para` 用 `<ContentWithLinks text={para} />` 渲染。
- **知识库**: `app/[locale]/knowledge/[slug]/page.tsx` 中每段 `section.body` 用 `<ContentWithLinks text={section.body} />` 渲染。
- **Link**: 使用 `@/i18n/routing` 的 `Link`，路径为 `/products/xxx` 或 `/knowledge/xxx`，locale 由路由自动处理。

---

## 五、可选扩展（未实现）

- **Morphology** 段落中可加向 **SCD Assay** 或 **Comet Assay** 的链接（形态异常与 DNA 碎裂相关）。
- **Vitality** 段落中可加向 **Morphology** 或 **Counting Chamber** 的链接（活力与形态、计数同为常规参数）。
- **MAR (IgA/IgG)** 与其它产品无强流程先后关系，可按需在文案中加“精液分析流程”指向 **Liquefaction** 或 **Counting Chamber**。

如需在其它段落增加内链，只需在对应字符串中插入 `[[/products/slug|锚文本]]` 或 `[[/knowledge/slug|锚文本]]`，无需改组件逻辑。
