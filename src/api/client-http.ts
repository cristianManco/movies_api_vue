import axios, { type AxiosInstance } from 'axios'

class ClientHTTP {
  private api: AxiosInstance
  private apiKey: string = '29fc96b0' // Reemplaza con tu API key

  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.omdbapi.com/',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        apikey: this.apiKey // El API Key se pasa automáticamente con cada solicitud
      }
    })
  }

  getApi() {
    return this.api
  }
}

export default new ClientHTTP().getApi()

// <! -- https://www.omdbapi.com/?apikey=29fc96b0&s=Resident%20E -->
