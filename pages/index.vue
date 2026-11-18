<template>
  <div>
    <FarewellHeroSection />
    <GratitudeSection />
    <NextChapterSection />
    <RatifySection />
    <FarewellSection />
  </div>
</template>

<script setup>
const siteUrl = 'https://cmrd.dev';
const ogImage = `${siteUrl}/og-image.jpeg`;
const title = 'CMRD | Thank You';
const description = 'The CMRD team is joining EDB. A note of thanks to the clients and engineers who made it possible, and a pointer to Ratify, which lives on.';
const imageAlt = 'CMRD — Thank you to our clients and team.';

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
