<template>
{{ message }}
</template>
<script setup lang="ts">
import { inject } from 'vue';

const message = inject('message')
</script>