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
        v-reveal="{ delay: i * 80 }"
        class="reveal flex flex-col overflow-hidden rounded-lg border border-carbon-border bg-carbon-surface transition-colors duration-200 hover:border-carbon-text-tertiary"
      >
        <img
          v-if="project.image"
          :src="project.image"
          :alt="`${project.industry} screenshot`"
          class="aspect-video w-full bg-gradient-to-br from-carbon-surface-hover to-carbon-border object-contain"
          loading="lazy"
        />
        <div
          v-else
          class="aspect-video bg-gradient-to-br from-carbon-surface-hover to-carbon-border"
        />
        <div class="flex flex-1 flex-col p-5">
          <span class="font-mono text-xs uppercase tracking-wide text-carbon-text-tertiary">
            {{ project.industry }}
          </span>
          <p class="mt-3 text-carbon-text-primary">
            {{ project.outcome }}
          </p>
          <p class="mt-3 text-sm leading-relaxed text-carbon-text-secondary">
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
    industry: "Freight logistics",
    outcome: "End-to-end platform for trucking carriers—onboarding, load tracking, driver assignment, settlement, factoring, and invoicing.",
    detail: "Web, mobile, and backend in one codebase. AI document extraction for rate confirmations, real-time dispatch, multi-tenant white-label support.",
    image: "/projects/carrier1.jpeg",
  },
  {
    industry: "Database infrastructure",
    outcome: "Two customer-facing tools for a database vendor: a multi-step ROI calculator that qualifies leads into their CRM, and a self-service portal that provisions bare-metal database clusters.",
    detail: "Provisioning workflow over WebSockets—generates install configs, orchestrates remote power and boot operations, streams install progress in real time.",
    image: "/projects/edb-beacon.gif",
  },
  {
    industry: "Consulting operations",
    outcome: "Operations platform for consulting firms—clients, projects, time, billing, invoicing, and a subcontractor hierarchy for cross-firm engagements.",
    detail: "Cached role-and-entitlement authorization, multi-tenant data isolation, calendar-based time entry with approval workflow, PDF invoice generation, polymorphic audit log.",
    image: "/projects/cove.jpeg",
  },
  {
    industry: "Social music",
    outcome: "iOS app for small groups to build a shared playlist together—paste a link from any music service and the playlist auto-mirrors to each member's personal library.",
    detail: "Cross-service track resolution, per-member mirror targets, real-time collaboration, push notifications, share-extension support.",
    image: "/projects/totem.jpeg",
  },
  {
    industry: "Documentation tooling",
    outcome: "Native desktop app that turns a screen recording into a step-by-step written tutorial—capture clicks, annotate frames, export wiki-ready markdown.",
    detail: "Auto-detects user actions during recording, runs local OCR for context, calls a vision model to draft per-step narration. No screenshots leave the machine.",
    image: "/projects/scribe.jpeg",
  },
  {
    industry: "Hospitality POS",
    outcome: "Mobile tip-entry app that photographs handwritten receipts, extracts the tip, and applies it to the matching transaction in the POS—replacing manual end-of-day reconciliation.",
    detail: "OCR-first extraction with arithmetic and language-model fallback. Matches receipts to transactions by time window, last-four digits, auth code, and amount with confidence scoring.",
    image: "/projects/tipsnap.jpeg",
  },
];
</script>
