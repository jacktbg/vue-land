<script setup lang="ts">
  import Counter from "./components/Counter.vue"
</script>
<template>
  <div :class="$style.container">
    <Counter />
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
</style>
