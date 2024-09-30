<template>
    <h2>{{ FullName }}</h2>
    <input type="text" v-model="FirstName">
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const FirstName: string = ref("Mohammad")
const LastName: string = ref("Aljamal")


const FullName = computed(() => {
    return `${FirstName.value} ${LastName.value}`
}
)

</script>

<style></style>