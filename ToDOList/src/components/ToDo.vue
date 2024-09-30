<template>
    <div class="ToDoApp">
        <div class="task-input">

        </div>
        <div class="tasks">

        </div>
    </div>

    <div class="card" style="width: 50%;">
        <div class="card-header">
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="newTask" @keyup.enter="addTask"
                    placeholder="Add New Task">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addTask">Add
                    Task</button>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li v-for="(task, index) in tasks" :key="index">


                <div class="row">
                    <div class="col-6">
                        {{ task }}
                    </div>
                    <div class="col-6">
                        <button class="btn btn-outline-danger" type="button" @click="removeTask(index)">Delete</button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="card-footer text-muted" v-if='tasks.length > 0'>
            <button class="btn btn-outline-danger" type="button" @click="clearAll">Clear All</button>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
    if (newTask.value.trim()) {
        tasks.value.push(newTask.value)
        newTask.value = ''
    }
}

const removeTask = (index) => {
    tasks.value.splice(index, 1)
}

const clearAll = ()=>{
    tasks.value = []
}

</script>
<style>
.card {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
}

li {
    width: 100%;
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 1%;
}

li span {
    display: flex;
    justify-content: baseline;
}

.col-6 {
    display: flex;
    justify-content: center;

}
.card-footer{
    display: flex;
    justify-content: center;
}
</style>