<!-- <script setup lang="ts">
  import { computed, ref } from "vue"
  import Counter from "../components/Counter.vue"

  type Counter = {
    id: number
    value: number
  }

  const counters = ref<Counter[]>([])
  let nextId = 1
  const addCounter = () => {
    counters.value.push({
      id: nextId++,
      value: 0,
    })
  }

  const removeCounter = (id: number) => {
    counters.value = counters.value.filter(
      (c) => c.id !== id
    )
  }

  const updateCounter = (id: number, newValue: number) => {
    const counter = counters.value.find((c) => c.id === id)
    if (counter) counter.value = newValue
  }

  const total = computed(() =>
    counters.value.reduce((acc, c) => acc + c.value, 0)
  )
</script>
<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Multi Counter Dashboard</h1>
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
</style> -->
