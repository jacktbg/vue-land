<script setup lang="ts">
  import Home from "./components/Home.vue"
  import Sidebar from "./components/Sidebar.vue"
</script>
<template>
  <div :class="s.container">
    <Sidebar />
    <Home />
  </div>
</template>

<style module="s">
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
  }
</style>
