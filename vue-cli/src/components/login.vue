<template>
    <div class="container">
        <div class="title">Member Login</div>
        <form @submit.prevent="check">
            <div class="mb-3">
                <input v-auto-focus type="text" placeholder="Username" class="form-control"
                    :class="{ ' border-danger': loginStatus == 'Login Failed' || loginStatus == 'Invalid Email' }"
                    id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" >
            </div>
            <div class="mb-3">
                <i class="bi bi-person-circle"></i>
                <input v-model="password" placeholder="Password" type="password" class="form-control"
                    :class="{ ' border-danger': loginStatus == 'Login Failed' || loginStatus == 'Password Must be equal or more than 6 Digits' }"
                    id="exampleInputPassword1" >
            </div>
            <p class="fst-italic" :id="color">
                {{ loginStatus }}
            </p>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success">Submit</button>
            </div>

        </form>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import JSON from '@/users.json'
//import axios from 'axios';

const email = ref<string>('')
const password = ref<string>('')
const loginStatus = ref<string>('')
const color = ref<string>('')
const users = ref<string[]>(JSON)
const vAutoFocus = {
    mounted: (item:any) => {
        item.focus()
    }
}

const check = () => {
    let obj = users.value.find(user => user.email === email.value)
    console.log(obj);
    if (!(email.value.includes('@'))) {
        loginStatus.value = "Invalid Email"
        color.value = "red"
    }
    else if (password.value.length < 6) {
        loginStatus.value = "Password Must be equal or more than 6 Digits"
        color.value = "red"
    }
    else if (obj && obj.password === password.value) {
        loginStatus.value = "Login Successfully, Welcome " + obj.name
        color.value = "green"
        email.value = ''
        password.value = ''
    } else {
        loginStatus.value = "Login Failed"
        color.value = "red"
    }
}
</script>


<style scoped>
.container {
    width: 450px;
    border: 3px solid black;
    padding: 30px;
    border-radius: 3%;
    margin-top: 20px;
}

form {
    padding: 30px
}

#red {
    color: red;
    font-weight: bolder;
}

#green {
    color: green;
    font-weight: bold;
}

input {
    border: 1px solid black
}

.title {
    display: flex;
    justify-content: center;
    font-size: x-large;
    font-weight: 600;
}
</style>