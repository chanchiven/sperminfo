# 产品页市场营销检查报告

**视角**: 市场营销专家  
**检查项**: 痛点解决描述、Call to Action、相关产品推荐  

---

## 一、痛点解决描述（Pain-point → Solution）

### 1. 检查结论

- **此前**: 多数产品首段已有「问题 → 我们的方案」表述（如 SCD「传统精液分析常漏检… SCD Assay 帮助识别」、MAR「免疫系统将精子视为异物… MAR 为金标准」），但 **CP200、IF208** 首段偏「功能/优势」导向，缺少明确的「痛点」开篇。
- **本次**:
  - **CP200** 首段改为先点出痛点：*「Manual biochemistry is time-consuming and prone to variability; delayed results can hold up fertility workups.»* 再引出 *「Our CP200 delivers lab-grade… in minutes.»*
  - **IF208** 首段改为先点出痛点：*「Waiting for external lab results for FSH, LH, AMH… delays diagnosis and treatment decisions.»* 再引出 *「Our IF208 brings hormone… in-house.»*
  - 其余产品（SCD、Comet、NBT、MAR、Morphology、Liquefaction、Vitality、Leukocyte、Counting Chamber）已具备清晰的痛点→解决方案描述，未改。

### 2. 各产品痛点→方案摘要

| 产品 | 痛点（开篇） | 方案（我们的产品） |
|------|--------------|--------------------|
| SCD Assay | 传统精液分析漏检遗传缺陷；高 DFI 导致流产/IVF 失败 | SCD Assay 识别隐性男性不育原因 |
| Comet Assay | 需要最高分辨率 DNA 损伤评估 | Comet 为金标准，可区分单/双链断裂 |
| NBT Assay | 氧化应激涉及约 80% 男性不育 | NBT 提供精液氧化状态窗口 |
| MAR IgA/ IgG | 免疫系统攻击精子，阻碍活力与受精 | MAR 为免疫性不育诊断金标准 |
| Morphology | 形态学最难标准化 | 预染片 + Diff-Quik II 满足 Kruger 严格标准 |
| Liquefaction | 延迟液化/高黏度影响活力与 IUI/IVF | 酶消化 assay 温和、可重复 |
| Vitality | 低活力样本需区分「活但不动」与「死」 | 伊红-苯胺黑一步法快速区分 |
| Leukocyte | 镜下难区分圆细胞与白细胞 | 过氧化物酶染色明确区分 |
| Counting Chamber | 交叉污染、维护成本 | 一次性 10μm 腔室，符合 WHO 6th |
| CP200 | 手工生化耗时长、结果延迟拖慢诊疗 | CP200 全自动、数分钟出结果 |
| IF208 | 外送激素结果等待久、延误决策 | IF208 院内快速激素/甲状腺等检测 |

---

## 二、Call to Action（CTA）按钮

### 1. 检查结论

- **此前**: 产品页仅有一个主按钮，文案为 **「Contact Us」**（来自 `products.contact`），行动导向偏弱。
- **本次**:
  - 新增 **主 CTA 文案**：`products.ctaPrimary` = **「Get a Quote」**（英文），产品详情页主按钮优先展示「Get a Quote」。
  - 若当前语言未配置 `ctaPrimary`，则回退为「Contact Us」，保证多语言可用。
  - 按钮仍链到 **/contact**，行为不变，仅文案更利于转化。

### 2. 涉及文件

- `messages/en/products.json`：新增 `ctaPrimary`、`relatedProductsHeading`。
- `app/[locale]/products/[slug]/ProductDetailClient.tsx`：接收 `ctaPrimary`，主按钮显示 `ctaLabel`（优先 Get a Quote）。
- `app/[locale]/products/[slug]/page.tsx`：向客户端传入 `ctaPrimary`、`relatedProductsHeading`。

---

## 三、相关产品推荐（Related Products）

### 1. 检查结论

- **此前**: 产品详情页**没有**「相关产品推荐」区块，仅知识库文章页有「Related Product → View Product」链到对应产品。
- **本次**:
  - 在**每个产品详情页底部**（References 下方、CTA 按钮上方）新增 **「Related Products」** 区块。
  - 相关产品列表按**临床/工作流逻辑**配置，见下表。

### 2. 相关产品逻辑（按产品）

| 当前产品 | 推荐相关产品 | 逻辑说明 |
|----------|--------------|----------|
| SCD Assay | Comet Assay, NBT Assay, Counting Chamber | 同属 DNA/遗传完整性；NBT 量化氧化应激；计数为常规流程 |
| Comet Assay | SCD Assay, NBT Assay, Vitality | 同为 DNA 损伤/完整性；活力为常规参数 |
| NBT Assay | Leukocyte, SCD Assay, Comet Assay | 白细胞为 ROS 来源；高氧化应激与 DFI 相关 |
| MAR IgA | MAR IgG, Morphology, Vitality | 同属免疫筛查；形态与活力为常规组合 |
| MAR IgG | MAR IgA, Morphology, Vitality | 同上 |
| Morphology | Vitality, Counting Chamber, SCD Assay | 形态+活力+计数为常规组合；异常形态与 DNA 相关 |
| Liquefaction | Counting Chamber, SCD Assay, Vitality | 液化是计数/DFI 取样前置；活力为常规 |
| Vitality | Morphology, Counting Chamber, Leukocyte | 常规精液分析组合 |
| Leukocyte | NBT Assay, SCD Assay, CP200 | 白细胞→氧化应激→DFI；CP200 含 Elastase 等炎症指标 |
| Counting Chamber | Liquefaction, Morphology, Vitality | 计数前常需液化；形态/活力为常规 |
| CP200 | Leukocyte, Counting Chamber, IF208 | 生化+炎症+计数；IF208 为激素/POCT 互补 |
| IF208 | CP200, SCD Assay, Vitality | 激素+生化+精液 DNA/活力 完整工作流 |

### 3. 涉及文件

- **新增** `lib/related-products.ts`：`RELATED_PRODUCTS` 映射（slug → slug[]）、`getRelatedProductSlugs(slug)`。
- `app/[locale]/products/[slug]/ProductDetailClient.tsx`：底部渲染「Related Products」标题 + 相关产品链接列表（使用 `t(\`items.${key}.name\`)` 显示名称）。
- `app/[locale]/products/[slug]/page.tsx`：传入 `relatedProductsHeading`。

---

## 四、小结

- **痛点描述**: 12 个产品均具备清晰的「问题→方案」表述；CP200、IF208 已补强首段痛点开篇。
- **CTA**: 主按钮文案改为「Get a Quote」，仍指向 /contact，转化导向更明确。
- **相关产品**: 每页底部增加「Related Products」区块，推荐 2–3 个与当前产品在**工作流或临床场景**上强相关的产品，逻辑一致、便于交叉转化。
