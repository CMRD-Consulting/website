<template>
  <div class="flex flex-col gap-2">
    <label
      v-if="label"
      :for="id"
      class="font-mono text-sm text-carbon-text-secondary"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      class="rounded border border-carbon-border bg-carbon-surface px-4 py-3 font-sans text-carbon-text-primary placeholder-carbon-text-tertiary transition-colors duration-200 focus:border-carbon-text-tertiary focus:outline-none focus:ring-1 focus:ring-carbon-border"
      :class="$attrs.class"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: '' },
  type: { type: String, default: 'text' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
});

const id = computed(() => `form-${props.name}`);
</script>
