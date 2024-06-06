<script>
import UsersService from "@/core/fast-scooter/services/users.service.js";
import ScootersService from "@/core/fast-scooter/services/scooters.service.js";
import BookingsService from "@/core/fast-scooter/services/bookings.service.js";
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'

export default {
  name: "user-cart-shopping.component",
  components: { TheHeaderContent },
  data(){
    return{
      userId: 1,
      bookings: [],
      scooters: {},
    };
  },
  created() {
    if(typeof (Storage) !== 'undefined'){
      console.log(Storage);
      sessionStorage.setItem("usuario","1");
    }

    this.fetchBookings();
  },
  methods: {
    async fetchBookings() {
      try {
        // const response = await BookingsService.getBookingsByUser(this.userId);
        const response = await BookingsService.getBookingsByUser(sessionStorage.getItem("usuario"));
        this.bookings = response.data;

        for (const booking of this.bookings) {
          const scooterId = booking.scooterId;
          const scooterData = await ScootersService.getScooterById(scooterId);
          this.scooters[scooterId] = scooterData;
          console.log(this.scooters[scooterId].data);
        }
        console.log(this.bookings);
      }catch (error){
        console.log(error);
      }
    },
    async deleteBooking(bookingId) {
      try {
        await BookingsService.deleteBooking(bookingId);
        this.bookings = this.bookings.filter((booking) => booking.id !== bookingId);
        console.log("Booking deleted successfully:", bookingId);
      } catch (error) {
        console.error("Error deleting booking:", bookingId, error);
      }
    }
  },
  computed:{
    totalPrice(){
      return this.bookings.reduce((total, booking) => total + booking.priceTotal, 0);
    },
  }
}
</script>

<template>
  <the-header-content></the-header-content>
  <h1 class="p-3">{{$t('cart-title')}}</h1>
  <div class="rental-summary-container">

    <div v-if="bookings.length">
      <ul class="rented-scooters-list">
        <li v-for="booking in bookings" :key="booking.id">
          <div class="scooter-details">
            <img :src="scooters[booking.scooterId].data.image" alt="Scooter image" height="200" width="200" >
            <div class="scooter-info">
              <p>
                <strong>Brand:</strong> {{ scooters[booking.scooterId].data.brand }} <br>
                <strong>Description:</strong> {{ scooters[booking.scooterId].data.description }}<br>
                <strong>Price:</strong> {{ scooters[booking.scooterId].data.price }}<br>
                <strong>Rental Duration:</strong> {{ booking.duration }} hours<br>
                <strong>Pickup Zone:</strong> {{ booking.pickZone }}<br>
                <strong>Price Total:</strong> {{ booking.priceTotal }}
              </p>
              <pv-button @click="deleteBooking(booking.id)" icon="pi pi-trash" outlined/>
            </div>
          </div>

          <br> </li>
      </ul>

    </div>
    <div v-else>
      <p class="p-4">{{$t('cart-empty')}}</p>
    </div>

    <div class="payment-summary">
      <h1>{{$t('payment-title')}}</h1>
      <p>Total: ${{ totalPrice }}</p>
      <pv-button :label="$t('payment-now')"></pv-button>
      <pv-button :label="$t('payment-cancel')" outlined></pv-button>
      <!--      <router-link to="/scooter-search">-->
<!--        <pv-button label="Continue renting" outlined></pv-button>-->
<!--      </router-link>-->

    </div>
  </div>

</template>

<style scoped>

li{
  background: aqua;
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
  margin: 20px;
  border: 1px solid seagreen;
  border-radius: 30px;
  padding: 2rem 3rem 2rem 3rem;
  display:flex;
  flex-direction: column;

}



</style>