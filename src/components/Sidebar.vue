<script setup lang="ts">
  import Icon from "./Icon.vue"

  const options: string[] = ["Counter", "Dashboard"]
</script>

<template>
  <aside :class="s.container">
    <nav :class="s.nav">
      <div :class="s.imageWrapper">
        <Icon name="logo" :class="s.image" />
      </div>
      <ul :class="s.list">
        <li
          v-for="(option, index) in options"
          :key="index"
          :class="s.option"
          >{{ option }}</li
        >
      </ul>
    </nav>
  </aside>
</template>

<style module="s">
  .container {
    width: 20%;
    align-self: center;
    height: 95%;
    background: var(--color-bg-alt);
    border-radius: var(--space-md);
  }

  .imageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1/1;
  }
  .image {
    width: 90%;
    aspect-ratio: 1/1;
    color: var(--color-primary);
  }
  .nav {
    width: 100%;
    height: 100%;
    padding: var(--space-md) 0;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  .option {
    display: flex;
    align-items: center;
    height: var(--space-xl);
    width: 100%;
    padding: 0 var(--space-lg);
    text-transform: uppercase;
  }
  .option:hover {
    background: var(--color-hover);
  }
  .option:active,
  .option.active {
    color: var(--color-primary-hover);
  }
</style>
