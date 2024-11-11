// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'CMRD Consulting',
      meta: [
        { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxtjs/robots'],
  site: {
    url: 'https://cmrd.dev',
    name: 'CMRD Consulting',
    description: 'CMRD Consulting is a software development and consulting company based in the United States.',
    defaultLocale: 'en',
  },
})
