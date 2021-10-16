import { reactive, computed } from "vue";

const state = reactive({
  count: 0,
  color: "red",
});

const store = {
  // Computed (readonly and read/write) store properties
  count: computed(() => state.count),
  color: computed({
    get: () => state.color,
    set: (payload) => state.color = payload
  }),

  // Store methods
  increase: () => state.count++,
  decrease: () => state.count--,
 
  // Store getters
  triple: computed(() => state.count * 3)
}

export default store;