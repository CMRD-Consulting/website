<template>
  <SectionContainer id="process">
    <SectionHeading
      title="How we work"
      subtitle="A straightforward process. No agile theater."
      centered
    />
    <div class="mx-auto max-w-4xl">
      <!-- Desktop: horizontal timeline -->
      <div class="hidden md:block">
        <div class="relative flex justify-between">
          <div class="absolute left-0 right-0 top-5 h-px bg-carbon-border" aria-hidden="true" />
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="relative z-10 flex flex-1 flex-col items-center"
          >
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-carbon-border bg-carbon-surface font-mono text-sm text-carbon-text-secondary">
              {{ i + 1 }}
            </div>
            <div class="mt-4 max-w-[200px] text-center">
              <h3 class="font-medium text-carbon-text-primary">
                {{ step.title }}
              </h3>
              <p class="mt-1 font-mono text-xs text-carbon-text-secondary">
                {{ step.detail }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: vertical timeline -->
      <div class="space-y-0 md:hidden">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="flex gap-4"
        >
          <div class="flex flex-col items-center">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-carbon-border bg-carbon-surface font-mono text-sm text-carbon-text-secondary">
              {{ i + 1 }}
            </div>
            <div
              v-if="i < steps.length - 1"
              class="my-2 h-8 w-px flex-shrink-0 bg-carbon-border"
              aria-hidden="true"
            />
          </div>
          <div class="flex-1 pb-10">
            <h3 class="font-medium text-carbon-text-primary">
              {{ step.title }}
            </h3>
            <p class="mt-1 font-mono text-sm text-carbon-text-secondary">
              {{ step.detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup>
const steps = [
  { title: 'Deep discovery', detail: '1–2 weeks, paid. We learn your domain, constraints, and goals.' },
  { title: 'Architecture & team', detail: 'We design the system and assemble a small elite team.' },
  { title: 'Iterative delivery', detail: 'Real engineers ship. No PMs pretending. No theater.' },
  { title: 'Knowledge transfer', detail: 'Smooth hand-off—or a long-term partnership. Your choice.' },
];
</script>
