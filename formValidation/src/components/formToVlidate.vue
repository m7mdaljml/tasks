<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label  class="form-label">Name</label>
                <input v-model="formData.name" type="text" class="form-control" :class="{'border-danger' : nameFlag }">
                <p v-if="nameFlag" style="color:red">Name Is Incorrect</p>
            </div>
            <div class="mb-3">
                <label  class="form-label">Email address</label>
                <input v-model="formData.email" type="text" class="form-control" :class="{'border-danger' : emailFlag }">
                <p v-if="emailFlag" style="color:red">Email Is Incorrect</p>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="formData.password" type="password" class="form-control" :class="{'border-danger' : passwordFlag } ">
                <p v-if="passwordFlag" style="color:red">password Is Incorrect</p>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            
        </form>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

const formData = ref<{ name: string, email: string, password: string }>({
    name: '',
    email: '',
    password: ''
});

const nameFlag = ref<boolean>(false);
const emailFlag = ref<boolean>(false);
const passwordFlag = ref<boolean>(false);

const isValidName = () => {
    if (formData.value.name.trim() === '') {
        nameFlag.value = true;
        return false;
    } else {
        nameFlag.value = false;
        return true;
    }
}

const isValidEmail = () => {
    if (/^\S+@\S+\.\S+$/.test(formData.value.email)) {
        emailFlag.value = false;
        return true;
    } else {
        emailFlag.value = true;
        return false;
    }
}

const isValidPassword = () => {
    if (formData.value.password.length >= 8) {
        passwordFlag.value = false;
        return true;
    } else {
        passwordFlag.value = true;
        return false;
    }
}

const isValidForm = () => {
    return isValidName() && isValidEmail() && isValidPassword();
}

const submitForm = () => {
    if (isValidForm()) {
        console.log("Form Submitted Successfully", formData.value);
        formData.value = {
            name: '',
            email: '',
            password: ''
        };
    } else {
        console.log("Form is invalid, please check the inputs.");
    }
}
</script>


<style>
.container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid black;
    padding: 15px;
    margin-top: 20px;

}
</style>