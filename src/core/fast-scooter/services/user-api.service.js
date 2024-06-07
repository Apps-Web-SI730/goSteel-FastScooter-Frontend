import axios from "axios";

const http = axios.create({
  baseURL:'http://localhost:3000/',

})
export class UserApiService {
  async getAll() {
    return await http.get('users')
  }

  async getById(id) {
    return await http.get('users/'+id)
  }
  async create(body) {
    return await http.post('users',body)
  }
  async update(body,id) {
    return await http.put('users/'+id,body)
  }    async delete(id) {
    return await http.delete('users/'+id)
  }



}