<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center gap-2 font-mono text-sm text-carbon-text-link transition-colors duration-200 hover:text-carbon-text-link-hover"
    :class="$attrs.class"
  >
    <slot />
    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  </NuxtLink>
  <a
    v-else
    :href="href"
    class="inline-flex items-center gap-2 font-mono text-sm text-carbon-text-link transition-colors duration-200 hover:text-carbon-text-link-hover"
    :class="$attrs.class"
  >
    <slot />
    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
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
