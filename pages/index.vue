<template>
  <div>
    <HeroSection />
    <ProblemSection />
    <PhilosophySection />
    <ProcessSection />
    <ProjectsSection />
    <TeamSection />
    <ContactSection />
  </div>
</template>

<script setup>
const siteUrl = 'https://cmrd.dev';
const ogImage = `${siteUrl}/og-image.jpeg`;
const title = 'CMRD | Boutique Software Engineering';
const description = 'We don\'t hire engineers when you need them. A curated team of experts—fully trained, vetted, and of the highest caliber. Same DNA: same vigor, quality, and obsession with clean code.';
const imageAlt = 'CMRD — Boutique software engineering. Curated talent. Exceptional outcomes.';

useSeoMeta({
  // Core
  title,
  description,
  author: 'CMRD Consulting',
  themeColor: '#0a0a0a',
  colorScheme: 'dark',

  // Open Graph
  ogTitle: title,
  ogDescription: description,
  ogUrl: siteUrl,
  ogType: 'website',
  ogSiteName: 'CMRD',
  ogLocale: 'en_US',
  ogImage: ogImage,
  ogImageType: 'image/jpeg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: imageAlt,

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
  twitterImageAlt: imageAlt,
});

// Canonical URL — kept explicit even though @nuxtjs/seo would derive it from
// `site.url`, because it's the single most-checked thing on a marketing site.
useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
});

// JSON-LD: tells Google + LLMs what this organization is, in a structured form.
useSchemaOrg([
  defineOrganization({
    name: 'CMRD Consulting',
    alternateName: 'CMRD',
    url: siteUrl,
    logo: `${siteUrl}/cmrd-logo.png`,
    image: ogImage,
    description,
    email: 'info@cmrd.dev',
    foundingDate: '2024-05',
    founder: {
      '@type': 'Person',
      name: 'Christopher Mitchell',
      url: 'https://www.linkedin.com/in/crishellco/',
    },
  }),
  defineWebSite({
    name: 'CMRD',
    url: siteUrl,
    description,
    inLanguage: 'en-US',
  }),
]);
</script>
