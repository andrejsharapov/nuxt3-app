<template lang="pug">
svg(viewBox="0 0 24 24", :width="width", :height="height")
  path(:d="icon", fill="currentColor")
</template>

<script lang="ts">
export default defineComponent({
  props: {
    icon: null,
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
