import type { AxiosInstance } from 'axios'
import axios from 'axios'

class ClientHTTP {
  private api: AxiosInstance
  private apiKey: string = '690d22ef'

  constructor() {
    this.api = axios.create({
      baseURL: 'https://www.omdbapi.com/?',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        apikey: this.apiKey
      }
    })
  }

  getApi() {
    return this.api
  }
}
// <! -- https://www.omdbapi.com/?apikey=29fc96b0&s=Resident%20E -->

export default new ClientHTTP().getApi()
