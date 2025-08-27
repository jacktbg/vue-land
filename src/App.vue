<script setup lang="ts">
  import { ref } from "vue"
  import Counter from "./components/Counter.vue"

  const total = ref<number>(0)
  const handleUpdate = (delta: number) => {
    total.value += delta
  }
</script>
<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Vue Land</h1>
    <h2 :class="$style.counter"
      >Total Count: {{ total }}
    </h2>
    <Counter :start="5" @update="handleUpdate" />
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
    gap: var(--space-md);
  }
  .title {
    color: var(--color-primary);
    font-size: var(--font-size-3xl);
  }
</style>
