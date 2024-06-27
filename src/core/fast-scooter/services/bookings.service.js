import http from "@/core/shared/services/http-common"

class BookingsApiService {

  getAllBookings() {
    return http.get("api/v1/rent")
  }

  getBookingById(bookingId) {
    return http.get(`api/v1/rent/${bookingId}`)
  }

  addBooking(booking) {
    return http.post("api/v1/rent", booking)
  }

  updateBooking(booking) {
    return http.put(`api/v1/rent/${booking.id}`, booking)
  }

  getBookingsByUser(userId){
    return http.get(`api/v1/rent/userId/${userId}`)
  }

  deleteBooking(bookingId) {
    return http.delete(`api/v1/rent/${bookingId}`)
  }

}

export default new BookingsApiService()