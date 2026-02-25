<template>
  <SectionContainer id="team">
    <SectionHeading
      title="Fewer people. Far higher caliber."
      subtitle="The founder mentored our top engineers. They trained the next generation. Same DNA—same vigor, quality, and obsession with clean code."
      centered
    />
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(member, i) in team"
        :key="i"
        class="flex flex-col"
      >
        <!-- Placeholder avatar - replace with actual image -->
        <div class="aspect-square w-32 overflow-hidden rounded-lg border border-carbon-border bg-carbon-surface">
          <div class="flex h-full w-full items-center justify-center bg-carbon-surface-hover">
            <span class="font-mono text-2xl text-carbon-text-tertiary">{{ member.initials }}</span>
          </div>
        </div>
        <h3 class="mt-4 font-medium text-carbon-text-primary">
          {{ member.name }}
        </h3>
        <p class="mt-1 text-sm text-carbon-text-secondary">
          {{ member.bio }}
        </p>
        <p class="mt-2 font-mono text-xs text-carbon-text-tertiary">
          {{ member.credential }}
        </p>
      </div>
    </div>
    <p class="mx-auto mt-12 max-w-2xl text-center font-mono text-sm text-carbon-text-tertiary">
      We don't scale by hiring more people. We scale by training people who code like us—one generation teaching the next.
    </p>
  </SectionContainer>
</template>

<script setup>
const team = [
  {
    name: 'Founder',
    initials: '—',
    bio: 'Trained and mentored our top engineers. Built the standards we all follow—clean architecture, obsessive quality, zero tolerance for shortcuts.',
    credential: 'Trained the team. Sets the bar.',
  },
  {
    name: 'Lead Engineer',
    initials: '—',
    bio: 'Mentored by the founder. In turn, trained the engineers we hire. Same code style, same rigor, same obsession with getting it right.',
    credential: 'Force multiplication through teaching',
  },
  {
    name: 'Lead Engineer',
    initials: '—',
    bio: 'Mentored by the founder. In turn, trained the engineers we hire. Same code style, same rigor, same obsession with getting it right.',
    credential: 'Force multiplication through teaching',
  },
];
</script>
