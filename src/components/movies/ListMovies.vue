<template>
  <div class="movies-list">
    <CardMovie
      v-for="movie in movies"
      :key="movie.imdbID"
      :id="movie.imdbID"
      :poster="movie.Poster"
      :title="movie.Title"
    />
  </div>
</template>

<script>
import CardMovie from './CardMovie.vue'

export default {
  components: {
    CardMovie
  },
  data() {
    return {
      movies: [] // Inicialmente vacío, luego se llenará con las películas obtenidas
    }
  },
  mounted() {
    // Simulamos la obtención de datos de películas. Normalmente, esto vendría de una API.
    this.movies = [
      {
        Title: 'Resident Evil',
        Year: '2002',
        imdbID: 'tt0120804',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYmI3YjJkN2…Tk2YTQtYzE5YWU5ODI1MzJmXkEyXkFqcGc@._V1_SX300.jpg'
      },
      {
        Title: 'Resident Evil: Apocalypse',
        Year: '2004',
        imdbID: 'tt0318627',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTc1NTUxMzk0Nl5BMl5BanBnXkFtZTcwNDQ1MDIzMw@@._V1_SX300.jpg'
      }
      // Más películas...
    ]
  }
}
</script>

<style scoped>
.movies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}
</style>
