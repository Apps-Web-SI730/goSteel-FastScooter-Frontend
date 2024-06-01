<script>
export default {
  name: 'the-header-content',
  data() {
    return {
      loading: false,
    };
  },
  methods:{
    handleLogout() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/login');
      }, 2000);
    },
    navigateToHome(){
      this.$router.push('/home');
    }
  },

};
</script>

<template>
  <pv-toolbar class="container-toolbar" >
    <template #start>
      <h1 @click="navigateToHome"><span class="text-green-600" >Fast</span><span>Scooter</span></h1>
    </template>

    <template #end>
      <p class="menu-options">
        <router-link to="/about">About</router-link>
        <router-link to="/support-client">Contact</router-link>
        <router-link to="/search-scooter">Reservation</router-link>

        <router-link to="/favorites">Favorites</router-link>
        <a @click="handleLogout" class="text-green-700">Log Out</a>
        <span v-if="loading" class="text-red-500">(In process...)</span>
      </p>
    </template>
  </pv-toolbar>
</template>

<style scoped>

.container-toolbar {
  background-color: rgba(0, 128, 0, 0);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  border: none;
  border-radius: 0;
  font-family: 'Nunito', sans-serif;
  font-weight: bolder;
}

h1 {
  padding-left:30px;
  text-shadow: 2px 3px 50px rgba(15, 120, 10, 0.3);
  font-weight: bolder;
  cursor: pointer;
}

.menu-options a {
  padding-right: 25px;
  text-decoration: none;
  color: black;
  font-size: 1.05rem;
  cursor: pointer;
}

.text-green-700 {
  color: #2f855a;
  font-weight: bolder;
  border: 2px solid #2f855a;
  padding: 10px 0 10px 25px;
  border-radius: 30px;
}

</style>