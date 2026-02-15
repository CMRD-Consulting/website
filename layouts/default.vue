<template>
  <div class="relative min-h-dvh w-full flex flex-col">
    <!-- Subtle top border accent -->
    <div class="h-px w-full bg-gradient-to-r from-transparent via-carbon-border to-transparent" />

    <!-- Main content area -->
    <div class="flex-1 flex flex-col justify-center items-center md:items-start px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <div class="max-w-2xl flex flex-col items-center md:items-start">
        <!-- Logo -->
        <div class="opacity-0 animate-fade-in mb-12">
          <CmrdLogo
            class="h-24 md:h-28 lg:h-36 w-auto"
            aria-label="CMRD Consulting"
            role="img"
          />
        </div>

        <!-- Contact -->
        <div class="opacity-0 animate-fade-in-delay-2">
          <a
            href="mailto:info@cmrd.dev?subject=Hello"
            target="_top"
            class="relative inline-flex items-center font-mono text-sm text-carbon-text-secondary transition-colors duration-200 hover:text-carbon-text-primary group"
          >
            <span>info@cmrd.dev</span>
            <svg
              class="absolute -right-5 w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>

        <!-- Page slot -->
        <div class="mt-12">
          <nuxt-page />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="px-6 md:px-16 lg:px-24 py-8 border-t border-carbon-border-subtle">
      <div class="flex items-center justify-between">
        <span class="font-mono text-xs text-carbon-text-tertiary">
          &copy; {{ year }} CMRD Consulting LLC
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup>
defineOgImageComponent('Frame');

const year = new Date().getFullYear();
</script>
