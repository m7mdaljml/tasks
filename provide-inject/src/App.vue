<template>
<firstChild />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import firstChild from '@/components/first-child.vue'

const message : string = ref('mohammad aljamal using provide & inject')
provide('message',message)
</script>

