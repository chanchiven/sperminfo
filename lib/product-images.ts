/** 产品主图（用于列表/首页卡片） */
export const SLUG_TO_IMAGE: Record<string, string> = {
  'scd-assay': '/images/products/Sperm DNA Fragmentation Test Kit (SCD Assay).webp',
  'mar-iga': '/images/products/Anti-sperm Antibodies IgA Test Kit (Mixed Antiglobulin Reaction Assay).webp',
  'mar-igg': '/images/products/Anti-sperm Antibodies IgG Test Kit (Mixed Antiglobulin Reaction Assay).webp',
  morphology:
    '/images/products/Prestained Sperm Morphology Staining Slides (Improved Diff-Quik II Formula).webp',
  liquefaction: '/images/products/Semen Liquefaction Kit (Enzyme Digestion Assay).webp',
  vitality: '/images/products/Sperm Vitality Staining Solution (Eosin-Nigrosin Staining).webp',
  leukocyte: '/images/products/Semen Leukocyte Staining Solution (Peroxidase Assay).webp',
  'counting-chamber': '/images/products/Sperm Counting Chamber.webp',
  cp200: '/images/products/CP200 - Fully Automated Semen Plasma Analyzer front.webp',
  if208: '/images/products/IF208 - POCT Hormone Analyzer (Florescent Immunoassay) front.webp',
};

/** 产品详情页：所有图片（含多张） */
export const SLUG_TO_IMAGES: Record<string, string[]> = {
  'scd-assay': [
    '/images/products/Sperm DNA Fragmentation Test Kit (SCD Assay).webp',
    '/images/products/Sperm DNA Fragmentation Test Kit (SCD Assay) 2.webp',
  ],
  'mar-iga': [
    '/images/products/Anti-sperm Antibodies IgA Test Kit (Mixed Antiglobulin Reaction Assay).webp',
  ],
  'mar-igg': [
    '/images/products/Anti-sperm Antibodies IgG Test Kit (Mixed Antiglobulin Reaction Assay).webp',
    '/images/products/Anti-sperm Antibodies IgG Test Kit (Mixed Antiglobulin Reaction Assay) 2.webp',
  ],
  morphology: [
    '/images/products/Prestained Sperm Morphology Staining Slides (Improved Diff-Quik II Formula).webp',
    '/images/products/Prestained Sperm Morphology Staining Slides (Improved Diff-Quik II Formula) 2.webp',
  ],
  liquefaction: ['/images/products/Semen Liquefaction Kit (Enzyme Digestion Assay).webp'],
  vitality: ['/images/products/Sperm Vitality Staining Solution (Eosin-Nigrosin Staining).webp'],
  leukocyte: [
    '/images/products/Semen Leukocyte Staining Solution (Peroxidase Assay).webp',
    '/images/products/Semen Leukocyte Staining Solution (Peroxidase Assay) 2 (1).webp',
  ],
  'counting-chamber': ['/images/products/Sperm Counting Chamber.webp'],
  cp200: [
    '/images/products/CP200 - Fully Automated Semen Plasma Analyzer front.webp',
    '/images/products/CP200 - Fully Automated Semen Plasma Analyzer left.webp',
  ],
  if208: [
    '/images/products/IF208 - POCT Hormone Analyzer (Florescent Immunoassay) front.webp',
    '/images/products/IF208 - POCT Hormone Analyzer (Florescent Immunoassay) left.webp',
    '/images/products/IF208 reagent.webp',
  ],
};

export const SLUG_TO_ICON: Record<string, string> = {
  'comet-assay': 'fa-dna',
  'nbt-assay': 'fa-flask',
};
