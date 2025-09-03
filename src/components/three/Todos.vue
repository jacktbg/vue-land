<script setup lang="ts">
  import { computed } from "vue"
  import Form from "./Form.vue"
  import Table from "./Table.vue"
  import { useTodos } from "./useTodos"

  const { state } = useTodos()
  const total = computed(() => state.todos.length)
</script>

<template>
  <div :class="s.container">
    <h1 :class="s.title">Todo List App: {{ total }}</h1>
    <Form />
    <Table />
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
  }

  .title {
    color: var(--color-primary);
    font-size: var(--font-size-3xl);
  }
</style>
