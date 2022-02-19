<template>
  <h1 class="text-5xl font-bold">
    {{ msg }}
  </h1>
</template>

<script lang="ts" setup>
defineProps<{ msg: string }>();
</script>