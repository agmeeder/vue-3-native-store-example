<template>
  <div class="text-gray-700">
    <h1 class="text-2xl p-4 mb-4 text-white bg-yellow-900 shadow-lg rounded-lg">
      Menu of {{ coffees.length }} coffee variants
    </h1>
    <div
      v-for="(coffee, index) in coffees"
      :key="coffee.id"
      class="flex flex-col shadow-lg p-4 mb-4 bg-yellow-100 rounded-lg"
    >
      <div class="font-bold">{{ index + 1 }}. {{ coffee.title }}</div>
      <div class="py-2 italic font-serif">
        {{ coffee.description }}
      </div>
      <div class="py-2 text-sm">
        Ingredients: <span v-for="ingredient in coffee.ingredients" class="text-yellow-800">{{ ingredient }}, </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import store from '../store/index.js'
const { coffees, getCoffees } = store

onMounted(async () => {
  // Call 'getCoffees' action to fetch the coffees from the API
  await getCoffees()
})
</script>
