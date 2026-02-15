# 产品页面 SEO 审计报告（男科/生殖医学）

**审计范围**: 所有产品详情页（`/products/[slug]`）  
**内容来源**: `lib/product-detail-content.ts`  
**核心关键词**: WHO 6th edition, Male Infertility, Sperm DNA Fragmentation  
**LSI 示例**: SCD Assay 页面 — oxidative stress, miscarriage  

---

## 一、核心关键词覆盖情况总表

| 产品 Slug | WHO 6th Edition | Male Infertility | Sperm DNA Fragmentation | 备注 |
|-----------|-----------------|------------------|-------------------------|------|
| **scd-assay** | ✅ 有 | ❌ 缺 | ✅ 有 | 仅有 "idiopathic infertility"，缺 "Male Infertility" |
| **comet-assay** | ✅ 有 | ⚠️ 部分 | ⚠️ 部分 | 有 "male factor infertility"、"fragmented DNA"，建议补全标准表述 |
| **mar-iga** | ❌ 缺 | ❌ 缺 | ❌ 缺 | 免疫性不育，与 SDF 非直接相关，可加 WHO/男性不育 |
| **mar-igg** | ❌ 缺 | ❌ 缺 | ❌ 缺 | 同上 |
| **morphology** | ❌ 缺 | ❌ 缺 | ❌ 缺 | 有 Kruger，可加 WHO 6th、Male Infertility |
| **liquefaction** | ⚠️ 部分 | ❌ 缺 | ❌ 缺 | 仅 "WHO guidelines"，未写 "6th Edition" |
| **vitality** | ❌ 缺 | ❌ 缺 | ❌ 缺 | 可加 WHO 6th、Male Infertility |
| **leukocyte** | ❌ 缺 | ❌ 缺 | ❌ 缺 | 可加 WHO 6th、Male Infertility、ROS→SDF 关联 |
| **nbt-assay** | ❌ 缺 | ✅ 有 | ⚠️ 部分 | 有 "male infertility"、"DNA fragmentation"，可加 WHO 6th 明确表述 |
| **counting-chamber** | ✅ 有 | ❌ 缺 | ❌ 缺 | 与 SDF 非直接相关，可加 Male Infertility |
| **cp200** | ❌ 缺 | ❌ 缺 | ❌ 缺 | 生化分析仪，可加 WHO/男性不育/生殖医学 |
| **if208** | ❌ 缺 | ❌ 缺 | ❌ 缺 | 激素/POCT，可加 fertility、andrology |

---

## 二、SCD Assay 页面 LSI 关键词检查

**页面**: `/products/scd-assay`  
**内容文件**: `lib/product-detail-content.ts` → `scd-assay`

| LSI 关键词 | 产品页是否出现 | 说明 |
|------------|----------------|------|
| **oxidative stress** | ❌ **缺失** | 与高 DFI、男性不育强相关，建议在临床意义段落加入 |
| **miscarriage** | ❌ **缺失** | 当前仅有 "recurrent pregnancy loss"；用户常搜 "miscarriage"，建议至少出现一次 |

**说明**: 知识库文章 `lib/articles-content.ts` 中 SCD 文章已包含 "early miscarriage" 和 "Oxidative Stress"，但**产品详情页**正文未包含，产品页是独立 SEO 主体，需在产品页补充。

---

## 三、关键词缺失页面与修改建议

### 1. scd-assay（Sperm DNA Fragmentation Test Kit - SCD）

**缺失**: Male Infertility（标准表述）、oxidative stress、miscarriage  

**建议修改**（在 `lib/product-detail-content.ts` 的 `scd-assay` 第一段）:

- 在 "idiopathic infertility" 附近增加 **"male infertility"**，例如：  
  `... that lead to idiopathic infertility and broader male infertility.`
- 在 "recurrent pregnancy loss" 附近增加 **"miscarriage"**，例如：  
  `... recurrent pregnancy loss (RPL) and miscarriage.`
- 新增一句提及 **oxidative stress** 与 DFI 的关系，例如在 "Key Features" 前加一小段：  
  `Elevated DFI is a key biomarker of oxidative stress in semen; the SCD Assay helps identify this hidden cause of male infertility.`

---

### 2. comet-assay

**缺失**: 完整表述 "Male Infertility"、"Sperm DNA Fragmentation"（当前为 "fragmented DNA"）  

**建议**:  
- 在 "Why Comet Assay?" 或 "ICSI & IVF" 句中加入 **"male infertility"** 和 **"sperm DNA fragmentation"**，例如：  
  `Critical for evaluating sperm DNA fragmentation in severe male infertility and high-stakes ART cycles.`

