<template>
  <div class="about">
    <h1>Counter Stats:</h1>
    <p>Current Count: {{ count }}</p>
    <p>Current Color: {{ color }}</p>
    <p>Nr. of Coffees: {{ coffees.length }}</p>
  </div>
</template>

<script setup>
import store from '../store/index.js'
const { count, color, coffees } = store
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
}

p {
  margin-top: 16px;
  font-size: 24px;
}
</style>
