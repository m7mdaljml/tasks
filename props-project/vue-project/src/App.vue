<template>
  <div v-for="(user,index) in users" :key="index">
  <listitem
  :name="user.name"
  :department="user.department"
  :salary="user.salary"
  :index="index"
  @deleteItem="deletuser"
   />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import listitem from '@/components/listItem.vue'

let users = ref([
  {
    name: "mohammad aljamal",
    department: "Development",
    salary: "1000$"
  },
  {
    name: "mohammad jaradat",
    department: "Development",
    salary: "2000$"
  },
  {
    name: "Radwan Alali",
    department: "Development",
    salary: "2000$"
  },
  {
    name: "Ahmad Saleh",
    department: "Development",
    salary: "1500$"
  },
  {
    name: "Ahmad Qadoura",
    department: "Development",
    salary: "1500$"
  }
])

const deletuser = (index)=>{
  console.log("user"+index+" Deleted Successfully")
}
</script>