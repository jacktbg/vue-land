<script setup lang="ts">
  import { ref } from "vue"
  import { useTodos } from "./useTodos"

  const categories = ["Work", "Home", "Personal"]
  const { addTodo } = useTodos()
  const newTodo = ref<string>("")
  const selectedCategory = ref<string>("Work")

  const add = () => {
    if (newTodo.value.trim()) {
      addTodo(newTodo.value, selectedCategory.value)
      newTodo.value = ""
    }
  }
</script>

<template>
  <form :class="s.form">
    <input
      type="text"
      :class="s.input"
      v-model="newTodo"
      placeholder="New todo..."
    />
    <div :class="s.wrapper">
      <select
        name=""
        id=""
        :class="s.options"
        v-model="selectedCategory"
      >
        <option
          v-for="c in categories"
          :key="c"
          value="c"
          :class="s.option"
          >{{ c }}</option
        >
      </select>
      <button :class="s.button" type="button" @click="add"
        >Add</button
      >
    </div>
  </form>
</template>

<style module="s">
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-md);
    width: 40%;
    background: var(--color-bg-alt);
    height: 20%;
    border-radius: var(--space-md);
  }

  .input {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    background: var(--color-secondary);
    color: var(--color-text-inverse);
    font-size: var(--font-size-md);
    font-weight: 600;
    width: 80%;
  }

  .wrapper {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }

  .options {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    background: var(--color-success);
    color: var(--color-text-inverse);
    font-size: var(--font-size-md);
    font-weight: 600;
    text-transform: capitalize;
  }
  .option {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    font-weight: bold;
    font-size: var(--font-size-md);
    text-transform: capitalize;
  }
  .button {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    background: var(--color-primary);
    color: var(--color-text-inverse);
    font-weight: bold;
    font-size: var(--font-size-md);
  }
</style>
