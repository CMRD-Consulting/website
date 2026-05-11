<template>
  <div class="flex flex-col gap-2">
    <label
      v-if="label"
      :for="id"
      class="font-mono text-sm text-carbon-text-secondary"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :rows="rowsNumber"
      class="resize-none rounded border border-carbon-border bg-carbon-surface px-4 py-3 font-sans text-carbon-text-primary placeholder-carbon-text-tertiary transition-colors duration-200 focus:border-carbon-text-tertiary focus:outline-none focus:ring-1 focus:ring-carbon-border"
      :class="$attrs.class"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  rows: { type: [Number, String], default: 4 },
});

const id = computed(() => `form-${props.name}`);
const rowsNumber = computed(() => Number(props.rows) || 4);
</script>
