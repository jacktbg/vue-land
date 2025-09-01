<script setup lang="ts">
  import Header from "./Header.vue"
</script>

<template>
  <div :class="s.container">
    <h1 :class="s.title">Todo App</h1>
    <Header />
  </div>
</template>

<style module="s">
  .container {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    width: 80%;
    height: 95%;
    padding: var(--space-md) 0;
  }

  .title {
    color: var(--color-primary);
    font-size: var(--font-size-3xl);
  }
</style>
