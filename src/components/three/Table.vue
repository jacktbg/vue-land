<script setup lang="ts">
  import TodoCard from "./TodoCard.vue"
  import { useTodos } from "./useTodos"
  import TableHeader from "./TableHeader.vue"

  const { state } = useTodos()
  const categories: string[] = ["work", "home", "personal"]
</script>

<template>
  <div :class="s.container">
    <TableHeader />
    <div :class="s.body">
      <div :class="s.column" v-for="c in categories">
        <h3 :class="s.title"> {{ c }}</h3>
        <TodoCard
          v-for="todo in state.todos"
          :key="todo.id"
          :todo="todo"
        />
      </div>
    </div>
  </div>
</template>

<style module="s">
  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--space-lg);
    width: 100%;
    padding-left: var(--space-md);
  }

  .body {
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: var(--space-lg);
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
    color: var(--color-text);
    font-size: var(--font-size-xl);
    text-transform: capitalize;
    font-weight: 400;
  }
</style>
