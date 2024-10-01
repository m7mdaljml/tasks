<template>
  <v-choice
  v-model="choiceModel" 
  name="group1" 
  :options="options" 
  :multiple="true"
  @CheckItem="check"
  label="Radio Group"/>

  {{ choiceModel }}
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VChoice from '@/components/VChoice.vue'

const options = [
  { text: "Option 1",  value: "a" },
  { text: "Option 2",  value: "b" },
  { text: "Option 3",  value: "c" },
]

const choiceModel = ref([])

const newIndex = ref('')
const check = (item,type)=>{
  if(type)
{
  if(!choiceModel.value.includes(item)){
    choiceModel.value.push(item)
  }
  else{
    newIndex.value = choiceModel.value.indexOf(item)
    choiceModel.value.splice(newIndex.value,1)
  }
}
else{
  choiceModel.value =[]
  choiceModel.value.push(item)
}
  
}
</script>

<style scoped></style>