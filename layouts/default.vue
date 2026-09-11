<template>
  <div class="relative min-h-dvh w-full flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b border-carbon-border-subtle bg-carbon-bg/95 backdrop-blur-sm">
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-12 lg:px-24">
        <NuxtLink to="/" class="flex items-center" aria-label="CMRD Consulting">
          <CmrdLogo class="h-10 w-auto md:h-12" aria-hidden="true" />
        </NuxtLink>

        <!-- Desktop nav -->
        <nav aria-label="Primary" class="hidden items-center gap-10 md:flex">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="font-mono text-sm transition-colors duration-200 hover:text-carbon-text-primary"
            :class="active === link.href ? 'text-carbon-text-primary' : 'text-carbon-text-secondary'"
            :aria-current="active === link.href ? 'location' : undefined"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="border border-carbon-border px-4 py-2 font-mono text-sm text-carbon-text-primary transition-colors duration-200 hover:border-carbon-text-tertiary hover:bg-carbon-surface"
          >
            Contact
          </a>
        </nav>

        <!-- Mobile menu toggle -->
        <button
          type="button"
          class="-mr-2 p-2 text-carbon-text-secondary transition-colors duration-200 hover:text-carbon-text-primary md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path v-if="menuOpen" stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
            <path v-else stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile nav -->
      <nav
        v-show="menuOpen"
        id="mobile-nav"
        aria-label="Primary"
        class="border-t border-carbon-border-subtle px-6 py-4 md:hidden"
      >
        <a
          v-for="link in [...links, { href: '#contact', label: 'Contact' }]"
          :key="link.href"
          :href="link.href"
          class="block py-3 font-mono text-sm transition-colors duration-200 hover:text-carbon-text-primary"
          :class="active === link.href ? 'text-carbon-text-primary' : 'text-carbon-text-secondary'"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </header>

    <!-- Page content -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="border-t border-carbon-border-subtle px-6 py-8 md:px-12 lg:px-24">
      <div class="mx-auto flex max-w-7xl items-center justify-between">
        <span class="font-mono text-xs text-carbon-text-tertiary">
          &copy; {{ year }} CMRD Consulting LLC
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();

const links = [
  { href: '#philosophy', label: 'Approach' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#team', label: 'Team' },
];

const menuOpen = ref(false);
const active = ref('');

let observer;

function onKeydown(e) {
  if (e.key === 'Escape') menuOpen.value = false;
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);

  // Highlight the nav link for whichever section occupies the middle band of the viewport.
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = `#${entry.target.id}`;
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  );
  for (const { href } of [...links, { href: '#contact' }]) {
    const el = document.querySelector(href);
    if (el) observer.observe(el);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
  observer?.disconnect();
});
</script>
