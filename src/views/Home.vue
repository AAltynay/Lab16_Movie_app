
<template> 
  <div> 
    <h2>Top Movies</h2> 
    <MovieList :movies="movies" @filter="applyFilter" /> 
    <button @click="filterHighRating">Filter by Rating > 9</button> 
    <button @click="filterPost2000">Filter by Year > 2000</button> 
    <router-link to="/movies">Find Movie</router-link> 
  </div> 
</template> 
 
<script> 
import axios from 'axios'; 
import MovieList from '../components/MovieList.vue'; 
 
export default { 
  components: { MovieList }, 
  data() { 
    return { 
      movies: [], 
      originalMovies: [], 
    }; 
  }, 
  methods: { 
    async fetchMovies() { 
      const response = await axios.get('https://imdb-top-100-movies.p.rapidapi.com/', { 
        headers: { 
          'x-rapidapi-key': '6013afbe3fmshfbf1f211f1d308cp11425fjsne94ccd89e081', 
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com', 
        }, 
      }); 
      this.movies = response.data.slice(0, 20); 
      this.originalMovies = this.movies; 
    }, 
    applyFilter(filteredMovies) { 
      this.movies = filteredMovies; 
    }, 
    filterHighRating() { 
      this.movies = this.originalMovies.filter(movie => movie.imDbRating > 9); 
    }, 
    filterPost2000() { 
      this.movies = this.originalMovies.filter(movie => movie.year > 2000); 
    }, 
  }, 
  created() { 
    this.fetchMovies(); 
  }, 
}; 
</script>