<template>
  <div class="counter-wrapper">
    <h1>Pinia Counter Store</h1>
    <div>Count: {{ count }}</div>
    <div>Double count: {{ doubleCount }}</div>
    <button @click="store.increment(1)">Increment 1</button>
    <button @click="store.waitAndAdd(1)">Increment 1 (with delay)</button>
    <button @click="store.increment(5)">Increment 5</button>
  </div>
  <h3>Store object</h3>
  <pre>{{ store }}</pre>
</template>

<script>
import { useCounterStore } from "@/stores/counter.js";
import { storeToRefs } from "pinia"; // Used To maintain reactivity on store content
export default {
  name: "App",
  setup() {
    const store = useCounterStore();
    const { count, doubleCount } = storeToRefs(store); // Maintains reactivity.
    return {
      store,
      count,
      doubleCount,
    };
  },
};
</script>

<style>
</style>