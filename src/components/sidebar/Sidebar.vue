<script setup lang="ts">
  import Icon from "./Icon.vue"

  const props = defineProps<{
    active: string
  }>()
  const emit = defineEmits<{
    (e: "active", option: string): void
  }>()
  const options: string[] = ["home", "dashboard"]
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
          :class="[
            s.option,
            { [s.active]: option === props.active },
          ]"
          @click="emit('active', option)"
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
    color: var(--color-text);
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
    font-weight: 700;
    color: var(--color-text-muted);
  }
  .option:hover {
    color: var(--color-primary-hover);
  }
  .option:active {
    background: var(--color-hover);
  }
  .active {
    background: var(--color-hover);
    color: var(--color-primary);
  }
</style>
