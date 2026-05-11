<template>
  <SectionContainer id="contact">
    <div class="mx-auto max-w-2xl">
      <SectionHeading
        title="Ready for better software?"
        subtitle="Tell us about your project. We're selective—but if this resonates, we'd like to talk."
        centered
      />
      <form
        v-if="!isSuccess"
        v-reveal
        class="reveal space-y-6"
        @submit.prevent="handleSubmit"
      >
        <!-- Web3Forms required fields. The access key is a PUBLIC token — safe in client code. -->
        <input type="hidden" name="access_key" :value="accessKey" />
        <input type="hidden" name="subject" value="Project inquiry — cmrd.dev" />
        <input type="hidden" name="from_name" value="cmrd.dev contact form" />
        <!-- Honeypot. Bots fill arbitrary fields; humans never see this one. -->
        <input
          type="checkbox"
          name="botcheck"
          tabindex="-1"
          autocomplete="off"
          class="hidden"
          aria-hidden="true"
        />

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
          <ButtonPrimary type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending…' : 'Send message' }}
          </ButtonPrimary>
          <p class="font-mono text-xs text-carbon-text-tertiary">
            Or email directly: <a href="mailto:info@cmrd.dev" class="text-carbon-text-link hover:text-carbon-text-link-hover">info@cmrd.dev</a>
          </p>
        </div>
        <p
          v-if="errorMessage"
          role="alert"
          class="rounded border border-red-500/30 bg-red-500/5 p-3 font-mono text-sm text-red-300"
        >
          {{ errorMessage }}
        </p>
      </form>

      <div
        v-else
        v-reveal
        class="reveal rounded-lg border border-carbon-border bg-carbon-surface p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <p class="text-lg text-carbon-text-primary">
          Thanks — message received.
        </p>
        <p class="mt-2 text-sm text-carbon-text-secondary">
          We'll review and get back to you within a few business days.
        </p>
        <button
          type="button"
          class="mt-6 font-mono text-xs text-carbon-text-link transition-colors hover:text-carbon-text-link-hover"
          @click="resetForm"
        >
          Send another →
        </button>
      </div>

      <p
        v-if="!isSuccess"
        class="mt-8 text-center font-mono text-sm text-carbon-text-tertiary"
      >
        We're selective with projects — but if this resonates, we'd like to talk.
      </p>
    </div>
  </SectionContainer>
</template>

<script setup>
import { ref } from 'vue';

// Web3Forms access key. This is a PUBLIC token; safe to commit. Rotate
// from the Web3Forms dashboard if it's ever abused or you switch accounts.
const accessKey = '08aa35ad-16ee-472f-9b20-323cf5f229bf';

const isSubmitting = ref(false);
const isSuccess = ref(false);
const errorMessage = ref('');

async function handleSubmit(event) {
  const form = event.target;

  isSubmitting.value = true;
  errorMessage.value = '';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form),
    });
    const data = await response.json();

    if (response.ok && data.success) {
      isSuccess.value = true;
      form.reset();
    } else {
      errorMessage.value = data.message || 'Something went wrong. Please try again or email directly.';
    }
  } catch {
    errorMessage.value = 'Network error. Please try again or email directly.';
  } finally {
    isSubmitting.value = false;
  }
}

function resetForm() {
  isSuccess.value = false;
  errorMessage.value = '';
}
</script>
