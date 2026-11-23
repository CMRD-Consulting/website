<template>
  <SectionContainer id="edb" narrow>
    <div class="mx-auto max-w-2xl">
      <p
        v-reveal
        class="reveal mb-5 text-center font-mono text-xs uppercase tracking-[0.2em] text-carbon-text-tertiary"
      >
        The next chapter
      </p>
      <SectionHeading
        title="Our team is joining EDB."
        subtitle="The people who made CMRD are joining EDB together, as one team, to keep working on AI governance."
        centered
      />

      <div v-reveal class="reveal space-y-6 text-lg leading-relaxed text-carbon-text-secondary">
        <p>
          It is a natural next step. We have been working with EDB on AI
          governance, alongside EDB's own engineers, so we already know the
          people and the work. We will keep doing work we are proud of, with
          colleagues we respect.
        </p>
        <p>
          That includes CMRD's founders, Chris Mitchell and Rick Dotchin. We
          are going as one team.
        </p>
        <p>
          We could not have asked for a better home.
        </p>
      </div>

      <blockquote
        v-reveal="{ delay: 100 }"
        class="reveal mt-12 border-l border-carbon-border pl-6 md:pl-10"
      >
        <p class="text-xl leading-relaxed text-carbon-text-primary md:text-2xl">
          &ldquo;Joining EDB changes where these experts sit, not what they work on.&rdquo;
        </p>
        <footer class="mt-4 font-mono text-xs uppercase tracking-wide text-carbon-text-tertiary">
          From EDB's announcement
        </footer>
      </blockquote>

      <!-- Press clipping -->
      <a
        v-reveal="{ delay: 180 }"
        :href="article.url"
        target="_blank"
        rel="noopener"
        class="reveal group mt-12 block rounded-lg border border-carbon-border bg-carbon-surface p-6 transition-colors duration-200 hover:border-carbon-text-tertiary md:p-8"
      >
        <span class="font-mono text-xs uppercase tracking-wide text-carbon-text-tertiary">
          {{ article.source }} &middot; {{ article.date }}
        </span>
        <p class="mt-3 text-lg font-medium leading-snug text-carbon-text-primary md:text-xl">
          {{ article.title }}
        </p>
        <span class="mt-5 inline-block font-mono text-xs text-carbon-text-link group-hover:underline">
          Read the announcement &nearr;
        </span>
      </a>
    </div>
  </SectionContainer>
</template>

<script setup>
const article = {
  source: "PR Newswire",
  date: "November 12, 2026",
  title: "EDB Brings Proven Agentic and Governance Engineering Talent In-House for Its Sovereign AI Data System",
  url: "https://www.prnewswire.com/news-releases/edb-brings-proven-agentic-and-governance-engineering-talent-in-house-for-its-sovereign-ai-data-system-302938289.html",
};
</script>
