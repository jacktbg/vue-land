<script setup lang="ts">
  import { ref, watch } from "vue"

  defineOptions({ name: "Counter" })

  const props = defineProps<{
    id: number
    start?: number
  }>()

  const emit = defineEmits<{
    (e: "update", value: number): void
    (e: "remove"): void
  }>()

  const count = ref(props.start ?? 0)

  const increment = () => {
    count.value++
    emit("update", count.value)
  }

  const reset = () => {
    count.value = props.start ?? 0
    emit("update", count.value)
  }

  const remove = () => {
    emit("remove")
  }

  // 🔍 keep parent in sync if "start" changes externally
  watch(
    () => props.start,
    (newVal) => {
      if (newVal !== undefined) count.value = newVal
    }
  )
</script>

<template>
  <div :class="$style.container">
    <h3 :class="$style.title">Counter {{ props.id }}</h3>
    <p :class="$style.counter">Count: {{ count }}</p>

    <button
      :class="$style.incrementButton"
      @click="increment"
    >
      +1
    </button>
    <button :class="$style.resetButton" @click="reset">
      Reset
    </button>
    <button :class="$style.removeButton" @click="remove">
      Remove
    </button>
  </div>
</template>

<style module>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-md);
    width: clamp(12rem, 22vw, 30rem);
    aspect-ratio: 1/1;
    background: var(--color-bg-alt);
    border-radius: var(--space-md);
  }
  .title {
    font-size: var(--font-size-xl);
    font-weight: 600;
  }
  .counter {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    font-weight: 300;
  }
  .incrementButton,
  .resetButton,
  .removeButton {
    color: var(--color-text-inverse);
    font-size: var(--font-size-md);
    font-weight: 700;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--space-xs);
    width: clamp(8rem, 10vw, 15rem);
  }

  .incrementButton {
    background: var(--color-success);
  }

  .resetButton {
    background: var(--color-warning);
  }

  .removeButton {
    background: var(--color-error);
  }
</style>
