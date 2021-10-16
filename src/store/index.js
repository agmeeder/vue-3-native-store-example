import { reactive, computed } from "vue"

// Store state
const state = reactive({
  count: 0,
  color: "red",
  coffees: []
})

const store = {
  // Computed (readonly and read/write) store properties
  count: computed(() => state.count),
  color: computed({
    get: () => state.color,
    set: (payload) => state.color = payload
  }),
  coffees: computed(() => state.coffees),

  // Store mutations
  increase: () => state.count++,
  decrease: () => state.count--,
  setCoffees: (coffees) => {
    if (coffees) {
      state.coffees = coffees
    }
  },
 
  // Store getters
  triple: computed(() => state.count * 3),

  // Actions (async methods)
  getCoffees: async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot')
    const data = await resp.json()
    if (data) {
      // call mutation
      store.setCoffees(data)
    }
  }
}

// Export the store
export default store