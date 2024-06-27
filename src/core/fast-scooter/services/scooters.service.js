import http from "@/core/shared/services/http-common"

class ScootersApiService {

  getAllScooters() {
    return http.get("api/v1/scooter")
  }

  getScooterById(scooterId) {
    return http.get(`api/v1/scooter/${scooterId}`)
  }

  addScooter(scooter) {
    return http.post("api/v1/scooter", scooter)
  }

  updateScooter(scooter) {
    return http.put(`api/v1/scooter/${scooter.id}`, scooter)
  }

  deleteScooter(scooterId) {
    return http.delete(`api/v1/scooter/${scooterId}`)
  }

}

export default new ScootersApiService()