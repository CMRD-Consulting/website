<template>
  <div class="relative h-dvh w-dvw p-10 space-y-8 flex flex-col">
    <div
      class="flex items-center justify-center md:justify-start flex-col md:flex-row md:space-x-6 flex-none max-md:space-y-6">
      <div class="animate-fade animate-once animate-delay-200">
        <div class="relative h-28 w-28 rounded overflow-hidden">
          <div
            class="absolute rounded inset-0 bg-gradient-to-br from-fuchsia-700 via-indigo-300 to-cyan-800 animate-rotate-gradient"
            aria-hidden="true"></div>
          <div
            class="absolute inset-1 rounded flex flex-col items-center justify-center  bg-neutral-900">
            <div class="font-mono text-4xl leading-[1.8rem] gap-2  whitespace-normal tracking-normal flex flex-col">
              <div class="flex gap-2">
                <div>C</div>
                <div>M</div>
              </div>
              <div class="flex gap-2">
                <div>R</div>
                <div>D</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center md:items-start space-y-2 animate-fade animate-once animate-delay-[1000ms]">
        <div class="text-xl md:text-3xl small-caps">CMRD Consulting</div>
        <a href="mailto:info@cmrd.dev?subject=Hello" target="_top"
          class="transition-colors text-slate-400 hover:text-inherit">info@cmrd.dev</a>
      </div>
    </div>
    <div class="flex-1">
      <nuxt-page />
    </div>
    <div class="flex justify-center max-lg:text-xs animate-fade animate-once animate-delay-[1800ms]">
      <span class="opacity-75">
        &copy; {{ year }} CMRD Consulting LLC
      </span>
    </div>
  </div>
</template>

<script setup>

defineOgImageComponent('Frame');

const year = new Date().getFullYear();
</script>
