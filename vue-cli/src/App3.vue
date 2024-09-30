<script setup>
import axios from 'axios';
import { ref , onMounted } from 'vue'

const name = ref("Mohammad Aljamal")
const skills = ref(["C++", "HTML", "JS", "CSS"])
const newskill = ref('')

const changeName = () => {
    if (name.value == 'Mohammad Aljamal') {
        name.value = "Mohammad Jaradat"
    }
    else {
        name.value = "Mohammad Aljamal"
    }
}

const addSkill = ()=>{
    if(newskill.value !== ''){
        skills.value.push(newskill.value)
        newskill.value = ""
    }
}
const deleteSkill = (id)=>{
    skills.value.splice(id,1)
}

const printJSON = (res)=>{
    let arr = res
    arr.forEach((item)=>{
        console.log(item.title)
        skills.value.push(item.title)
    })
}
onMounted (
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            printJSON(res.data)
            console.log(res.data)
        })
)

</script>

<template>
    <h1>First Program for {{ name }}</h1>
    <ul>
        <li v-for="(skill, id) in skills" :key="id">
            {{ skill }} <button @click="deleteSkill(id)">Delete</button>
        </li>
    </ul>
    <button @click="changeName()">Click to change</button>

    <form action="" @submit.prevent="addSkill">
        <label for="newSkill">Add Skill</label>
        <input type="text" name="newSkill" id="newSkill" v-model="newskill">
        <button type="submit">Submit</button>
    </form>
    <div class="titles">
    </div>
</template>

<style scoped>
h1 {
    color: red;
}
</style>
