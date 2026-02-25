<template>
  <SectionContainer id="work">
    <SectionHeading
      title="Selected engagements"
      subtitle="A few representative projects. Quality over quantity."
      centered
    />
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="group relative overflow-hidden rounded-lg border border-carbon-border bg-carbon-surface transition-all duration-200 hover:border-carbon-border-subtle"
      >
        <!-- Placeholder thumbnail / gradient -->
        <div class="aspect-video bg-gradient-to-br from-carbon-surface-hover to-carbon-border" />
        <div class="p-5">
          <span class="font-mono text-xs text-carbon-text-tertiary">
            {{ project.industry }}
          </span>
          <p class="mt-2 text-carbon-text-primary">
            {{ project.outcome }}
          </p>
        </div>
        <!-- Hover overlay for more detail -->
        <div
          v-if="project.detail"
          class="absolute inset-0 flex items-center justify-center bg-carbon-bg/95 p-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          <p class="text-center text-sm text-carbon-text-secondary">
            {{ project.detail }}
          </p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup>
const projects = [
  {
    industry: 'Fintech platform',
    outcome: 'Built core payment infrastructure for a Series B startup. Launched on time, zero critical incidents.',
    detail: 'Full-stack architecture, real-time reconciliation, PCI-compliant design.',
  },
  {
    industry: 'AI / Healthcare',
    outcome: 'Designed and delivered an ML-powered diagnostic tool. FDA submission path defined.',
    detail: 'Python, TensorFlow, HIPAA-aligned data pipeline, clinical validation support.',
  },
  {
    industry: 'Enterprise SaaS',
    outcome: 'Rescued a stalled migration. Delivered 3 major releases in 6 months.',
    detail: 'Legacy monolith to microservices, team augmentation, knowledge transfer.',
  },
  {
    industry: 'Developer tools',
    outcome: 'Shipped a developer platform used by 50K+ engineers. Sub-100ms p99 latency.',
    detail: 'Go, distributed systems, observability, API design.',
  },
  {
    industry: 'Marketplace',
    outcome: 'Scaled a two-sided marketplace to $10M+ GMV. Fraud detection and trust systems.',
    detail: 'React, Node, PostgreSQL, Stripe Connect, identity verification.',
  },
];
</script>
