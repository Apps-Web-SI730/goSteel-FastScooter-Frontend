import axios from "axios";

const http = axios.create({
  baseURL:'http://localhost:3000/',

})
export class PaymentApiService {
  async getAll() {
    return await http.get('paymentData')
  }
  async getById(id) {
    return await http.get('paymentData/'+id)
  }
  async create(body) {
    return await http.post('paymentData',body)
  }
  async update(body,id) {
    return await http.put('paymentData/'+id,body)
  }    async delete(id) {
    return await http.delete('paymentData/'+id)
  }
}