---

### 3. mar-iga / mar-igg

**缺失**: WHO 6th edition、Male Infertility  

**建议**:  
- 在 "How it Aligns with Standards" 类段落（若无则加一小段）加入：  
  `Recognized by the WHO Laboratory Manual (6th Edition) for immunological screening in male infertility workup.`  
- 首段可加：  
  `Immunological causes contribute to a significant proportion of male infertility; the MAR Assay is the gold standard for detection.`

---

### 4. morphology

**缺失**: WHO 6th edition、Male Infertility、Sperm DNA Fragmentation（形态与受精/胚胎相关，可轻量提及）  

**建议**:  
- 在 "Clinical Accuracy" 段加入：  
  `Morphology is a key parameter in the WHO 6th Edition semen analysis and in the workup of male infertility.`  
- 可选：  
  `Abnormal morphology can correlate with sperm DNA fragmentation and poor ART outcomes.`

---

### 5. liquefaction

**缺失**: "WHO 6th Edition" 明确表述、Male Infertility  

**建议**:  
- 将 "WHO guidelines" 改为 **"WHO Laboratory Manual (6th Edition)"** 或补充：  
  `as highlighted in the WHO Laboratory Manual (6th Edition) for semen processing.`  
- 首段可加：  
  `Hyperviscosity is common in male infertility; gentle liquefaction is essential for accurate downstream testing.`

---

### 6. vitality

**缺失**: WHO 6th edition、Male Infertility  

**建议**:  
- 在 "Performance Features" 或末段加：  
  `The WHO 6th Edition recommends vitality testing when motility is low; it is essential in the male infertility and ICSI pathway.`

---

### 7. leukocyte

**缺失**: WHO 6th edition、Male Infertility、Sperm DNA Fragmentation（通过 ROS 关联）  

**建议**:  
- 在 "Clinical Significance" 中加：  
  `The WHO 6th Edition recognizes the peroxidase assay for leukocytospermia, a treatable cause of male infertility. High leukocyte-derived ROS can lead to sperm DNA fragmentation; early detection supports targeted treatment.`

---

### 8. nbt-assay

**缺失**: "WHO 6th Edition" 明确表述  

**建议**:  
- 在 "Clinical Application" 或 "Therapeutic Monitoring" 附近加：  
  `The WHO 6th Edition emphasizes seminal oxidative stress in male infertility; the NBT Assay provides a standardized, cost-effective screening tool.`

---

### 9. counting-chamber

**缺失**: Male Infertility  

**建议**:  
- 在 "The Modern Standard" 段加：  
  `Accurate concentration and motility are foundational to male infertility diagnosis and WHO 6th Edition compliance.`

---

### 10. cp200 / if208

**缺失**: WHO 6th edition、Male Infertility / fertility、andrology  

**建议**:  
- **cp200**: 在 "Key Semen Biochemical Parameters" 前或后加一句：  
  `Seminal plasma biochemistry is part of the WHO-recommended male infertility and andrology workup.`  
- **if208**: 在首段或 "Fertility" 列表前加：  
  `Essential for fertility and andrology: hormones such as FSH, LH, and AMH are central to male infertility and ART planning.`

---

## 四、实施优先级建议

| 优先级 | 页面 | 原因 |
|--------|------|------|
| **P0** | scd-assay | 核心产品页；缺 Male Infertility + LSI（oxidative stress, miscarriage） |
| **P0** | comet-assay | 同属 DNA 碎裂检测，需标准术语 |
| **P1** | mar-iga, mar-igg, morphology, liquefaction, vitality, leukocyte, nbt-assay | 与精液分析/男性不育直接相关，补 WHO 6th + Male Infertility |
| **P2** | counting-chamber, cp200, if208 | 设备/耗材，补行业术语利于长尾检索 |

---

## 五、数据来源说明

- **产品列表**: `lib/products.ts` → `PRODUCT_SLUGS`（12 个）  
- **产品详情正文**: `lib/product-detail-content.ts` → `PRODUCT_DETAIL_CONTENT`  
- **产品名称/短描述**: `messages/en/products.json` → `items.*.name` / `desc`（用于 H1 和列表页，可一并优化含核心关键词）  
- **知识库文章**: `lib/articles-content.ts`（与产品页独立；SCD 知识页已含 miscarriage、oxidative stress，产品页仍需自洽）

完成上述修改后，建议在英文（及主要语言）产品页中自然融入关键词，避免堆砌，并保持与 WHO 6th、男性不育、精子 DNA 碎裂的语义一致。
