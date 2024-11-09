<template>
  <div class="p-10 space-y-8 h-dvh flex flex-col">
    <div
      class="flex items-center justify-center md:justify-start flex-col md:flex-row md:space-x-4 flex-none"
    >
      <div
        class="rounded overflow-hidden md:w-20 md:h-20 h-24 w-24 mb-4 md:mb-0 bg-white text-zinc-900 flex flex-col items-center justify-center text-2xl"
      >
        <div>CM</div>
        <div>RD</div>
        <!-- <img src="~/assets/avatar.jpeg" alt="" /> -->
      </div>
      <div
        class="flex flex-col items-center md:items-start space-y-2 md:space-y-0"
      >
        <div class="font-semibold text-2xl md:text-xl"
          >CMRD Consulting LLC</div>
        <a href="mailto:info@cmrd.dev?subject=Hello" target="_top" class="hover:underline">info@cmrd.dev</a>
        <div v-if="false"
          class="text-xs md:space-x-2 items-center md:items-start flex flex-col md:flex-row"
        >
          <div
            class="md:space-x-2 font-semibold whitespace-no-wrap justify-center md:justify-start flex"
          >
            <span>Packages</span>
            <span class="invisible md:visible">/</span>
          </div>
          <div>
            <a
              target="_blank"
              href="https://crishellco.github.io/vue-call-store/"
              >@crishellco/vue-call-store</a
            >
          </div>
          <div>
            <a target="_blank" href="https://crishellco.github.io/vue-beam/"
              >@crishellco/vue-beam</a
            >
          </div>
          <div>
            <a target="_blank" href="https://crishellco.github.io/vue-spruce/"
              >@crishellco/vue-spruce</a
            >
          </div>
          <div>
            <a target="_blank" href="https://vue-hubble.crishell.co/"
              >@crishellco/vue-hubble</a
            >
          </div>
          <div>
            <a target="_blank" href="https://crishellco.github.io/vue-coy/"
              >@crishellco/vue-coy</a
            >
          </div>
        </div>
        <div v-if="false"
          class="text-xs md:space-x-2  items-center md:items-start flex flex-col md:flex-row"
        >
          <div class="md:space-x-2 font-semibold whitespace-no-wrap">
            <span>Links</span>
            <span class="invisible md:visible">/</span>
          </div>
          <div>
            <a target="_blank" href="http://github.com/crishellco">GitHub</a>
          </div>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/crishellco/"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <nuxt-page />
    </div>
    <div class="flex justify-center text-xs">
      <div>&copy; {{ year }} CMRD Consulting LLC</div>
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
