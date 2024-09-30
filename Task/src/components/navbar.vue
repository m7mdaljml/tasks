
<template>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://cubesplatform.com/cubes-platform" target="_blank"><img class="logo"
        :src="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/"><a class="nav-link active">Login</a></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="calc/"><a v-if="$route.params.id" class="nav-link">Calculater</a></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to=""><a v-if="$route.params.id" class="nav-link" id="visitor"> Welcome  : {{ $route.params.id }}</a></RouterLink>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-secondary" type="button" @click="Toggle()">Toggle Mode</button>
      </form>
    </div>
  </div>
  
</nav>
</template>
<script setup lang="ts">
//import logo from '@/assets/logo.svg'
import { RouterLink, RouterView } from 'vue-router'
import { provide } from 'vue';
import logo from '@/assets/logo.png'
</script>
<style>
.logo{
  width: 150px;
  }
  a{
    text-decoration: none;
  }
  .nav-item{
    font-size: larger;
    font-style: italic;
    font-weight: bold;
  }
  #visitor{
    color: rgb(154, 197, 130);
  }
  
</style>