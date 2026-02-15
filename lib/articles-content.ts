export type ArticleSection = { heading: string; body: string };
export type ArticleRef = { text: string };

export type ArticleContent = {
  title: string;
  subtitle?: string;
  sections: ArticleSection[];
  references: ArticleRef[];
};

export const ARTICLES: Record<string, ArticleContent> = {
  'scd-assay': {
    title: 'Evaluating the Genetic Integrity of Male Fertility: The Sperm DNA Fragmentation Index (DFI) and the SCD Assay',
    subtitle: 'Sperm DNA Fragmentation Test Kit (SCD Assay)',
    sections: [
      {
        heading: 'What it is (The Science of SCD)',
        body: 'The Sperm DNA Fragmentation Test Kit utilizes the Sperm Chromatin Dispersion (SCD) method, a robust diagnostic tool designed to detect DNA strand breaks in human spermatozoa. Unlike traditional semen analysis that assesses external traits, the SCD Assay focuses on the "internal" genetic payload. The assay involves a unique acid denaturation process followed by the removal of nuclear proteins. Sperm with intact DNA produce a characteristic "halo" of dispersed DNA loops around the head, while sperm with fragmented DNA fail to form this halo, appearing as small, dense cores under the microscope.',
      },
      {
        heading: 'Why it is Essential (Clinical Impact)',
        body: 'Standard semen parameters (count, motility) often fail to explain cases of "unexplained infertility." High DNA Fragmentation Index (DFI) is a critical independent factor for: Recurrent Pregnancy Loss (RPL): Extensive DNA damage can allow fertilization but leads to poor embryo quality and early miscarriage. Failed ART Outcomes: Patients with high DFI show significantly lower success rates in IVF and ICSI cycles. Identifying Oxidative Stress: Elevated DFI is a primary biomarker for damage caused by smoking, varicocele, and environmental toxins.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'Strictly compliant with the WHO Laboratory Manual (6th Edition), our kit optimizes the lysis buffer and acid treatment time to ensure maximum halo contrast. This standardization reduces inter-observer variability, ensuring that "Borderline" results are categorized with high precision.',
      },
    ],
    references: [
      { text: 'WHO (2021). WHO Laboratory Manual for the Examination and Processing of Human Semen, 6th Edition.' },
      { text: 'Fernández JL, et al. (2003). "The Sperm Chromatin Dispersion (SCD) test: a simple method for the determination of sperm DNA fragmentation." Fertility and Sterility.' },
      { text: 'Evenson DP, et al. (2002). "Characteristics of human sperm chromatin structure and its association with fertility." Journal of Andrology.' },
    ],
  },
  'mar-iga': {
    title: 'Investigating Immunological Infertility: The Role of the IgA MAR Assay in Sperm-Mucus Interaction',
    subtitle: 'Anti-sperm Antibodies IgA Test Kit (MAR Assay)',
    sections: [
      {
        heading: 'What it is',
        body: 'The Anti-sperm Antibodies IgA Test Kit employs the Mixed Antiglobulin Reaction (MAR) Assay to identify IgA-class antibodies bound specifically to the surface of motile sperm. This assay involves mixing fresh semen with latex particles coated with human IgA. Upon adding the monospecific anti-human IgA antiserum, "clumping" (agglutination) occurs between the particles and the sperm if IgA is present.',
      },
      {
        heading: 'Why it is Essential',
        body: 'IgA antibodies are primarily produced locally in the male reproductive tract (secretory IgA). They are clinically significant because they: Block Sperm Transport: IgA-coated sperm are often unable to penetrate the cervical mucus, a phenomenon known as the "shaking effect." Prevent Fertilization: These antibodies can physically hinder the binding of the sperm to the oocyte\'s zona pellucida. Indicate Local Immune Response: IgA is often a more specific indicator of immunological barriers than serum-based tests.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'The MAR Assay is recognized by the WHO as the "Gold Standard" for immunological screening. Our kit provides highly specific latex beads that prevent non-specific binding, ensuring that only clinically relevant antibodies are detected.',
      },
    ],
    references: [
      { text: 'WHO (2021). Semen Examination Manual.' },
      { text: 'Francavilla F, et al. (1997). "Antisperm antibodies and assisted reproduction." Frontiers in Bioscience.' },
    ],
  },
  'mar-igg': {
    title: 'Screening for Immune-Mediated Infertility: The Clinical Value of the IgG MAR Assay',
    subtitle: 'Anti-sperm Antibodies IgG Test Kit (MAR Assay)',
    sections: [
      {
        heading: 'What it is',
        body: 'Similar to the IgA test, the Anti-sperm Antibodies IgG Test Kit (MAR Assay) detects IgG-class antibodies. IgG is the most common class of anti-sperm antibody found in both seminal plasma and on the sperm surface.',
      },
      {
        heading: 'Why it is Essential',
        body: 'IgG antibodies are often the first line of screening for Immunological Infertility. They typically arise from a breach in the blood-testis barrier caused by: Testicular Trauma or Surgery: Such as vasectomy reversal or biopsy. Infections: Chronic prostatitis or epididymitis. Detecting IgG is vital for deciding the clinical pathway; if >50% of motile sperm are coated with IgG, it strongly suggests that the immune system is actively neutralizing the patient\'s fertility.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'Our kit utilizes the "Direct MAR Test" protocol recommended by the WHO. By performing the test on raw, unwashed semen, we avoid the risk of antibody "elution" (stripping) that occurs during centrifugation, which is a common cause of false negatives in other testing methods.',
      },
    ],
    references: [
      { text: 'Clarke GN, et al. (1985). "Detection of anti-sperm antibodies of IgG class." American Journal of Reproductive Immunology.' },
      { text: 'WHO (2021). Laboratory Manual for the Examination and Processing of Human Semen.' },
    ],
  },
  morphology: {
    title: 'Precision Morphology Assessment: Standardizing Kruger Strict Criteria with Improved Diff-Quik II Slides',
    subtitle: 'Prestained Sperm Morphology Staining Slides (Improved Diff-Quik II Formula)',
    sections: [
      {
        heading: 'What it is',
        body: 'Prestained Sperm Morphology Staining Slides are high-quality glass slides pre-coated with a thin, stable film of the Improved Diff-Quik II formula. This Romanowsky-based stain (comprising eosin and azure dyes) allows for the rapid fixation and staining of sperm cells in a single, standardized step.',
      },
      {
        heading: 'Why it is Essential',
        body: 'Sperm morphology is the most subjective parameter in semen analysis. Kruger Strict Criteria: Accurate morphology is required to identify "Teratozoospermia" (abnormal forms). Even a 1% difference in normal forms can change a clinical diagnosis. Standardization: Manual dipping methods lead to batch-to-batch inconsistency. Prestained slides ensure that the dye concentration is perfectly uniform, providing high-contrast images of the acrosome, nucleus, and tail.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'The Improved Diff-Quik II formula is optimized to deliver the specific staining patterns required by the WHO 6th Edition. It ensures that the acrosomal region stains light blue while the post-acrosomal region stains dark purple, allowing for the precise measurement of the acrosomal index.',
      },
    ],
    references: [
      { text: 'Kruger TF, et al. (1988). "Predictive value of abnormal sperm morphology in IVF." Fertility and Sterility.' },
      { text: 'Menkveld R, et al. (2011). "Sperm morphology: its relevance to natural and assisted reproduction." Human Reproduction Update.' },
    ],
  },
  liquefaction: {
    title: 'Overcoming Semen Hyperviscosity: The Safety and Efficacy of the Enzyme Digestion Assay',
    subtitle: 'Semen Liquefaction Kit (Enzyme Digestion Assay)',
    sections: [
      {
        heading: 'What it is',
        body: 'The Semen Liquefaction Kit is a specialized enzymatic reagent (α-amylase/Chymotrypsin based) used to facilitate the liquefaction of semen samples that fail to become fluid within the standard 60-minute window.',
      },
      {
        heading: 'Why it is Essential',
        body: 'Semen Hyperviscosity (SHV) is found in up to 10% of male infertility cases. Prevents Analysis Errors: Highly viscous semen prevents accurate pipetting and motility measurement. Preserves Sperm Integrity: Traditional mechanical liquefaction (using a syringe/needle) causes Mechanical Stress and DNA Fragmentation. Essential for ART: Incomplete liquefaction interferes with the "washing" process for IUI and IVF, often trapping the healthiest sperm in a gel-like matrix.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'Our Enzyme Digestion Assay follows the WHO-approved chemical liquefaction protocol. It ensures that the biochemical properties of the semen are maintained without compromising the sperm membrane or the DNA integrity of the sample.',
      },
    ],
    references: [
      { text: 'Amelar RD. (1962). "Coagulation and liquefaction of semen." Fertility and Sterility.' },
      { text: 'WHO (2021). Procedures for delayed liquefaction.' },
    ],
  },
  vitality: {
    title: 'Vitality vs. Motility: Differentiating Live and Dead Sperm with Eosin-Nigrosin Staining',
    subtitle: 'Sperm Vitality Staining Solution (Eosin-Nigrosin Staining)',
    sections: [
      {
        heading: 'What it is',
        body: 'The Sperm Vitality Staining Solution uses the Eosin-Nigrosin method to assess the membrane integrity of spermatozoa. Eosin is a "cell-excluded" dye; it only enters sperm with a damaged cell membrane (dead sperm), staining them pink. Nigrosin acts as a dark background stain to provide sharp contrast for the white (alive) sperm.',
      },
      {
        heading: 'Why it is Essential',
        body: 'Vitality testing is clinically mandatory when total motility is below 40%. Differentiating Necrozoospermia: It helps determine if immobile sperm are actually dead (Necrozoospermia) or alive but structurally defective (Asthenozoospermia). ICSI Support: For patients with zero motility, vitality staining is the only way to ensure that "live" sperm are selected for injection.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'The WHO recommends Eosin-Nigrosin as the Gold Standard because it is non-toxic to the technician and provides a permanent slide. Our solution is calibrated for neutral pH and correct osmolarity to prevent "artifactual" cell death during the staining process.',
      },
    ],
    references: [
      { text: 'Björndahl L, et al. (2003). "Optimized eosin-nigrosin staining for sperm vitality." Human Reproduction.' },
      { text: 'WHO (2021). Guidelines for Vitality Testing.' },
    ],
  },
  leukocyte: {
    title: 'Detecting Leukocytospermia: The Clinical Role of the Peroxidase Assay in Male Tract Infection',
    subtitle: 'Semen Leukocyte Staining Solution (Peroxidase Assay)',
    sections: [
      {
        heading: 'What it is',
        body: 'The Semen Leukocyte Staining Solution uses a cytochemical Peroxidase Assay to identify polymorphonuclear leukocytes (white blood cells) in semen. Cells containing peroxidase react with the solution to turn a distinct brown color, while immature germ cells (round cells) remain unstained.',
      },
      {
        heading: 'Why it is Essential',
        body: 'Under a standard microscope, Round Cells (immature sperm) look identical to Leukocytes. Diagnosing Infection: High leukocyte counts (>1 million/mL) define Leukocytospermia, a sign of silent infections (e.g., Prostatitis). Reducing ROS Damage: Leukocytes are a major source of Reactive Oxygen Species (ROS), which cause lipid peroxidation of the sperm membrane and lead to DNA damage.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'The WHO 6th Edition recognizes the Peroxidase Assay as the only manual method for the definitive diagnosis of leukocytospermia. Our kit ensures high sensitivity, allowing labs to differentiate between infection-based infertility and maturation-based "round cell" issues.',
      },
    ],
    references: [
      { text: 'Aitken RJ, et al. (1994). "Analysis of leukocyte infiltration in human semen." Human Reproduction.' },
      { text: 'WHO (2021). Manual for Peroxidase Staining.' },
    ],
  },
  'counting-chamber': {
    title: 'The Foundation of Accuracy: Standardizing Semen Analysis with the 10μm Sperm Counting Chamber',
    subtitle: 'Sperm Counting Chamber (Disposable)',
    sections: [
      {
        heading: 'What it is',
        body: 'A precision-engineered glass Sperm Counting Chamber specifically designed for the quantitative analysis of sperm concentration and motility. It features a calibrated depth (typically 10 micrometers) to ensure sperm can swim freely in a single focal plane.',
      },
      {
        heading: 'Why it is Essential',
        body: 'Precision in counting is the bedrock of andrology. Eliminating Overlap: Standard 100μm chambers (like Neubauer) are too deep, making it impossible to focus on all sperm at once. Ensuring Motility Accuracy: A 10μm depth is sufficient for "Progressive Motility" to be observed without the "wall effect" seen in 20μm chambers. Reliable Diagnostics: Essential for diagnosing Oligozoospermia (low count) and evaluating the efficacy of male contraceptives or infertility treatments.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'The chamber is manufactured to the strict tolerances suggested by the WHO. Its rigid glass construction ensures that the volume remains constant, reducing the Coefficient of Variation (CV) compared to disposable plastic slides.',
      },
    ],
    references: [
      { text: 'Douglas-Hamilton DH, et al. (2005). "Comparison of counting chambers in semen analysis." Fertility and Sterility.' },
      { text: 'WHO (2021). Standardized Counting Chambers for Motility and Concentration.' },
    ],
  },
  cp200: {
    title: 'Advanced Seminal Biochemistry: Mapping Accessory Gland Health with the Sperminfo CP200 Analyzer',
    subtitle: 'CP200 - Fully Automated Semen Plasma Analyzer',
    sections: [
      {
        heading: 'What it is',
        body: 'The CP200 - Fully Automated Semen Plasma Analyzer is a high-throughput diagnostic system designed to quantify five critical biochemical markers: Zinc, Fructose, Citric Acid, Neutral-α-glucosidase (NAG), and Elastase.',
      },
      {
        heading: 'Why it is Essential (The Diagnostic Map)',
        body: 'Seminal plasma biochemistry acts as a "GPS" for the male reproductive tract: Neutral-α-glucosidase (NAG): The specific marker for the Epididymis. Low levels indicate an epididymal obstruction. Fructose: Produced by the Seminal Vesicles. Its absence is a classic indicator of Congenital Bilateral Absence of the Vas Deferens (CBAVD). Zinc & Citric Acid: Indicators of Prostatic Function. Low levels suggest chronic prostatitis or gland dysfunction. Elastase: A definitive marker for active inflammation, more reliable than simple leukocyte counting.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'Manual biochemistry is prone to error. The CP200 automates the colorimetric and enzymatic reactions recommended by the WHO, ensuring that temperature, timing, and wavelength are perfectly controlled for every test. This brings "Reference Laboratory" accuracy to any fertility clinic.',
      },
    ],
    references: [
      { text: 'Cooper TG. (1990). "Epididymal markers in human semen." Human Reproduction.' },
      { text: 'Elzanaty S, et al. (2002). "Zinc and fructose in seminal plasma." Journal of Andrology.' },
      { text: 'WHO (2021). Biochemical examination of seminal plasma.' },
    ],
  },
  'comet-assay': {
    title: 'Precision Mapping of DNA Strand Breaks: The Power of the Sperm Comet Assay in Male Infertility',
    subtitle: 'Sperm DNA Fragmentation Test Kit (Comet Assay)',
    sections: [
      {
        heading: 'What it is (Single-Cell Electrophoresis)',
        body: 'The Sperm DNA Fragmentation Test Kit (Comet Assay) utilizes single-cell gel electrophoresis to quantify DNA damage in individual spermatozoa. Unlike the SCD assay, which measures chromatin dispersion, the Comet Assay directly migrates fragmented DNA out of the sperm head using an electric field. The resulting image resembles a "comet," where the head represents intact DNA and the tail represents fragmented strands. The "Tail Moment" and "Tail DNA %" provide a quantitative measure of the severity of the damage.',
      },
      {
        heading: 'Why it is Essential (The Sensitivity Advantage)',
        body: 'The Comet Assay is widely regarded as one of the most sensitive methods for detecting DNA damage. Single vs. Double Strand Breaks: The alkaline Comet Assay can detect both single-strand (SSB) and double-strand breaks (DSB), offering a more comprehensive genetic profile than other tests. High Predictive Power: Research indicates that the Comet Assay is a superior predictor of IVF and ICSI success. A threshold of >25% DNA damage is strongly correlated with male-factor infertility, while >50% damage is linked to a significant decline in live birth rates. Individual Cell Analysis: It allows for the assessment of even very low-concentration samples (cryptozoospermia), which is difficult for flow-cytometry-based methods.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'While the SCD test is excellent for routine screening, the WHO 6th Edition recognizes the Comet Assay as a sophisticated "Advanced Examination" tool. Our kit standardizes the agarose gel consistency and lysis time, which are the two most critical variables in electrophoresis, ensuring that labs can achieve repeatable, publishable-quality results.',
      },
    ],
    references: [
      { text: 'Simon L, et al. (2011). "Sperm DNA damage measured by the alkaline Comet assay as an independent predictor of male infertility and IVF success." Fertility and Sterility.' },
      { text: 'Ribas-Maynou J, et al. (2013). "Comprehensive analysis of sperm DNA fragmentation by five different assays." Andrology.' },
      { text: 'WHO (2021). Laboratory Manual for the Examination and Processing of Human Semen, 6th Edition.' },
    ],
  },
  'nbt-assay': {
    title: 'Decoding Seminal Oxidative Stress: Identifying ROS-Mediated Damage with the NBT Assay',
    subtitle: 'Assess Pro-oxidant Activity in Semen (Nitro-blue Tetrazolium Assay)',
    sections: [
      {
        heading: 'What it is (The Formazan Reaction)',
        body: 'The Nitro-blue Tetrazolium (NBT) Assay is a biochemical test used to assess the "Pro-oxidant" activity (specifically superoxide anion production) in a semen sample. NBT is a yellow, water-soluble compound that, when reduced by Reactive Oxygen Species (ROS), turns into an insoluble dark blue/purple crystal called Formazan. The intensity of the color can be measured photometrically or visualized under a microscope to identify the cellular source of the stress.',
      },
      {
        heading: 'Why it is Essential (The "Silent" Infertility Cause)',
        body: 'Oxidative stress is implicated in up to 80% of all male infertility cases, yet it is often invisible in a standard semen analysis. Sperm and Leukocyte Tracking: The NBT Assay helps differentiate whether ROS is coming from activated white blood cells (Leukocytospermia) or from defective, immature spermatozoa (cytoplasmic droplets). Predicting DNA Damage: High pro-oxidant activity is a precursor to DNA fragmentation. Measuring it allows for early intervention with antioxidant therapy before irreversible genetic damage occurs. Cost-Effective Screening: Unlike chemiluminescence, the NBT Assay is an affordable, rapid tool that provides immediate clinical insight into the "oxidative health" of the ejaculate.',
      },
      {
        heading: 'How it Aligns with Standards',
        body: 'The WHO 6th Edition emphasizes the role of seminal oxidative stress as a primary driver of male infertility. Our kit provides a stabilized NBT reagent that prevents auto-oxidation, ensuring that the formazan production is strictly proportional to the actual superoxide levels in the sample.',
      },
    ],
    references: [
      { text: 'Esfandiari N, et al. (2003). "Utility of the nitroblue tetrazolium reduction test for assessment of reactive oxygen species production by seminal leukocytes and spermatozoa." Journal of Andrology.' },
      { text: 'Tunc O, et al. (2010). "Development of the NBT assay as a marker of sperm oxidative stress." International Journal of Andrology.' },
      { text: 'Agarwal A, et al. (2014). "Cost-effective diagnosis of male oxidative stress using the nitroblue tetrazolium test." Andrologia.' },
    ],
  },
};
