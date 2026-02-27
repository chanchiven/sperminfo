export const PRODUCT_SLUGS = [
  'cp200',
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
  'if208',
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export function isValidProductSlug(slug: string): slug is ProductSlug {
  return (PRODUCT_SLUGS as readonly string[]).includes(slug);
}
