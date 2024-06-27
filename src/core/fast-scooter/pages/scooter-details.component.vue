<script>
import { ref } from "vue";
import BookingsService from "@/core/fast-scooter/services/bookings.service.js";
import ScootersService from "@/core/fast-scooter/services/scooters.service.js";
import TheHeaderContent from "@/core/public/components/the-header-content.component.vue";

export default {
  name: 'scooter-details.component',
  components: {TheHeaderContent},
  data(){
    return {
      scooter:null,
      value2: ref(1),
      icondisplay: ref(),
      templatedisplay: ref(),
      loading: ref(false),
      showSuccessMessage: ref(false),
      value: ref(4),
    }
  },
  created() {
    this.getScooterDetails();
  },
  methods: {
    async getScooterDetails() {
      try {
        const scooterId = this.$route.params.scooterID;
        const response = await ScootersService.getScooterById(scooterId);
        this.scooter = response.data;
        console.log(this.scooter);
      } catch (error) {
        console.error("Error fetching scooter details:", error);
      }
    },

    async loadBooking(){

      try {

        const bookingData = {
          startDate: "2024-06-27",
          endDate: "2024-06-29",
          price: 20,
          scooterId: this.scooter.id,
          userId: sessionStorage.getItem("usuario")
        }

        const response = await BookingsService.addBooking(bookingData);
        console.log('Scooter added:', response.data);

        this.showSuccessMessage = true;
      } catch (error) {
        console.error('Error adding scooter to JSON-server:', error);
      }

    },

    load() {
      this.loading.value = true;
      setTimeout(() => {
        this.loading.value = false;
        this.showSuccessMessage.value = true;
      }, 2000);
    }
  }
}
</script>


<template>
  <the-header-content></the-header-content>
  <div class="container-details">
    <div class="container-scooters-details">
      <div class="images-scooters">
        <img class="image-scooter" :src="scooter.imageUrl" alt="scooter">

      </div>
      <div class="text-scooter-details">
        <h1>{{ scooter.brand }}</h1>
        <h2>Marca: Xiaomi</h2>
        <h2>Estado: Perfecto</h2>
        <div class="text-scooter-details-time">
          <h2>Tiempo:</h2>
          <div class="card flex flex-wrap gap-3 p-fluid">
            <div class="flex-auto">
              <pv-input-number class="input-time-container" v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
            </div>
          </div>
          <h2>hr</h2>
        </div>
        <div class="text-scooter-details-take-time">
          <h2>Recoger: </h2>
          <div class="card flex flex-wrap gap-3 p-fluid">
            <div class="flex-auto">
              <pv-calendar class="input-take-time" v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" />
            </div>
            <div class="flex-auto">
              <pv-calendar class="input-take-time" v-model="templatedisplay" showIcon iconDisplay="input" timeOnly inputId="templatedisplay">
                <template #inputicon="{ clickCallback }">
                  <pv-input-icon class="pi pi-clock cursor-pointer" @click="clickCallback" />
                </template>
              </pv-calendar>
            </div>
          </div>
        </div>
        <h2>Entrega:</h2>
        <pv-message severity="success" v-if="showSuccessMessage">{{$t('rent-success')}}</pv-message>
        <pv-rating v-model="value" readonly :cancel="false" />
        <i class="pi pi-comment" style="font-size: 2.5rem"></i>
      </div>
      <div class="footer-price">
        <pv-tab-view>
          <pv-tab-panel :header="$t('price-total')">
            <h2>$ {{ scooter.price }}</h2>
          </pv-tab-panel>
        </pv-tab-view>
        <pv-button type="button" :label="$t('cta')" @click=loadBooking() class="button-buy" />

        <!--        <pv-button type="button" label="Rentar ahora"  :loading="loading" @click="load" class="button-buy" />-->
      </div>

    </div>
  </div>
</template>

<style scoped>
.container-details{
/*background-color: aqua;*/
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-scooters-details{
  display: flex;
}
.text-scooter-details{
  margin-left: 20px;

}

.text-scooter-details-time{
  display: flex;
  align-items: center;
}
.input-time-container{
  width: 100px;
}

.image-scooter{
  width: 500px;
  height: 500px;
}

.text-scooter-details-take-time{
  display: flex;
  align-items: center;
}
.input-take-time{
  width: 150px;
}

.footer-price{
  align-content: end;
}

.button-buy{
  width: 200px;
}
</style>