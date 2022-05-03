import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment(val = 1) {
      this.count += val;
    },
    async waitAndAdd(val = 1) {
      setTimeout(() => {
        this.count += val;
      }, 2000);
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
});
