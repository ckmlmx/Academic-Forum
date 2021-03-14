<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "body",
};
</script>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  min-height: 1000px;
  background-color: #eaecf0;
}
</style>