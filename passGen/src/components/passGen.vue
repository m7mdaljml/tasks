<template>
    <div class="container">
        <h2>Generate Password</h2>
        <label for="">pass length : </label>
        <input v-model="passwordLength" type="number" max="32" min="4"><br>
        <label for="">are you want upper case ?</label>
        <input v-model="includeUppercase" type="checkbox"><br>
        <label for="">are you want numbers ?</label>
        <input v-model="includeNumbers" type="checkbox"><br>
        <label for="">are you want symbols ?</label>
        <input v-model="includeSym" type="checkbox"><br>

        <button @click="generatePass">generate pass</button><br>

        <b>generated pass : </b>{{ newPass }}
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const passwordLength = ref(12)
    const includeUppercase = ref(true)
    const includeNumbers = ref(true)
    const includeSym = ref(true)
    const newPass = ref('')

    const generatePass = ()=>{
        const lowercasechars = 'abcdefghigklmnopqrstuvwxyz'
        const uppercasechars = includeUppercase.value ? "ABCDEFGHIGKLMNOPQRSTUVWXYZ" : ""
        const numberchars = includeNumbers.value ? "0123456789" : ""
        const symchars = includeSym.value ? "!@#$%^&*()_+{}[]|;:,<>?/~`" : ""
        const allChars = lowercasechars + uppercasechars + numberchars + symchars

        let password = ''
        
        for (let i = 0; i < passwordLength.value; i++) {
           const randomIndex = Math.floor(Math.random()* allChars.length)
           password += allChars[randomIndex]
        }

        newPass.value = password
    }
</script>