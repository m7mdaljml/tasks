<template>
    {{ tilte }}
    {{ name }}
</template>

<script setup>
import {defineProps} from 'vue'

defineProps ({
    tilte : {
        type : String,
        default : 'Welcome in My First props'
    },
    name :{
        type : String,
        default : 'Mohammad Aljamal'
    }
})
</script>