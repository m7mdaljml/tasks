<template>
    <v-header />
    <div class="container">
        <v-balance :total="total"/>
        <v-income-ex :income="income" :expense="expense" />
        <v-trans-list :transactions="transactions" @transDeleted="deleteTrans" />
        <v-add-trans @transactionSubmitted="handleTrans" />
    </div>
</template>

<script setup lang="ts">
import { ref,computed,onMounted } from 'vue';

import VHeader from '@/components/header.vue'
import VBalance from '@/components/balance.vue'
import VIncomeEx from '@/components/incomeEx.vue'
import VTransList from '@/components/transList.vue'
import VAddTrans from '@/components/addTrans.vue'

const transactions = ref([])
onMounted(()=>{
    const savedTrans = JSON.parse(localStorage.getItem('transactions'))

    if(savedTrans)
    transactions.value = savedTrans
})

const total = computed (()=>{
    return transactions.value.reduce((acc,trans)=>{
        return acc + Number(trans.amount)
    },0)
})

const income = computed (()=>{
    return transactions.value.filter(el=> el.amount > 0).reduce((acc,trans)=>{
        return acc + Number(trans.amount)
    },0)
})

const expense = computed (()=>{
    return transactions.value.filter(el=> el.amount < 0).reduce((acc,trans)=>{
        return acc + Number(trans.amount)
    },0)
})

const handleTrans = (transactionData)=>{
    transactions.value.push({id : generateUniqueId() ,text : transactionData.text,amount : transactionData.amount})
    saveToLocalStorage()
}

const generateUniqueId = ()=>{
    return Math.floor(Math.random()*1000000)
}

const deleteTrans = (id)=>{
    transactions.value = transactions.value.filter(trans => trans.id !== id)
}

const saveToLocalStorage = ()=>{
    localStorage.setItem('transactions',JSON.stringify(transactions.value))
}
</script>