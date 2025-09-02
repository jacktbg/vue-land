<script setup lang="ts">
  // import { useTodos } from "./useTodos"

  // const { state, addTodo, toggleTodo, removeTodo } =
  //   useTodos()

  const categories: string[] = ["work", "home", "personal"]
</script>

<template>
  <div :class="s.container">
    <div :class="s.column" v-for="c in categories">
      <h2 :class="s.title"> {{ c }}</h2>
      <div :class="s.items"></div>
    </div>
  </div>
</template>

<style module="s">
  .container {
    display: flex;
    flex: 1;
    gap: var(--space-xl);
    width: 100%;
    padding-left: var(--space-md);
  }

  .column {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--space-lg);
    background: var();
  }
  .title {
    position: fixed;
    color: var(--color-primary);
    font-size: var(--font-size-xl);
    text-transform: capitalize;
  }

  .items {
    display: flex;
    gap: var(--space-md);
  }
</style>
