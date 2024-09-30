<template>
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{{ currQuote.text }}</p>
      <footer class="blockquote-footer"><cite title="Source Title">{{currQuote.author}}</cite></footer>
    </blockquote>
  </div>
  <button @click="getRandomQuote">Click here to generate a new Quote</button>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import JSON from '@/quotes.json'
//import axios from 'axios';

const quotes = ref<string[]>(JSON)
const currQuote = ref<string[]>({text : '' , author : ''})

const getRandomQuote = ()=>{
    const randNum = Math.floor(Math.random()*quotes.value.length)
    currQuote.value = quotes.value[randNum]
}
onMounted(getRandomQuote)
</script>
<style>
.card{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}
</style>