import type {ProductSlug} from './products';

/**
 * Related products per slug for "Related Products" section on product detail pages.
 * Logic: same workflow (liquefaction → counting chamber), same clinical area (DNA → NBT/Comet),
 * complementary tests (leukocyte → NBT, morphology → vitality).
 */
export const RELATED_PRODUCTS: Record<ProductSlug, ProductSlug[]> = {
  'scd-assay': ['comet-assay', 'nbt-assay', 'counting-chamber'],
  'comet-assay': ['scd-assay', 'nbt-assay', 'vitality'],
  'nbt-assay': ['leukocyte', 'scd-assay', 'comet-assay'],
  'mar-iga': ['mar-igg', 'morphology', 'vitality'],
  'mar-igg': ['mar-iga', 'morphology', 'vitality'],
  morphology: ['vitality', 'counting-chamber', 'scd-assay'],
  liquefaction: ['counting-chamber', 'scd-assay', 'vitality'],
  vitality: ['morphology', 'counting-chamber', 'leukocyte'],
  leukocyte: ['nbt-assay', 'scd-assay', 'cp200'],
  'counting-chamber': ['liquefaction', 'morphology', 'vitality'],
  cp200: ['leukocyte', 'counting-chamber', 'if208'],
  if208: ['cp200', 'scd-assay', 'vitality'],
};

export function getRelatedProductSlugs(slug: ProductSlug): ProductSlug[] {
  return RELATED_PRODUCTS[slug] ?? [];
}
