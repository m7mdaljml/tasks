<template>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Text</label>
            <input v-model="text" type="text" id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
            <label for="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input v-model="amount" type="text" id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
const amount = ref('')

const emit = defineEmits([
    'transactionSubmitted'
])

const onSubmit = () => {
    if (!text.value || !amount.value) {
        alert('you must to Enter all values')
    }
    else if (isNaN(amount.value)) {
        alert("Amount should be number")
        amount.value = ''
    }
    else {
        const transactionData = {
            text: text.value,
            amount: amount.value
        }
        emit('transactionSubmitted', transactionData)

        text.value = ''
        amount.value = ''

    }
}
</script>

<style scoped></style>