<template lang="pug">
.page-index.h-screen.grid.place-items-center
  global-color-mode-picker
  hello-world.mb-4.text-center(:msg="title")
  p Added: {{ desc }}
</template>

<script lang="ts" setup>
const title = "Nuxt 3 + Tailwind 3";
const desc = "Pug + S?(C|a)SS";

definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped>
.page-index {
  p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
  }
}
</style>
