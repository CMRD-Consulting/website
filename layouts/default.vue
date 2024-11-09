<template>
  <div class="p-10 space-y-8 h-dvh flex flex-col">
    <div
      class="flex items-center justify-center md:justify-start flex-col md:flex-row md:space-x-4 flex-none animate-fade animate-once animate-ease-in"
    >
      <div
        class="rounded overflow-hidden h-16 w-16 mb-4 md:mb-0 bg-white text-zinc-900 flex flex-col items-center justify-center text-2xl leading-none"
      >
        <div>CM</div>
        <div>RD</div>
        <!-- <img src="~/assets/avatar.jpeg" alt="" /> -->
      </div>
      <div
        class="flex flex-col items-center md:items-start space-y-2 md:space-y-0"
      >
        <div class="font-semibold text-xl"
          >CMRD Consulting LLC</div>
        <a href="mailto:info@cmrd.dev?subject=Hello" target="_top" class="hover:underline">info@cmrd.dev</a>
      </div>
    </div>
    <div class="flex-1">
      <nuxt-page />
    </div>
    <div class="flex justify-center text-xs font-mono animate-fade animate-once animate-ease-in">
      &copy; {{ year }} CMRD Consulting LLC
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
