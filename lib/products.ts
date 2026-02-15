export const PRODUCT_SLUGS = [
  'scd-assay',
  'comet-assay',
  'mar-iga',
  'mar-igg',
  'morphology',
  'liquefaction',
  'vitality',
  'leukocyte',
  'nbt-assay',
  'counting-chamber',
  'cp200',
  'if208',
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export function isValidProductSlug(slug: string): slug is ProductSlug {
  return (PRODUCT_SLUGS as readonly string[]).includes(slug);
}
