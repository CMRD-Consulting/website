<template>
  <div class="relative min-h-dvh w-full flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b border-carbon-border-subtle bg-carbon-bg/95 backdrop-blur-sm">
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-12 lg:px-24">
        <a href="https://cmrd.dev" class="flex items-center" aria-label="CMRD Consulting home">
          <CmrdLogo class="h-10 w-auto md:h-12" aria-hidden="true" />
        </a>
        <nav class="flex items-center gap-6 md:gap-8" aria-label="Primary">
          <a
            href="https://ratify.cmrd.dev"
            target="_blank"
            rel="noopener"
            class="-my-2.5 py-2.5 font-mono text-sm text-carbon-text-secondary transition-colors duration-200 hover:text-carbon-text-primary"
          >
            Ratify &nearr;
          </a>
          <a
            href="#contact"
            class="-my-2.5 py-2.5 font-mono text-sm text-carbon-text-secondary transition-colors duration-200 hover:text-carbon-text-primary"
          >
            Stay in touch
          </a>
        </nav>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="border-t border-carbon-border-subtle px-6 py-8 md:px-12 lg:px-24">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span class="font-mono text-xs text-carbon-text-tertiary">
          &copy; {{ year }} CMRD Consulting LLC &middot; Thank you.
        </span>
        <a
          href="https://ratify.cmrd.dev"
          target="_blank"
          rel="noopener"
          class="-my-3 py-3 font-mono text-xs text-carbon-text-tertiary transition-colors duration-200 hover:text-carbon-text-secondary"
        >
          Ratify is a CMRD product &nearr;
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
