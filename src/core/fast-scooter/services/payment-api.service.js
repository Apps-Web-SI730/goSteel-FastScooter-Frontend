import axios from "axios";

const http = axios.create({
  baseURL:'http://localhost:5087/',

})
export class PaymentApiService {
  async getAll() {
    return await http.get('api/v1/payment')
  }
  async getById(id) {
    return await http.get('api/v1/payment/userId/'+id)
  }
  async create(body) {
    return await http.post('api/v1/payment',body)
  }
  async update(body,id) {
    return await http.put('api/v1/payment/'+id,body)
  }    async delete(id) {
    return await http.delete('api/v1/payment/'+id)
  }
}