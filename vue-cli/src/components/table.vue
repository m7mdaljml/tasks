<template>
    <div class="container">
        <table class="table table-bordered border-primary">
            <tr>
                <td>
                    <div class="input-group mb-3">
                        <form action="" @submit.prevent="addTask">
                            <input v-model="newTask" type="text" class="form-control" placeholder="Enter Your new Task"
                                aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-primary" type="submit" id="button-addon2">Button</button>
                        </form>
                    </div>
                </td>
            </tr>
            <tr v-for="(task, id) in tasks" :key="id">
                <td>
                    {{ task }}
                </td>
                <td>
                    <button @click="deleteTask(id)" class="btn btn-danger">Delete</button>
                </td>
            </tr>
            <tr v-if="tasks.length > 0">
                <td colspan="2">
                    <button @click="deleteAll()" class="btn btn-danger">clear all</button>
                </td>
            </tr>
        </table>
    </div>

</template>


<script setup>
import { ref } from 'vue'
const tasks = ref([])
const newTask = ref('')

const addTask = () => {
    if (newTask.value) {
        tasks.value.push(newTask.value)
        newTask.value = ''
    }
}
const deleteTask = (id) => tasks.value.splice(id, 1)

const deleteAll = () => {
    //tasks.value.splice(0,tasks.value.length)
    tasks.value = []
}
</script>

<style></style>