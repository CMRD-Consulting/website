<template>
  <section class="relative flex min-h-[80vh] flex-col justify-center px-6 md:px-12 lg:px-24">
    <!-- Subtle gradient background -->
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-carbon-bg via-carbon-bg to-transparent"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(166,200,255,0.08),transparent)]"
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
      <h1
        class="opacity-0 animate-fade-in-up text-4xl font-medium tracking-tight text-carbon-text-primary md:text-5xl lg:text-6xl"
      >
        Boutique software engineering. Curated talent. Exceptional outcomes.
      </h1>
      <p
        class="mt-6 opacity-0 animate-fade-in-delay text-lg leading-relaxed text-carbon-text-secondary md:text-xl"
      >
        We don't hire engineers when you need them. We have a curated team of experts—fully trained, vetted, and of the highest caliber—for founders and executives who refuse average software.
      </p>
      <div class="mt-10 opacity-0 animate-fade-in-delay-2">
        <ButtonPrimary href="#contact">
          Start a Conversation
        </ButtonPrimary>
      </div>
    </div>
  </section>
</template>
