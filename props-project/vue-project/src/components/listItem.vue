<template>
    
        {{name }} {{ department }} {{salary }}
        <button @click="$emit('deleteItem',index)">Delete</button>
   
  </template>
  
  <script setup lang="ts">
  defineProps ({
    name : String,
    department : String,
    salary : String,
    index : Number
  })
  </script>
  