import http from '@/core/shared/services/http-common.js'
import { User } from '@/core/fast-scooter/iam/models/user.entity.js'

export class LoginService {

  getAllUsers() {
    return http.get('api/v1/user');
  }

  getUser(id) {
    return http.get(`api/v1/user/${id}`);
  }

  loginUser(user) {
    return http.post('api/v1/user/loginrev1', user);
  }

  getLocalUser() {
    let id = localStorage.getItem('id');
    return this.getUser(id);
  }

  getUserFromResponse(response) {
    return new User(
      response.id,
      response.name,
      response.password,
      response.email,
    );
  }
}