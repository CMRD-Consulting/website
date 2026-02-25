// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: 'CMRD | Boutique Software Engineering',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { name: 'theme-color', content: '#0a0a0a' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap' },
      ],
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxtjs/robots'],
  site: {
    url: 'https://cmrd.dev',
    name: 'CMRD',
    description: 'We don\'t hire engineers when you need them. We have a curated team of experts—fully trained, vetted, and of the highest caliber—for founders who refuse average software.',
    defaultLocale: 'en',
  },
})
