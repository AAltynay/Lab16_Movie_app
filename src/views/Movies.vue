<template> 
  <div> 
    <h2>Search Movies</h2> 
    <SearchForm @search="searchMovies" /> 
    <MovieList :movies="searchResults" /> 
  </div> 
</template> 
 
<script> 
import axios from 'axios'; 
import MovieList from '../components/MovieList.vue'; 
import SearchForm from '../components/SearchForm.vue'; 
 
export default { 
  components: { MovieList, SearchForm }, 
  data() { 
    return { 
      searchResults: [], 
    }; 
  }, 
  methods: { 
    async searchMovies(query) { 
      const response = await axios.get(`https://imdb-api.com/en/API/SearchTitle/<API_KEY>/${query}`); 
      this.searchResults = response.data.results || []; 
    }, 
  }, 
}; 
</script>