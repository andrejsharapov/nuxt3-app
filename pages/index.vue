<template lang="pug">
.page-index.h-screen.grid.place-items-center
  global-color-mode-picker
  hello-world.mb-4.text-center(:msg="title")
  p {{ desc }}
  .flex
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

<script lang="ts" setup>
import { mdiGithub, mdiTwitter } from "@mdi/js";

const title = "Nuxt 3 + Tailwind 3";
const desc = "Pug + Sass/SCSS";
const github = mdiGithub;
const twitter = mdiTwitter;

definePageMeta({
  layout: "home",
});
</script>

<style lang="scss" scoped>
.page-index {
  p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
  }
}
</style>
