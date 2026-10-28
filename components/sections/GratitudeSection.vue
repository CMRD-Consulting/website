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

      <article
        v-for="(letter, i) in letters"
        :key="letter.to"
        v-reveal="{ delay: 100 }"
        class="reveal mt-14 border-l border-carbon-border pl-6 md:mt-16 md:pl-10"
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
        <p class="mt-4 font-mono text-sm leading-loose text-carbon-text-secondary">
          Christopher Mitchell<br />
          Richard Dotchin<br />
          Maciej Chmurski
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
      "You let us in. Into your roadmaps, your codebases, your late-night threads, and the parts of your business that were hard to talk about. You trusted a handful of people you had only just met to build the things your companies depended on. We never once took that lightly.",
      "Every rate confirmation parsed, every cluster provisioned, every invoice generated, every receipt matched. Those were never just features to us. They were promises we had made to you, kept one commit at a time.",
      "Thank you for the trust. Thank you for the patience when we got it wrong, and for the partnership that made getting it right feel like the only acceptable outcome. We are better engineers, and better people, for having worked alongside you.",
    ],
  },
  {
    to: "To our team",
    body: [
      "You are the reason any of this worked. We set out to prove that fewer people of far higher caliber could outbuild teams many times our size. You proved it quietly, on every engagement, without ever being asked to.",
      "You took the standards we handed you, made them your own, and then raised them. You cared about clean code when nobody was watching, and about each other when it mattered most. That is not something a company can hire for. It is something a family grows into.",
      "Whatever comes next, for CMRD and for each of you, you carry the DNA. Thank you for building this with us. It has been the privilege of our careers.",
    ],
  },
];
</script>
