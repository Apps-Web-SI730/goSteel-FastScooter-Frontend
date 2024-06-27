import http from "@/core/shared/services/http-common"

class ReservationsApiService {

    getAllReservations() {
        return http.get("api/v1/rent")
    }

    getReservationById(reservationId) {
        return http.get(`api/v1/rent/${reservationId}`)
    }

    addReservation(reservation) {
        return http.post("api/v1/rent", reservation)
    }

    updateReservation(reservation) {
        return http.put(`api/v1/rent/${reservation.id}`, reservation)
    }

    getReservationsByUser(userId){
        return http.get(`/users/${userId}/reservations`)
    }

    deleteReservation(reservationId) {
        return http.delete(`/reservations/${reservationId}`) // typo fixed here
    }

}

export default new ReservationsApiService()