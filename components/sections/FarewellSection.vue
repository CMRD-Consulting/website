<template>
  <SectionContainer id="farewell" narrow>
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

      <div v-reveal="{ delay: 120 }" class="reveal mt-12 flex flex-col items-center gap-6">
        <ButtonPrimary href="mailto:info@cmrd.dev">
          Say hello
        </ButtonPrimary>
        <p class="font-mono text-xs text-carbon-text-tertiary">
          <a href="mailto:info@cmrd.dev" class="text-carbon-text-link hover:text-carbon-text-link-hover">info@cmrd.dev</a>
          &nbsp;&middot;&nbsp; We would like to keep in touch.
        </p>
      </div>
    </div>
  </SectionContainer>
</template>
