import http from "@/core/shared/services/http-common"

class UsersApiService {

  getUsers() {
    return http.get("/users")
  }

  getUserById(userId) {
    return http.get(`/users/${userId}`)
  }

  createUser(user) {
    return http.post("/users", user)
  }

  updateUser(user) {
    return http.put(`/users/${user.id}`, user)
  }

  deleteUser(userId) {
    return http.delete(`/users/${userId}`)
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