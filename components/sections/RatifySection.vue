<template>
  <SectionContainer id="ratify">
    <div class="relative overflow-hidden rounded-lg border border-carbon-border bg-carbon-surface">
      <!-- Ambient glow, echoes the hero -->
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(166,200,255,0.07),transparent)]"
        aria-hidden="true"
      />

      <div class="relative grid gap-12 p-8 md:p-12 lg:grid-cols-5 lg:gap-16 lg:p-16">
        <div v-reveal class="reveal flex flex-col justify-center lg:col-span-2">
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-carbon-text-tertiary">
            A CMRD product
          </p>
          <h2 class="mt-5 text-3xl font-medium tracking-tight text-carbon-text-primary md:text-4xl lg:text-5xl">
            Ratify lives on.
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-carbon-text-secondary">
            Ratify is the product we built for ourselves: a keyboard-driven
            macOS review inbox for engineers who review a lot of code. The queue
            is always loaded, the top pull request is already selected, and every
            review action is a single keystroke.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-carbon-text-secondary">
            Ratify stays with CMRD, and we would love for you to try it.
          </p>
          <div class="mt-8">
            <ButtonPrimary href="https://ratify.cmrd.dev" target="_blank" rel="noopener">
              Visit ratify.cmrd.dev &nearr;
            </ButtonPrimary>
          </div>
        </div>

        <a
          v-reveal="{ delay: 120 }"
          href="https://ratify.cmrd.dev"
          target="_blank"
          rel="noopener"
          aria-label="Open Ratify"
          class="reveal group block self-center lg:col-span-3"
        >
          <div
            class="overflow-hidden rounded-md border border-carbon-border bg-carbon-bg transition-colors duration-300 group-hover:border-carbon-text-tertiary"
          >
            <img
              src="https://ratify.cmrd.dev/shots/inbox.webp"
              alt="Ratify review inbox showing a queue of pull requests with the top one selected"
              class="w-full"
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </div>
  </SectionContainer>
</template>
