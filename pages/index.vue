<template>
  <div class="h-screen grid place-items-center">
    <HelloWorld :msg="title" class="mb-4" />
  </div>
</template>

<script lang="ts" setup>
const title = "Nuxt 3 + Tailwind 3";

definePageMeta({
  layout: "default",
});
</script>