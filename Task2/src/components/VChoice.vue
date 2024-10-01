<template>
    <div v-for="(option,index) in options" :key="index">
        <input :type="multiple ? 'checkbox' : 'radio'" :value="option" :name="name" @change="$emit('CheckItem',option.value,multiple)"> {{ option.text }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps  ({
  options : Array,
  name : String,
  multiple : Boolean,
})




</script>

<style scoped></style>