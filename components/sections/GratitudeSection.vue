<template>
  <SectionContainer id="letter" narrow>
    <div class="mx-auto max-w-2xl">
      <!-- Dateline -->
      <p
        v-reveal
        class="reveal font-mono text-xs uppercase tracking-[0.2em] text-carbon-text-tertiary"
      >
        A note from the partners
      </p>

      <!-- Greeting -->
      <p
        v-reveal="{ delay: 50 }"
        class="reveal mt-10 pl-6 text-lg text-carbon-text-primary md:pl-10"
      >
        Hello, friends.
      </p>

      <article
        v-for="(letter, i) in letters"
        :key="letter.to"
        v-reveal="{ delay: 100 }"
        class="reveal border-l border-carbon-border pl-6 md:pl-10"
        :class="i === 0 ? 'mt-8 md:mt-10' : 'mt-14 md:mt-16'"
      >
        <h2 class="text-2xl font-medium tracking-tight text-carbon-text-primary md:text-3xl">
          {{ letter.to }}
        </h2>
        <p
          v-for="(paragraph, j) in letter.body"
          :key="j"
          class="mt-6 text-lg leading-relaxed text-carbon-text-secondary"
        >
          {{ paragraph }}
        </p>
      </article>

      <!-- Signature -->
      <div v-reveal="{ delay: 150 }" class="reveal mt-16 pl-6 md:pl-10">
        <p class="text-lg text-carbon-text-primary">With gratitude,</p>
        <p class="mt-4 font-mono text-sm text-carbon-text-secondary">
          Chris Mitchell, Managing Partner
        </p>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup>
const letters = [
  {
    to: "To our clients",
    body: [
      "You brought us into your companies and trusted us with the software your businesses run on. We never took that lightly.",
      "You gave us meaningful work and the room to do it properly. You treated us as partners, and the work was better for it.",
      "Thank you for your trust, your candor, and your partnership. We are better engineers, and better people, for having worked alongside you.",
    ],
  },
  {
    to: "To our team",
    body: [
      "You are the reason any of this worked. We set out to show what a small, senior team can do when everyone holds the same high standard. You showed it on every engagement.",
      "You took the standard we set and raised it. You cared about the quality of your work when no one was checking, and you looked out for each other along the way.",
      "Now you take that standard to EDB, together. We are proud of what you built and grateful we got to build it with you. It has been the privilege of our careers.",
    ],
  },
];
</script>
