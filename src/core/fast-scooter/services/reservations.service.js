import http from "@/core/shared/services/http-common"

class ReservationsApiService {

    getAllReservations() {
        return http.get("/reservations")
    }

    getReservationById(reservationId) {
        return http.get(`/reservations/${reservationId}`)
    }

    addReservation(reservation) {
        return http.post("/reservations", reservation)
    }

    updateReservation(reservation) {
        return http.put(`/reservations/${reservation.id}`, reservation)
    }

    getReservationsByUser(userId){
        return http.get(`/users/${userId}/reservations`)
    }

    deleteReservation(reservationId) {
        return http.delete(`/reservations/${reservationId}`) // typo fixed here
    }

}

export default new ReservationsApiService()