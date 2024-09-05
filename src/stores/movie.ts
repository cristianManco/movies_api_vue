import { defineStore } from 'pinia'
import HTTP from '@/api/client-http'
import type { Movie } from '@/model/movie.model'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    listMovies: [] as Movie[], // La lista de películas que obtendremos
    loading: false, // Para manejar el estado de carga
    error: null as string | null // Para manejar errores
  }),
  actions: {
    // Función para obtener películas con una búsqueda predeterminada
    async getMovies(search: string = 'Resident') {
      try {
        this.loading = true
        this.error = null

        // Realiza la solicitud a la API
        const resp = await HTTP.get('', {
          params: {
            s: search
          }
        })

        // Si hay resultados, se almacenan en listMovies
        if (resp.data.Response === 'True') {
          this.listMovies = resp.data.Search
          console.log('Películas obtenidas:', this.listMovies) // Verificar aquí
        } else {
          this.error = resp.data.Error || 'No se encontraron resultados'
          this.listMovies = []
        }
      } catch (err) {
        this.error = 'Error al obtener películas'
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  }
})
