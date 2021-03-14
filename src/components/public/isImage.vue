<template>
  <img :src="url" :style="{ width: wid, height: high }" />
</template>

<script>
export default {
  name: "isImage",
  props: ["url", "wid", "high"],
};
</script>

<style scoped>
</style>