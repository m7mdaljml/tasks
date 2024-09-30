<template>
    <div class="container">
        <div class="title">Member Login</div>
        {{ errorMessages }}
        <form>
            <div class="mb-3">
                <input v-auto-focus type="text" placeholder="Username" class="form-control" :class="{ 'border-danger' : state.userName === 'invalid' }" id="exampleInputEmail1"
                    aria-describedby="emailHelp" v-model="email" @input="()=>state.userName = 'unset'" required>
            </div>
            <div class="mb-3">
                <i class="bi bi-person-circle"></i>
                <input v-model="password" placeholder="Password" type="password" class="form-control" :class="{ ' border-danger' : loginStatus == 'Login Failed' ||  loginStatus == 'Password Must be more than 6 Digits'}"
                    id="exampleInputPassword1" required>
            </div>
            <p class="fst-italic" :id="color">
                {{ loginStatus }}
            </p>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success" @click="check">Submit</button>
            </div>

        </form>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import JSON from '../users.json'
import axios from 'axios';
import { ValidationStateEnum } from '@/assets/validationState';
import { Ref } from 'vue';


const state = reactive({userName:ValidationStateEnum.unset,password:ValidationStateEnum.unset})

const errorMessages = computed(()=>({
    userName:state.userName === ValidationStateEnum.invalid ? 'userName is invalid':'',
    password:state.password === ValidationStateEnum.invalid ? 'password is invalid':''
}))

// : as type script

const email = ref('') as Ref<string | number>
const password = ref('')
const loginStatus = ref('')
const color = ref('')
const users = ref(JSON)
const vAutoFocus = {
    mounted: (item) => {
        item.focus()
    }
}


const check = () => {
    
     let obj = users.value.find(user => user.email === email.value)
     console.log(obj);
     if (!(email.value.includes('@'))) {
         loginStatus.value = "Invalid Email"
         color.value = "red"
         state.userName = 'invalid'
    state.password =  'invalid'
     }
     else if (password.value.length < 6) {
         loginStatus.value = "Password Must be more than 6 Digits"
         color.value = "red"
         state.userName = 'invalid'
    state.password =  'invalid'
     }
     else if (obj && obj.password === password.value) {
         loginStatus.value = "Login Successfully, Welcome " + obj.name
         color.value = "green"
         //email.value = ''
         //password.value = ''
         state.userName = 'valid'
    state.password =  'valid'
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