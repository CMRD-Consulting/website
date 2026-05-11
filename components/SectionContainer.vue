<template>
  <section :id="id" class="py-24 md:py-28 lg:py-32">
    <div
      class="mx-auto max-w-7xl px-6 md:px-12 lg:px-24"
      :class="narrow ? 'max-w-4xl' : ''"
    >
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: '',
  },
  narrow: {
    type: Boolean,
    default: false,
  },
});
</script>
