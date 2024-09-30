<template>
{{ count }}
<button @click="count=count+1">+</button>
</template>
<script setup>
import { watch,ref } from 'vue';

const count = ref(0)
watch(count, (newX) => {
  console.log(`x is ${newX}`)
})
</script>
