export const ARTICLE_SLUGS = [
  'scd-assay',
  'mar-iga',
  'mar-igg',
  'morphology',
  'liquefaction',
  'vitality',
  'leukocyte',
  'counting-chamber',
  'cp200',
  'comet-assay',
  'nbt-assay',
] as const;

export type ArticleSlug = (typeof ARTICLE_SLUGS)[number];

export function isValidArticleSlug(slug: string): slug is ArticleSlug {
  return (ARTICLE_SLUGS as readonly string[]).includes(slug);
}

export const ARTICLE_TO_PRODUCT_SLUG: Record<ArticleSlug, string> = {
  'scd-assay': 'scd-assay',
  'mar-iga': 'mar-iga',
  'mar-igg': 'mar-igg',
  morphology: 'morphology',
  liquefaction: 'liquefaction',
  vitality: 'vitality',
  leukocyte: 'leukocyte',
  'counting-chamber': 'counting-chamber',
  cp200: 'cp200',
  'comet-assay': 'comet-assay',
  'nbt-assay': 'nbt-assay',
};
