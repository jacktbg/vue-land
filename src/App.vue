<script setup lang="ts">
  import { ref } from "vue"
  import Dashboard from "./components/two/Dashboard.vue"
  import Home from "./components/one/Home.vue"
  import Sidebar from "./components/sidebar/Sidebar.vue"

  const active = ref<string>("home")

  const handleActive = (option: string) => {
    active.value = option
  }
</script>
<template>
  <div :class="s.container">
    <Sidebar :active="active" @active="handleActive" />
    <Home v-if="active === 'home'" />
    <Dashboard v-else-if="active === 'dashboard'" />
  </div>
</template>

<style module="s">
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
  }
</style>
