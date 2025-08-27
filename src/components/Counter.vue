<script setup lang="ts">
  import { ref } from "vue"

  const count = ref<number>(0)

  const increment = () => {
    count.value++
  }

  const reset = () => {
    count.value = 0
  }
</script>
<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Counter</h1>
    <p :class="$style.counter">Count: {{ count }}</p>
    <button
      :class="$style.incrementButton"
      @click="increment()"
      >Count + 1</button
    >
    <button :class="$style.resetButton" @click="reset()"
      >Reset</button
    >
  </div>
</template>
<style module>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-md);
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-md);
  }
  .title {
    font-size: var(--font-size-xxl);
    font-weight: 600;
  }
  .p {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    font-weight: 300;
  }
  .incrementButton {
    background: var(--color-primary);
    font-size: var(--font-size-md);
    font-weight: 700;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    color: var(--color-text-inverse);
    width: clamp(8rem, 10vw, 15rem);
  }
  .resetButton {
    background: var(--color-warning);
    font-size: var(--font-size-md);
    font-weight: 700;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    color: var(--color-text-inverse);
    width: clamp(8rem, 10vw, 15rem);
  }
</style>
