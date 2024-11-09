<template>
  <div class="relative h-dvh w-dvw bg-slate-950 p-10 space-y-8 flex flex-col">
    <div
      class="fixed z-[-2] inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    </div>
    <div
      class="flex items-center justify-center md:justify-start flex-col md:flex-row md:space-x-6 flex-none max-md:space-y-6">
      <div class="animate-fade animate-once animate-delay-200">
        <div class="relative h-28 w-28 rounded overflow-hidden">
          <div
            class="absolute rounded inset-0 bg-gradient-to-br from-fuchsia-700 via-indigo-300 to-cyan-800 animate-rotate-gradient"
            aria-hidden="true"></div>
          <div
            class="absolute inset-1 rounded flex flex-col items-center justify-center text-4xl leading-none bg-neutral-900 text-center">
            CM<br />RD
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center md:items-start space-y-2 animate-fade animate-once animate-delay-[1000ms]">
        <div class="text-xl md:text-3xl">CMRD Consulting</div>
        <a href="mailto:info@cmrd.dev?subject=Hello" target="_top"
          class="hover:opacity-100 transition-opacity duration-300 opacity-75">info@cmrd.dev</a>
      </div>
    </div>
    <div class="flex-1">
      <nuxt-page />
    </div>
    <div class="flex justify-center max-lg:text-xs animate-fade animate-once animate-delay-[1800ms]">
      <span class="opacity-75">
        &copy; {{ year }} CMRD Consulting LLC
      </span>
    </div>
  </div>
</template>

<script setup>
const url = useRequestURL()

useHead({
  meta: [
    { name: 'twitter:description', content: 'CMRD Consulting LLC' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'CMRD Consulting LLC' },
    { property: 'twitter:url', content: url.origin },
    { property: 'twitter:domain', content: url.host },
    {
      name: 'twitter:image',
      content: `${url.origin}/og_image.jpeg`,
    },
    { property: 'og:description', content: 'CMRD Consulting LLC' },
    { property: 'og:url', content: url.origin },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'CMRD Consulting LLC' },
    {
      property: 'og:image',
      content: `${url.origin}/og_image.jpeg`,
    }
  ],
})

const year = new Date().getFullYear();
</script>
