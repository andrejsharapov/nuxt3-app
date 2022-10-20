<script lang="ts" setup>
import { mdiGithub, mdiTwitter } from "@mdi/js";

const title = "Nuxt 3 + Tailwind 3";
const desc = "Pug + Sass/SCSS";
const github = mdiGithub;
const twitter = mdiTwitter;

// definePageMeta({
//   layout: "home",
// });
</script>

<template lang="pug">
.page-index.py-6
  .w-full.mx-auto.flex.items-center.justify-center
    global-color-mode-picker

  .text-center(class="lg:mt-20 lg:px-8 xl:mt-28")
    hello-world.py-4.text-4xl.tracking-tight.font-extrabold(
      :msg="title",
      class="sm:text-5xl md:text-6xl"
    )
    p.mt-3.text-center.font-bold(class="sm:mt-5 sm:text-lg md:mt-5 md:text-3xl") {{ desc }}

  .absolute.bottom-16.left-8.flex
    a.mx-2(
      class="hover:text-gray-500",
      target="_blank",
      rel="noopener noreferrer",
      href="https://github.com/andrejsharapov/nuxt3-app",
      title="nuxt3-app"
    )
      icon(:icon="github")
    a.mx-2(
      class="hover:text-gray-500",
      target="_blank",
      rel="noopener noreferrer",
      href="https://twitter.com/andrejsharapov/status/1494724339023106050",
      title="twitter"
    )
      icon(:icon="twitter")
</template>

<style lang="scss" scoped>
.page-index {
  p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
  }
}
</style>
