<template>
  <SectionContainer id="contact">
    <div class="mx-auto max-w-2xl">
      <SectionHeading
        title="Ready for better software?"
        subtitle="Tell us about your project. We're selective—but if this resonates, we'd like to talk."
        centered
      />
      <form
        class="space-y-6"
        @submit.prevent="handleSubmit"
      >
        <div class="grid gap-6 sm:grid-cols-2">
          <FormInput
            name="name"
            label="Name"
            placeholder="Your name"
            required
          />
          <FormInput
            name="company"
            label="Company"
            placeholder="Company name"
          />
        </div>
        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="you@company.com"
          required
        />
        <FormTextarea
          name="project"
          label="Project summary"
          placeholder="What are you building? What's the timeline? Any constraints?"
          :rows="5"
          required
        />
        <div class="grid gap-6 sm:grid-cols-2">
          <FormInput
            name="budget"
            label="Budget range (optional)"
            placeholder="e.g. $50K–$100K"
          />
          <FormInput
            name="timeline"
            label="Timeline (optional)"
            placeholder="e.g. Q2 2025"
          />
        </div>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ButtonPrimary type="submit">
            Send message
          </ButtonPrimary>
          <p class="font-mono text-xs text-carbon-text-tertiary">
            Or email directly: <a href="mailto:info@cmrd.dev" class="text-carbon-text-link hover:text-carbon-text-link-hover">info@cmrd.dev</a>
          </p>
        </div>
      </form>
      <p class="mt-8 text-center font-mono text-sm text-carbon-text-tertiary">
        We're selective with projects — but if this resonates, we'd like to talk.
      </p>
    </div>
  </SectionContainer>
</template>

<script setup>
function handleSubmit(e) {
  const form = e.target;
  const data = new FormData(form);
  const params = new URLSearchParams();
  data.forEach((v, k) => params.append(k, v));
  // For now: mailto fallback. Replace with Formspree/Netlify/etc. when ready.
  window.location.href = `mailto:info@cmrd.dev?subject=Project inquiry&body=${encodeURIComponent([...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n'))}`;
}
</script>
