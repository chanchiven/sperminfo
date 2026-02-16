import type {ArticleSlug} from './knowledge';
import {ARTICLE_SLUGS} from './knowledge';
import {LOCALES, type Locale} from '@/i18n/locales';

/**
 * SEO-friendly URL slug per article per locale.
 * Used for /knowledge/[slug] so each language has a readable, keyword-rich URL.
 */
export const ARTICLE_URL_SLUGS: Record<ArticleSlug, Record<Locale, string>> = {
  'scd-assay': {
    en: 'sperm-dna-fragmentation-scd-assay',
    ar: 'tafattut-adn-manawi-ijra-scd',
    fr: 'fragmentation-adn-spermatique-test-scd',
    es: 'fragmentacion-adn-espermatico-ensayo-scd',
    ru: 'fragmentatsiya-dnk-spermii-test-scd',
    it: 'frammentazione-dna-spermatozoi-saggio-scd',
    tr: 'sperm-dna-fragmentasyonu-scd-testi',
    pt: 'fragmentacao-dna-espermatico-ensaio-scd',
  },
  'mar-iga': {
    en: 'anti-sperm-antibodies-iga-mar-assay',
    ar: 'anticorps-anti-manawi-iga-mar',
    fr: 'anticorps-anti-spermatozoides-iga-test-mar',
    es: 'anticuerpos-antiespermatozoides-iga-ensayo-mar',
    ru: 'anti-spermnye-antitela-iga-mar-test',
    it: 'anticorpi-anti-spermatozoo-iga-saggio-mar',
    tr: 'anti-sperm-antikorlari-iga-mar-testi',
    pt: 'anticorpos-antiespermatozoides-iga-ensaio-mar',
  },
  'mar-igg': {
    en: 'anti-sperm-antibodies-igg-mar-assay',
    ar: 'anticorps-anti-manawi-igg-mar',
    fr: 'anticorps-anti-spermatozoides-igg-test-mar',
    es: 'anticuerpos-antiespermatozoides-igg-ensayo-mar',
    ru: 'anti-spermnye-antitela-igg-mar-test',
    it: 'anticorpi-anti-spermatozoo-igg-saggio-mar',
    tr: 'anti-sperm-antikorlari-igg-mar-testi',
    pt: 'anticorpos-antiespermatozoides-igg-ensaio-mar',
  },
  morphology: {
    en: 'sperm-morphology-staining-slides',
    ar: 'shukuk-sabgh-morfologia-manawi',
    fr: 'lames-coloration-morphologie-spermatozoaires',
    es: 'laminas-tincion-morfologia-espermatica',
    ru: 'stekla-okraski-morfologii-spermatozoidov',
    it: 'vetrini-colorazione-morfologia-spermatozoi',
    tr: 'sperm-morfoloji-boyama-lamlar',
    pt: 'laminas-coloracao-morfologia-espermatica',
  },
  liquefaction: {
    en: 'semen-liquefaction-kit',
    ar: 'majmumat-takhallul-al-mani',
    fr: 'kit-liquefaction-sperme',
    es: 'kit-liquefaccion-seminal',
    ru: 'nabor-razzhizheniya-eyakulyata',
    it: 'kit-liquefazione-seme',
    tr: 'semen-sivilasma-kiti',
    pt: 'kit-liquefacao-seminal',
  },
  vitality: {
    en: 'sperm-vitality-staining-solution',
    ar: 'hallul-sabgh-hayat-manawi',
    fr: 'solution-coloration-vitalite-spermatozoaires',
    es: 'solucion-tincion-vitalidad-espermatica',
    ru: 'rastvor-okraski-zhiznesposobnosti-spermii',
    it: 'soluzione-colorazione-vitalita-spermatozoi',
    tr: 'sperm-canlilik-boyama-solusyonu',
    pt: 'solucao-coloracao-vitalidade-espermatica',
  },
  leukocyte: {
    en: 'semen-leukocyte-staining-solution',
    ar: 'hallul-sabgh-kara-bayt-dam-bayda',
    fr: 'solution-coloration-leucocytes-sperme',
    es: 'solucion-tincion-leucocitos-seminales',
    ru: 'rastvor-okraski-leykotsitov-eyakulyata',
    it: 'soluzione-colorazione-leucociti-seme',
    tr: 'semen-lokosit-boyama-solusyonu',
    pt: 'solucao-coloracao-leucocitos-seminal',
  },
  'counting-chamber': {
    en: 'sperm-counting-chamber-disposable',
    ar: 'ghurfat-add-manawi-narq',
    fr: 'chambre-comptage-spermatozoides-jetable',
    es: 'camara-conteo-espermatozoides-desechable',
    ru: 'kamera-podscheta-spermatozoidov-odnorazovaya',
    it: 'camera-conteggio-spermatozoi-monouso',
    tr: 'sperm-sayim-odasi-tek-kullanimlik',
    pt: 'camara-contagem-espermatozoides-descartavel',
  },
  cp200: {
    en: 'cp200-automated-semen-plasma-analyzer',
    ar: 'cp200-mihlal-plazma-manawi-ala',
    fr: 'cp200-analyseur-plasma-spermatique-automatise',
    es: 'cp200-analizador-plasma-seminal-automatizado',
    ru: 'cp200-avtomatizirovannyy-analizator-plazmy-eyakulyata',
    it: 'cp200-analizzatore-plasma-seminale-automatizzato',
    tr: 'cp200-otomatik-semen-plazma-analizoru',
    pt: 'cp200-analisador-plasma-seminal-automatizado',
  },
  'comet-assay': {
    en: 'sperm-dna-fragmentation-comet-assay',
    ar: 'tafattut-adn-manawi-ijra-comet',
    fr: 'fragmentation-adn-spermatique-test-comete',
    es: 'fragmentacion-adn-espermatico-ensayo-cometa',
    ru: 'fragmentatsiya-dnk-spermii-test-kometa',
    it: 'frammentazione-dna-spermatozoi-saggio-cometa',
    tr: 'sperm-dna-fragmentasyonu-komet-testi',
    pt: 'fragmentacao-dna-espermatico-ensaio-cometa',
  },
  'nbt-assay': {
    en: 'nbt-assay-oxidative-stress-semen',
    ar: 'ijra-nbt-tawattur-tawaqdi',
    fr: 'test-nbt-stress-oxydatif-sperme',
    es: 'ensayo-nbt-estres-oxidativo-seminal',
    ru: 'nbt-test-okislitelnyy-stress-eyakulyat',
    it: 'saggio-nbt-stress-ossidativo-seme',
    tr: 'nbt-testi-oksidatif-stres-semen',
    pt: 'ensaio-nbt-estresse-oxidativo-seminal',
  },
};

/** Reverse: (locale, urlSlug) -> canonical ArticleSlug */
const _urlSlugToCanonical: Record<Locale, Record<string, ArticleSlug>> = {} as Record<
  Locale,
  Record<string, ArticleSlug>
>;

function buildReverseMap() {
  for (const locale of LOCALES) {
    _urlSlugToCanonical[locale] = {};
    for (const canonical of ARTICLE_SLUGS) {
      const urlSlug = ARTICLE_URL_SLUGS[canonical][locale];
      _urlSlugToCanonical[locale][urlSlug] = canonical;
    }
  }
}
buildReverseMap();

const DEFAULT_LOCALE: Locale = 'en';

export function getCanonicalArticleSlug(locale: string, urlSlug: string): ArticleSlug | null {
  if (!LOCALES.includes(locale as Locale)) return null;
  return _urlSlugToCanonical[locale as Locale][urlSlug] ?? null;
}

export function getArticleUrlSlug(canonicalSlug: ArticleSlug, locale: string): string {
  const loc = LOCALES.includes(locale as Locale) ? (locale as Locale) : DEFAULT_LOCALE;
  return ARTICLE_URL_SLUGS[canonicalSlug][loc];
}
