<template>
  <div class="text-center">
    <h3 class="text-5xl mb-4">{{ error.pageNotFound }}</h3>
    <p class="mb-4">{{ error.errorCaption }}</p>
    <div
      class="
        bg-red-500
        hover:bg-red-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        cursor-pointer
      "
      @click="$router.push('/')"
    >
      ← Go back
    </div>
  </div>
</template>

<script lang="ts" setup>
const error = {
  pageNotFound: "Page Not Found",
  errorCaption: "The page you are looking for wasn't found.",
};

definePageMeta({
  layout: "error",
});
</script>