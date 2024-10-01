<template>
    <h3>History</h3>
    <ul id="list" class="list">

        <li v-for="trans in transactions" :key="trans.id" :class="trans.amount < 0 ? 'minus' : 'plus'">
            {{ trans.text }} <span>${{ trans.amount }}</span>
            <button class="delete-btn" @click="deleteTrans(trans.id)">X</button>
        </li>
    </ul>
</template>

<script setup lang="ts"> 
import { defineProps } from 'vue';
const props = defineProps({
    transactions:{
        typr : Array,
        required : true
    }
})

const emit = defineEmits(['transDeleted'])

const deleteTrans = (id)=>{
    emit('transDeleted',id)
}
</script>

<style scoped></style>