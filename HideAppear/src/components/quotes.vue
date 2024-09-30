<template>
    <div class="container">
        <div class="card" v-for="(item,index) in items" :key="index">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <button @click="toggle(index)" class="btn btn-warning">{{item.open ? 'close' : 'open'}}</button>
                <p class="card-text" v-show="item.open">{{ item.content }}</p>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = ref<{ title: string; content: string; open: boolean }[]>([
    {
        title: "HTML",
        content: "HTML stands for Hyper Text Markup Language",
        open: false
    },
    {
        title: "CSS",
        content: "CSS is the acronym of “Cascading Style Sheets”",
        open: false
    },
    {
        title: "Bootstrap",
        content: "Bootstrap (formerly Twitter Bootstrap) is a free and open-source CSS framework",
        open: false
    }
])

const toggle = (index) => {
    items.value[index].open = !items.value[index].open
};


</script>
<style>
.container{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}
.card{
    padding: 5%;
    margin: 5%;
}
</style>