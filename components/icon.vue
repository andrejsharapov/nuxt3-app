<template lang="pug">
svg(
  viewBox="0 0 24 24",
  :width="width",
  :height="height",
  :class="{ 'mr-2': left, 'ml-2': right }"
)
  path(:d="icon", fill="currentColor")
</template>

<script lang="ts">
export default defineComponent({
  props: {
    icon: null,
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "24",
    },
    height: {
      type: String,
      default: "24",
    },
  },
});
</script>
