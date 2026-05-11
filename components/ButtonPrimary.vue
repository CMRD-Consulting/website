<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="['btn-primary', $attrs.class]"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="['btn-primary', $attrs.class]"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="['btn-primary', $attrs.class]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  href: { type: String, default: '' },
  to: { type: String, default: '' },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
});
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center gap-2 rounded border border-carbon-border bg-transparent px-6 py-3 font-mono text-sm text-carbon-text-primary transition-colors duration-200;
}

.btn-primary:not(:disabled):hover {
  @apply border-carbon-text-tertiary bg-carbon-surface;
}

.btn-primary:disabled {
  @apply cursor-not-allowed opacity-50;
}
</style>
