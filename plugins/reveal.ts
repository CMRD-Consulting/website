// `v-reveal` — adds `.revealed` to an element when it scrolls into the viewport.
// Pair with `class="reveal"` so the initial hidden state renders during SSR
// (avoids the flash-of-visible-content before JS mounts).
//
// Usage:
//   <div v-reveal class="reveal">...</div>
//   <div v-reveal="{ delay: 200 }" class="reveal">...</div>

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      const delay = (binding.value as { delay?: number } | undefined)?.delay ?? 0

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            if (delay > 0) {
              window.setTimeout(() => entry.target.classList.add('revealed'), delay)
            } else {
              entry.target.classList.add('revealed')
            }
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
      )

      observer.observe(el)
    },
    // SSR-safe: Vue's renderer calls `getSSRProps` to translate a directive
    // into HTML attributes for the initial markup. We render nothing — the
    // `class="reveal"` on the element already provides the hidden state, and
    // the client-side `mounted` hook attaches the observer after hydration.
    getSSRProps() {
      return {}
    },
  })
})
