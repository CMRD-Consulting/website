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
      title: "Thank You",
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
      ],
      link: [
        // Favicons: the SVG is sharp at any size in modern browsers; the
        // .ico (16/32/48) covers older ones and anything that requests
        // /favicon.ico directly. `sizes="32x32"` stops Chrome from preferring
        // the .ico over the SVG.
        { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        // iOS home screen. Full-bleed square; iOS rounds the corners itself.
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
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
      "The CMRD team is joining EDB. A note of thanks to our clients and our team, plus Ratify, our agentic code review tool for macOS.",
    defaultLocale: "en",
  },
});
