<template> 
  <div> 
    <div v-if="movies.length === 0">No movies found.</div> 
    <div v-for="movie in movies" :key="movie.id" @click="goToDetails(movie.id)"> 
      <img :src="movie.image" alt="Movie Poster" /> 
      <h3>{{ movie.title }}</h3> 
      <p>{{ movie.description }}</p> 
      <p>Rating: {{ movie.imDbRating }}</p> 
    </div> 
  </div> 
</template> 
 
<script> 
export default { 
  props: ['movies'], 
  methods: { 
    goToDetails(id) { 
      this.$router.push(`/movies/${id}`); 
    }, 
  }, 
}; 
</script> 
 
<style scoped> 
/* Add styles for MovieList */ 
</style>
