import axios from "axios";

const http = axios.create({
  baseURL:'https://localhost:44312/',

})
export class UserApiService {
  async getAll() {
    return await http.get('api/v1/user')
  }

  async getById(id) {
    return await http.get('api/v1/user/'+id)
  }
  async create(body) {
    return await http.post('api/v1/user/signuprev1',body)
  }
  async update(body,id) {
    return await http.put('api/v1/user/'+id,body)
  }    async delete(id) {
    return await http.delete('api/v1/user/'+id)
  }
}