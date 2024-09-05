<template>
  <div v-if="movie">
    <h1>{{ movie?.title }}</h1>
    <p>{{ movie?.description }}</p>
    <img :src="movie?.poster" alt="Poster de la película" />
    <p><strong>Fecha de lanzamiento:</strong> {{ movie?.releaseDate }}</p>
    <router-link to="/">Volver a la lista de películas</router-link>
  </div>
  <div v-else>
    <p>Cargando detalles de la película...</p>
  </div>
</template>

<script>
import { useMoviesStore } from '@/stores/movie'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'MovieDetails',
  setup() {
    const route = useRoute()
    const movieStore = useMoviesStore()
    const movie = ref(null)

    onMounted(async () => {
      try {
        const movieId = route.params.id
        movie.value = await movieStore.fetchMovieById(movieId)
      } catch (error) {
        console.error('Error al cargar la película:', error)
      }
    })

    return { movie }
  }
}
</script>
