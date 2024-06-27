import http from "@/core/shared/services/http-common"

class UsersApiService {

  getUsers() {
    return http.get("api/v1/user")
  }

  getUserById(id) {
    return http.get(`api/v1/user/${id}`)
  }

  createUser(user) {
    return http.post("api/v1/user", user)
  }

  updateUser(user) {
    return http.put(`api/v1/user/${user.id}`, user)
  }

  deleteUser(id) {
    return http.delete(`api/v1/user/${id}`)
  }

  getLocalUser() {
    let id = localStorage.getItem('id');
    return this.getUser(id);
  }

  /*getUserFromResponse(response) {
    return new User(
      response.id,
      response.name,
      response.password,
      response.email,
      response.company,
      response.role
    );
  }**/

}

export default new UsersApiService()