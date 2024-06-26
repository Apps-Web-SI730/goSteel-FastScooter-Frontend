<script>
import FavoritesService from "@/core/fast-scooter/services/favorites.service.js";
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'

export default {
  name: 'scooter-favorites.component',
  components: { TheHeaderContent },

  data() {
    return {
      userId: sessionStorage.getItem("usuario"),
      favorites: null,
      layout: 'grid'
    }
  },
  async mounted() {
    await this.fetchFavorites();
  },
  methods:{
    async fetchFavorites() {
      try {
        const res = await FavoritesService.getFavoritesByUser(this.userId);
        this.favorites = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteFavorites(favorites){
      try{
        const response = await FavoritesService.deleteFavorite(favorites);
        if(response.status === 200){
          await this.fetchFavorites();
        }
      }
      catch (error){
        console.error(error);
      }
    }
  }
}


</script>

<template>
  <the-header-content></the-header-content>
  <h1 class="p-3">{{$t('fav-tittle')}}</h1>
  <div class="card">
    <pv-data-view :value="favorites">
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
            <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
              <div class="md:w-10rem relative">
                <img class="block xl:block mx-auto border-round w-full" :src="`${item.image}`" :alt="item.name" height="200" width="200" />
              </div>
              <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                  <div>
                    <span class="font-medium text-secondary text-sm">{{ item.brand }}</span>
                    <div class="text-lg font-medium text-900 mt-2">{{ item.description }}</div>
                  </div>
                  <div class="surface-100 p-1" style="border-radius: 30px">
                    <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                      <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-5">
                  <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                  <div class="flex flex-row-reverse md:flex-row gap-2">
                    <pv-button icon="pi pi-heart" @click="deleteFavorites(item.id)"></pv-button>
                    <pv-button icon="pi pi-shopping-cart" :label="$t('cta')"></pv-button>
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

</style>