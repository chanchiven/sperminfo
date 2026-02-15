# 学术引用与 WHO 第六版 审计报告

**审计日期**: 2025  
**范围**: 产品详情页（`/products/[slug]`）、知识库文章（`/knowledge/[slug]`）  
**视角**: 男科/生殖医学专家  

---

## 一、审计结论概览

| 检查项 | 审计前 | 审计后 |
|--------|--------|--------|
| 产品页是否包含学术引用（References） | ❌ 无 | ✅ 12 个产品均增加 References 区块 |
| 是否明确标注符合 WHO 第六版 | ⚠️ 部分产品有、部分无或仅写「WHO guidelines」 | ✅ 全部产品正文或引用中明确 WHO Laboratory Manual (6th Edition) |
| 引用是否包含 DOI/PubMed 链接 | ❌ 知识库仅有纯文本 | ✅ 产品页与知识库引用均支持可选 url，已补齐权威链接 |

---

## 二、产品详情页（此前无引用）

**内容来源**: `lib/product-detail-content.ts`

- **此前**: `ProductDetailContent` 仅有 `subtitle` 与 `sections`，无 `references`，产品页不展示任何文献。
- **本次**:
  1. 新增 `ProductDetailRef { text: string; url?: string }` 与 `ProductDetailContent.references?: ProductDetailRef[]`。
  2. 为全部 12 个产品配置了参考文献，每条均包含：
     - **WHO (2021) 6th Edition**：统一使用官方链接  
       `https://www.who.int/publications/i/item/9789240030787`
     - 1–2 篇与产品直接相关的权威论文，并尽量配上 **PubMed** 或 **DOI** 链接。
  3. 在正文中为原先未明确 WHO 第六版的产品补充了「WHO Laboratory Manual (6th Edition)」或「WHO 6th Edition」的表述（如 MAR、形态学、液化、活力、白细胞、NBT、CP200、IF208）。
  4. 产品页模板中新增「References」区块，当 `detailContent.references` 存在时展示有序列表；若某条 `ref.url` 存在则渲染为可点击链接。

**各产品参考文献示例**（详见 `lib/product-detail-content.ts`）:

- **scd-assay**: WHO 6th, Fernández 2003 (SCD), Evenson 2002 (chromatin)
- **comet-assay**: WHO 6th, Simon 2011 (Comet/IVF), Ribas-Maynou 2013 (five assays)
- **nbt-assay**: WHO 6th, Esfandiari 2003 (NBT), Agarwal 2014 (NBT cost-effective)
- **mar-iga / mar-igg**: WHO 6th, Francavilla 1997 / Clarke 1985
- **morphology**: WHO 6th, Kruger 1988, Menkveld 2011
- **liquefaction**: WHO 6th, Amelar 1962
- **vitality**: WHO 6th, Björndahl 2003
- **leukocyte**: WHO 6th, Aitken 1994
- **counting-chamber**: WHO 6th, Douglas-Hamilton 2005
- **cp200**: WHO 6th, Cooper 1990, Elzanaty 2002
- **if208**: WHO 6th, ASRM 2015 (diagnostic evaluation of infertile male)

---

## 三、知识库文章（原有引用、无链接）

**内容来源**: `lib/articles-content.ts`

- **此前**: `ArticleRef` 仅 `{ text: string }`，无链接；所有文章均有 references 列表，但无法跳转原文。
- **本次**:
  1. 扩展为 `ArticleRef = { text: string; url?: string }`。
  2. 为已有引用逐一补全 **PubMed** 或 **DOI** 链接（WHO 统一使用上述官方链接）。
  3. 知识库页面渲染引用时：若 `ref.url` 存在则渲染为 `<a href={ref.url}>`，否则仅显示 `ref.text`。

涉及文章：scd-assay, mar-iga, mar-igg, morphology, liquefaction, vitality, leukocyte, counting-chamber, cp200, comet-assay, nbt-assay。  
所用 PMID/DOI 已按文献标题与作者核对，保证可访问性。

---

## 四、WHO 第六版标注情况（产品正文）

| 产品 | 审计前 | 审计后 |
|------|--------|--------|
| scd-assay | 已写 WHO Laboratory Manual (6th Edition) | 不变 |
| comet-assay | 已写 WHO 6th Edition | 不变 |
| nbt-assay | 未写 | 正文未改；References 含 WHO 6th |
| mar-iga | 未写 | 正文增加「Recognized by the WHO Laboratory Manual (6th Edition)…」 |
| mar-igg | 未写 | 正文增加「Our MAR Assay follows the Direct MAR Test protocol of the WHO Laboratory Manual (6th Edition)」 |
| morphology | 未写 | 正文增加「Staining patterns align with the WHO Laboratory Manual (6th Edition)」 |
| liquefaction | 仅「WHO guidelines」 | 改为「WHO Laboratory Manual (6th Edition)」 |
| vitality | 未写 | 正文增加「The WHO Laboratory Manual (6th Edition) recommends vitality testing when motility is below 40%」 |
| leukocyte | 未写 | 正文增加「The WHO 6th Edition recognizes the peroxidase assay…」 |
| counting-chamber | 已写 WHO Laboratory Manual (6th Edition) | 不变 |
| cp200 | 未写 | 正文增加「Seminal plasma biochemistry is part of the WHO Laboratory Manual (6th Edition) recommended workup…」 |
| if208 | 未写 | 正文增加「Hormone panels… are central to the WHO-recommended male infertility and fertility workup」 |

---

## 五、引用链接格式

- **WHO 6th Edition (2021)**  
  官方出版物页:  
  `https://www.who.int/publications/i/item/9789240030787`  
  （无单独 DOI，以 WHO 官方链接为准。）

- **期刊论文**  
  优先使用 PubMed:  
  `https://pubmed.ncbi.nlm.nih.gov/<PMID>/`  
  若无 PMID 则使用 DOI 解析链接，例如:  
  `https://doi.org/10.1111/and.12043`

---

## 六、涉及文件清单

- `lib/product-detail-content.ts` — 产品详情正文 + 新增 references、WHO 表述
- `lib/articles-content.ts` — 知识库引用类型扩展 + 为每条引用补 url
- `app/[locale]/products/[slug]/ProductDetailClient.tsx` — 产品页 References 区块与链接渲染
- `app/[locale]/products/[slug]/page.tsx` — 向客户端传入 `referencesHeading`
- `app/[locale]/knowledge/[slug]/page.tsx` — 知识库引用按 `ref.url` 渲染链接
- `messages/*/products.json` — 各语言增加 `referencesHeading`（References / 参考文献 / 等）

---

## 七、后续建议

1. **多语言参考文献**: 当前产品页 references 为英文固定文案；若需阿拉伯语/法语等版本，可考虑将 `references` 迁入 `messages` 或按 locale 切换显示。
2. **知识库 locale 覆盖**: `messages/*/knowledge-articles.json` 中若某语言覆盖了 `articles-content`，需同步为该国语言的 references 增加 `url` 字段（若结构一致）。
3. **定期校验链接**: 每年对 WHO 链接及主要 PMID/DOI 做一次可访问性检查，避免 404 或改版导致失效。
