<!-- src/components/Header.vue --> 
<template> 
  <header> 
    <h1>Movie Search App</h1> 
    <router-link to="/">Home</router-link> 
    <router-link to="/movies">Search Movies</router-link> 
  </header> 
</template> 
 
<style scoped> 
header { 
  display: flex; 
  justify-content: space-between; 
  padding: 1rem; 
  background-color: #f8f9fa; 
} 
</style>