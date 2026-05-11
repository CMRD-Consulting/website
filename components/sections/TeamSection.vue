<template>
  <SectionContainer id="team">
    <SectionHeading
      title="Fewer people. Far higher caliber."
      subtitle="Meet the partners who set the standard. Every engineer we train shares the same DNA—same vigor, quality, and obsession with clean code."
      centered
    />
    <div
      class="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-8 md:grid-cols-3"
    >
      <a
        v-for="(member, i) in team"
        :key="i"
        :href="member.linkedin"
        target="_blank"
        rel="noopener"
        :aria-label="`View ${member.name}'s LinkedIn profile`"
        class="group flex max-w-xs flex-col items-center text-center"
      >
        <div
          class="aspect-square w-32 overflow-hidden rounded-lg border border-carbon-border bg-carbon-surface transition-colors duration-200 group-hover:border-carbon-text-tertiary"
        >
          <img
            v-if="member.image"
            :src="member.image"
            :alt="`Portrait of ${member.name}`"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-carbon-surface-hover"
          >
            <span class="font-mono text-2xl text-carbon-text-tertiary">{{
              member.initials
            }}</span>
          </div>
        </div>
        <h3
          class="mt-4 font-medium text-carbon-text-primary transition-colors duration-200 group-hover:text-carbon-text-link"
        >
          {{ member.name }}
        </h3>
        <p
          class="mt-1 font-mono text-xs uppercase tracking-wide text-carbon-text-tertiary"
        >
          {{ member.role }}
        </p>
        <p class="mt-3 text-justify text-sm leading-relaxed text-carbon-text-secondary hyphens-auto">
          {{ member.bio }}
        </p>
      </a>
    </div>
    <p
      class="mx-auto mt-12 max-w-2xl text-center font-mono text-sm text-carbon-text-tertiary"
    >
      We don't scale by hiring more people. We scale by training people who code
      like us—one generation teaching the next.
    </p>
  </SectionContainer>
</template>

<script setup>
const team = [
  {
    name: "Christopher Mitchell",
    initials: "CM",
    role: "Managing Partner",
    bio: "Two decades architecting mission-critical software—from startups to public companies. Scaled an engineering organization more than threefold by codifying standards, building shared platforms, and mentoring the next bench. That blueprint became CMRD.",
    linkedin: "https://www.linkedin.com/in/crishellco/",
    image: "/team/christopher-mitchell.jpg",
  },
  {
    name: "Richard Dotchin",
    initials: "RD",
    role: "Managing Partner",
    bio: "Frontend architect on platforms ranging from regulated government systems to enterprise-scale data infrastructure. Turns complex domain logic into interfaces engineers and operators both trust.",
    linkedin: "https://www.linkedin.com/in/richarddotchin/",
    image: "/team/richard-dotchin.jpg",
  },
  {
    name: "Maciej Chmurski",
    initials: "MC",
    role: "Managing Engineer",
    bio: "Fourteen years building software across European clients and globally distributed teams. Pairs deep technical execution with the mentoring instinct we look for in every engineer.",
    linkedin: "https://www.linkedin.com/in/maciej-chmurski/",
    image: "/team/maciej-chmurski.png",
  },
];
</script>
