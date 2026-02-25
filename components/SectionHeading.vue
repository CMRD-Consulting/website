<template>
  <div class="mb-12 md:mb-16" :class="centered ? 'text-center' : ''">
    <h2
      class="text-3xl font-medium tracking-tight text-carbon-text-primary md:text-4xl lg:text-5xl"
      :class="centered ? 'mx-auto' : ''"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-4 max-w-2xl text-lg text-carbon-text-secondary"
      :class="centered ? 'mx-auto' : ''"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  centered: {
    type: Boolean,
    default: false,
  },
});
</script>
