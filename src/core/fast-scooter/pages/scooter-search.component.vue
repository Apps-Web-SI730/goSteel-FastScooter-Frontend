<script>
import ScootersService from "@/core/fast-scooter/services/scooters.service.js";
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'
import favoritesService from "@/core/fast-scooter/services/favorites.service.js";


export default {
  name: 'scooter-search.component',
  components: { TheHeaderContent },

  data() {
    return {
      userId: sessionStorage.getItem("usuario"),
      scooters: null,
      layout: 'grid',
      searchTerm: '',
      filteredScooters: [],
      buttonOutlined: true,
    }
  },
  async mounted() {
    const response = await ScootersService.getAllScooters();
    console.log(response);
    this.scooters = response.data;
    this.filteredScooters = this.scooters;
  },
  methods: {
    filterScooters() {
      const searchTerm = this.searchTerm.toLowerCase().trim();
      this.filteredScooters = this.scooters.filter(scooter =>
        (scooter.brand.toLowerCase().includes(searchTerm) || scooter.description.toLowerCase().includes(searchTerm)));
    },
    navigateToCart() {
      this.$router.push('/cart-shopping');
    },
    navigateToScooterDetails(scooterId) {
      this.$router.push(`/search-scooter/${scooterId}`);
    },
    addFavorites(favorite) {

      //add this.userId to favorite object
      // const favoriteWithUserId = {
      //   userId: this.userId,
      //   scooterId: favorite.id,
      //   brand: favorite.brand,
      //   description: favorite.description,
      //   price: favorite.price,
      //   image: favorite.image
      // }
      const favoriteWithUserId = {
        userId: this.userId,
        scooterId: favorite,
      }
      console.log(this.userId);
      console.log(favorite);
      const response = favoritesService.addFavorites(favoriteWithUserId);
      // const response = favoritesService.addFavorites({ email: this.email, password: this.password });

      this.buttonOutlined = !this.buttonOutlined;
      console.log(favorite);
    }
  }
}
</script>

<template>
  <the-header-content></the-header-content>
  <div style="display: flex">
    <h1 class="p-3">{{$t('catalogue')}}</h1>
    <div class="icon-cart" style="display: flex; justify-content: flex-end; flex-grow: 1;">
      <pv-button icon="pi pi-shopping-cart" outlined @click="navigateToCart()" ></pv-button >
    </div>
  </div>

  <div class="card">
    <pv-data-view :value="filteredScooters" :layout="layout">
      <template #header>
        <div class="flex justify-content-end">
          <pv-input-text v-model="searchTerm" :placeholder="$t('search-scooter')" @input="filterScooters"/>
          <pv-data-view-options v-model="layout"/>
        </div>
      </template>

      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
            <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3"
                 :class="{ 'border-top-1 surface-border': index !== 0 }">
              <div class="md:w-10rem relative">
                <img class="block xl:block mx-auto border-round w-full" :src="`${item.imageUrl}`" :alt="item.name" width="300" height="200"/>
              </div>
              <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                  <div>
                    <span class="font-medium text-secondary text-sm">{{ item.brand }}</span>
                    <div class="text-lg font-medium text-900 mt-2">{{ item.description }}</div>
                  </div>
                  <div class="surface-100 p-1" style="border-radius: 30px">
                    <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                         style="border-radius: 30px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06)">
                      <span class="text-900 font-medium text-sm">5</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-5">
                  <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                  <div class="flex flex-row-reverse md:flex-row gap-2">
                    <pv-button icon="pi pi-heart" outlined></pv-button>
                    <pv-button icon="pi pi-shopping-cart" :label="$t('cta')"></pv-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 xl:col-6 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
              <div class="surface-50 flex justify-content-center border-round p-3">
                <div class="relative mx-auto">
                  <img class="border-round w-full"
                       :src="`${item.imageUrl}`" :alt="item.brand"
                       height="300px"
                       style="max-width: 300px" />
                </div>
              </div>
              <div class="pt-4">
                <div class="flex flex-row justify-content-between align-items-start gap-2">
                  <div>
                    <span class="font-medium text-secondary text-sm">{{ item.brand }}</span>
                    <div class="text-lg font-medium text-900 mt-1">{{ item.description }}</div>
                  </div>
                  <div class="surface-100 p-1" style="border-radius: 30px">
                    <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                         style="border-radius: 30px; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06)">
                      <span class="text-900 font-medium text-sm">5</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column gap-4 mt-4">
                  <span class="text-2xl font-semibold text-900">${{ item.price }}</span>
                  <div class="flex gap-2">
<!--                    <pv-button icon="pi pi-shopping-cart" :label="$t('cta')"></pv-button>-->
                    <router-link :to="`/search-scooter/${item.id}`">
                      <pv-button icon="pi pi-shopping-cart" :label="$t('cta') "></pv-button>
                    </router-link>
<!--                    add to favorites-->
                    <pv-button icon="pi pi-heart" @click=addFavorites(item.id) outlined></pv-button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-data-view>
  </div>
</template>

<style scoped>
.icon-cart{
  justify-items: end;
  margin: 35px 20px 20px 20px;
}

</style>