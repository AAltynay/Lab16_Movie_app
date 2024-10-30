<template> 
  <div> 
    <h2>{{ movie.title }}</h2> 
    <img :src="movie.image" alt="Movie Poster" /> 
    <p>Year: {{ movie.year }}</p> 
    <p>Rating: {{ movie.imDbRating }}</p> 
    <p>Genres: {{ movie.genres.join(', ') }}</p> 
    <h3>Actors</h3> 
    <ul> 
      <li v-for="actor in movie.actors.slice(0, 3)" :key="actor.id"> 
        <img :src="actor.image" alt="Actor Photo" /> 
        <p>{{ actor.name }} as {{ actor.character }}</p> 
      </li> 
    </ul> 
    <h3>Similar Movies</h3> 
    <MovieList :movies="similarMovies" /> 
  </div> 
</template> 
 
<script> 
import axios from 'axios'; 
import MovieList from './MovieList.vue'; 
 
export default { 
  components: { MovieList }, 
  props: ['id'], 
  data() { 
    return { 
      movie: {}, 
      similarMovies: [], 
    }; 
  }, 
  async created() { 
    const response = await axios.get(`https://imdb-api.com/en/API/Title/<API_KEY>/${this.id}`); 
    this.movie = response.data; 
    this.similarMovies = response.data.similarMovies || []; 
  }, 
}; 
</script>