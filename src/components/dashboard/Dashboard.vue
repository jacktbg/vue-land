<script setup lang="ts">
  import { computed, ref } from "vue"
  import Card from "./Card.vue"

  type CounterItem = {
    id: number
    value: number
  }

  const counters = ref<CounterItem[]>([])

  let nextId = 1

  const addCounter = () => {
    counters.value.push({ id: nextId++, value: 0 })
  }

  const removeCounter = (id: number) => {
    counters.value = counters.value.filter(
      (c) => c.id !== id
    )
  }

  // handle update from child
  const updateCounter = (id: number, newValue: number) => {
    const counter = counters.value.find((c) => c.id === id)
    if (counter) counter.value = newValue
  }

  // derived total
  const total = computed(() =>
    counters.value.reduce((sum, c) => sum + c.value, 0)
  )
</script>

<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Multi Counter Dashboard</h1>

    <button :class="$style.addButton" @click="addCounter">
      ➕ Add Counter
    </button>

    <h2 :class="$style.total">Total: {{ total }}</h2>

    <div :class="$style.grid">
      <Card
        v-for="c in counters"
        :key="c.id"
        :id="c.id"
        :start="c.value"
        @update="(val) => updateCounter(c.id, val)"
        @remove="removeCounter(c.id)"
      />
    </div>
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
    width: 80%;
    height: 95%;
    align-self: center;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
  .title {
    font-size: var(--font-size-3xl);
    color: var(--color-primary);
  }
  .addButton {
    background: var(--color-secondary);
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    color: var(--color-text-inverse);
    font-weight: bold;
  }
  .total {
    color: var(--color-success);
    font-size: var(--font-size-xl);
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    justify-content: center;
  }
</style>
