<script setup lang="ts">
  const titles: string[] = ["active List", "Completed List"]
</script>

<template>
  <div :class="s.head">
    <button
      :class="s.option"
      v-for="t in titles"
      type="button"
    >
      {{ t }}
    </button>
  </div>
</template>
<style module="s">
  .head {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .option {
    height: 100%;
    width: 50%;
    align-items: center;
    display: flex;
    background: transparent;
    font-size: var(--font-size-xl);
    text-transform: capitalize;
    font-weight: 500;
    color: var(--color-text-muted);
    transition: all 0.2s ease-in-out;
  }
  .option:last-child {
    justify-content: flex-end;
    padding-right: var(--space-md);
  }
  .option:hover {
    transform: scale(1.02);
    color: var(--color-text);
  }
  .active {
    color: var(--color-primary);
  }
</style>
