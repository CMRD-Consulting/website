// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "CMRD | Boutique Software Engineering",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { name: "theme-color", content: "#0a0a0a" },
        { name: "color-scheme", content: "dark" },
        { name: "msapplication-TileColor", content: "#0a0a0a" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
      ],
      link: [
        // Favicons
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png",
        },
        // Apple touch icons (full set; iOS picks the closest match per device)
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/apple-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-icon-180x180.png",
        },
        // Web app manifest. Served as `.webmanifest` (the spec's registered
        // extension) rather than `.json`: Nitro's prerender crawler follows
        // `.json` hrefs as if they were routes and fails the build with a 404
        // on the static file, but leaves other extensions alone.
        { rel: "manifest", href: "/site.webmanifest" },
        // Font preloads
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxtjs/robots"],
  // `site` powers @nuxtjs/seo: sitemap.xml, robots.txt, and the default
  // og:url / canonical URL resolution. Per-page `useSeoMeta` overrides win.
  site: {
    url: "https://cmrd.dev",
    name: "CMRD",
    description:
      "We don't hire engineers when you need them. We have a curated team of experts—fully trained, vetted, and of the highest caliber—for founders who refuse average software.",
    defaultLocale: "en",
  },
});
