<script setup lang="ts">
  const categories = ["---", "work", "home", "personal"]
</script>

<template>
  <form :class="s.form">
    <input type="text" :class="s.input" />
    <div :class="s.wrapper">
      <select name="" id="" :class="s.options">
        <option
          v-for="c in categories"
          :key="c"
          value="c"
          :class="s.option"
          >{{ c }}</option
        >
      </select>
      <button :class="s.button" type="button">Add</button>
    </div>
  </form>
</template>

<style module="s">
  .form {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    width: 30%;
  }

  .input {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .options {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    background: var(--color-bg-alt);
  }
  .option {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
  }
  .button {
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    background: var(--color-primary);
    color: var(--color-text-inverse);
    font-weight: bold;
  }
</style>
