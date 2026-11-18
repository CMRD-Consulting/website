<script setup>
const parallaxOffset = useParallax(0.35)
</script>

<template>
  <section class="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
    <!-- Subtle gradient background -->
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-carbon-bg via-carbon-bg to-transparent"
      aria-hidden="true"
    />
    <div
      :style="{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }"
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(166,200,255,0.08),transparent)] will-change-transform"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-3xl text-center">
      <div class="mb-12 flex justify-center opacity-0 animate-fade-in">
        <CmrdLogo
          neon
          class="h-24 w-auto md:h-28 lg:h-36"
          aria-label="CMRD"
          role="img"
        />
      </div>

      <p class="opacity-0 animate-fade-in font-mono text-xs uppercase tracking-[0.2em] text-carbon-text-tertiary">
        CMRD Consulting &middot; Est. 2024
      </p>

      <h1
        class="mt-6 opacity-0 animate-fade-in-up text-5xl font-light tracking-tight text-carbon-text-primary md:text-6xl lg:text-7xl"
      >
        Thank you.
      </h1>

      <p
        class="mx-auto mt-8 max-w-2xl opacity-0 animate-fade-in-delay text-lg leading-relaxed text-carbon-text-secondary md:text-xl"
      >
        Our team is
        <a href="#edb" class="text-carbon-text-link transition-colors duration-200 hover:text-carbon-text-link-hover">joining EDB</a>.
        Before this chapter closes, we want to say what matters most: thank
        you. To the clients who trusted us with their most important work, and
        to the engineers who delivered it.
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-6 opacity-0 animate-fade-in-delay-2 sm:flex-row">
        <ButtonPrimary href="#letter">
          Read our note
        </ButtonPrimary>
        <ButtonSecondary href="#ratify">
          Ratify lives on
        </ButtonSecondary>
      </div>
    </div>
  </section>
</template>
