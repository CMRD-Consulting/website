<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center gap-2 rounded border border-carbon-border bg-transparent px-6 py-3 font-mono text-sm text-carbon-text-primary transition-colors duration-200 hover:border-carbon-text-tertiary hover:bg-carbon-surface"
    :class="$attrs.class"
  >
    <slot />
  </NuxtLink>
  <a
    v-else
    :href="href"
    class="inline-flex items-center gap-2 rounded border border-carbon-border bg-transparent px-6 py-3 font-mono text-sm text-carbon-text-primary transition-colors duration-200 hover:border-carbon-text-tertiary hover:bg-carbon-surface"
    :class="$attrs.class"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
});
</script>
