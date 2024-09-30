<script>
export default{
  data(){
    return {
      name : "Mohammad Aljamal",
      skills : ["C++", "HTML","JS","CSS"] 
    }
  }
}
</script>

<template>
  <h1>First Program for {{ name }}</h1>
  <ul>
    <li v-for="(skill,id) in skills" :key="id">
      {{ skill }}
    </li>
  </ul>
</template>

<style scoped>
h1{
  color:red;
}
</style>
