<template>
  <SectionContainer id="contact" narrow>
    <div class="mx-auto max-w-2xl text-center">
      <SectionHeading
        title="Until next time."
        centered
      />
      <div v-reveal class="reveal space-y-6 text-lg leading-relaxed text-carbon-text-secondary">
        <p>
          What comes next for CMRD is an open question, and we are glad to
          leave it open. The name stays, and so does this site.
        </p>
        <p>
          If the day comes to build again, this is where you will hear about it
          first. Until then, thank you for everything.
        </p>
      </div>

      <div v-reveal="{ delay: 120 }" class="reveal mt-12">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-carbon-text-tertiary">
          Stay in touch
        </p>
        <p class="mt-3 font-mono text-sm">
          <a
            href="mailto:info@cmrd.dev"
            class="-my-2.5 inline-block py-2.5 text-carbon-text-link transition-colors duration-200 hover:text-carbon-text-link-hover"
          >info@cmrd.dev</a>
        </p>
      </div>
    </div>
  </SectionContainer>
</template>
