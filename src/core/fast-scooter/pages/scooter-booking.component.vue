<script>
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'
import ReservationsService from "@/core/fast-scooter/services/reservations.service.js";
import BookingsService from "@/core/fast-scooter/services/bookings.service.js";
import ScootersService from "@/core/fast-scooter/services/scooters.service.js";


export default {
  name: 'scooter-booking',
  components: {
    TheHeaderContent
    // Import components here
  },
  data() {
    return {
      userId: sessionStorage.getItem("usuario"),
      reservations: [],
      scooters: {},
    };
  },
  created() {
    // if (typeof (Storage) !== 'undefined') {
    //   console.log(Storage);
    //   sessionStorage.setItem("usuario", "1");
    // }

    this.fetchBookings();
  },
  // async mounted() {
  //   try {
  //     const response = await ReservationsService.getAllReservations();
  //     this.reservations = response.data;
  //     this.$forceUpdate();
  //     console.log(this.reservations);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  methods: {
    async deleteReservation(bookingId) {
      const confirmed = await this.showConfirmDialog();
      if (confirmed) {
        try {
          console.log(bookingId)
          await ReservationsService.deleteReservation(bookingId);
          this.reservations = this.reservations.filter((booking) => booking.id !== bookingId);
          console.log("Booking deleted successfully:", bookingId);
        } catch (error) {
          console.error("Error deleting booking:", bookingId, error);
        }
      }
    },
    showConfirmDialog() {
      return new Promise((resolve) => {
        const confirmation = confirm("¿Estás seguro de que quieres eliminar esta reserva? Esta acción no se puede deshacer.");
        resolve(confirmation);
      });
    },


    async fetchBookings() {
      try {
        // const response = await BookingsService.getBookingsByUser(this.userId);
        const response = await ReservationsService.getReservationsByUser(this.userId);
        this.reservations = response.data;

        for (const reservation of this.reservations) {
          const scooterId = reservation.scooterId;
          const scooterData = await ScootersService.getScooterById(scooterId);
          this.scooters[scooterId] = scooterData;
          console.log(this.scooters[scooterId].data);
        }
        console.log(this.bookings);
      } catch (error) {
        console.log(error);
      }
    }
  }
  // Add your methods here

}

</script>

<template>
  <the-header-content></the-header-content>
  <h1 class="p-3">{{$t('cart-booking')}}</h1>
  <div class="rental-summary-container">

    <div v-if="reservations.length">
      <ul class="rented-scooters-list">
        <li v-for="reservation in reservations" :key="reservations.id">
          <div class="scooter-details">
            <img :src="scooters[reservation.scooterId].data.image" alt="Scooter image" height="200" width="200">
            <div class="scooter-info">
              <p>
                <strong>Brand:</strong> {{ reservation.id }} <br>
                <strong>Description:</strong> {{ scooters[reservation.scooterId].data.description }}<br>
                <strong>Price:</strong> {{ scooters[reservation.scooterId].data.price }}<br>
                                <strong>Rental Duration:</strong> {{ reservation.duration }} hours<br>
                                <strong>Pickup Zone:</strong> {{ reservation.pickZone }}<br>
                                <strong>Price Total:</strong> {{ reservation.priceTotal }}
              </p>
              <pv-button @click="deleteReservation(reservation.id)" icon="pi pi-trash" outlined/>
            </div>
          </div>

          <br></li>
      </ul>

    </div>
    <div v-else>
      <p class="p-3">{{$t('cart-booking-empty')}}</p>
    </div>
  </div>
</template>

<style scoped>
li{
  /*background: aqua;*/
  border: 1px solid #ddd;

}

.rental-summary-container {
  display: grid;
  grid-template-columns: 1fr auto;

}

.rented-scooters-list {
  list-style: none;
  padding: 0;
}

.scooter-details {
  display: flex;
  margin-top: 20px;
  width: 100%;
}

.scooter-info {
  flex: 1;
  padding: 10px;
  margin-left: 10px;
}

.scooter-info p {
  margin-bottom: 5px;
}

.scooter-info strong {
  font-weight: bold;
}

.payment-summary {
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 1rem;
  display:flex;
  flex-direction: column;

}
</style>