<template>
  <div class="relative min-h-dvh w-full flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b border-carbon-border-subtle bg-carbon-bg/95 backdrop-blur-sm">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24">
        <NuxtLink to="/" class="flex items-center" aria-label="CMRD Consulting">
          <CmrdLogo class="h-10 w-auto md:h-12" aria-hidden="true" />
        </NuxtLink>
        <a
          href="#contact"
          class="font-mono text-sm text-carbon-text-secondary transition-colors duration-200 hover:text-carbon-text-primary"
        >
          Contact
        </a>
      </div>
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
</script>
