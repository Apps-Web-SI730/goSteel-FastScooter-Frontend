<script>
export default {
  name: 'the-header-content',
  components: {  },
  data() {
  return {
    loading: false,
    visible: false,
    value: { value: 'src/assets/images/languages/en.png', lang: 'en' },
    options: [
      { value:'src/assets/images/languages/en.png', lang: 'en' },
      { value:'src/assets/images/languages/espana.png', lang: 'es' },
    ],
    items: [
      {
        label: 'Router',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Styled',
            icon: 'pi pi-eraser',
            route: '/theming'
          },
          {
            label: 'Unstyled',
            icon: 'pi pi-heart',
            route: '/unstyled'
          }
        ]
      },
    ]
  };
},
  watch: {
  value(newVal) {
    this.$i18n.locale = newVal.lang;
  },
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

    <template #center>
      <p class="menu-options">
        <a >
          <router-link to="/home" class="text-black-100">
            <i class="pi pi-home"></i>
            {{ $t('home') }}
          </router-link>
        </a>
        <a >
          <router-link to="/search-scooter" class="text-black-100">
            <i class="pi pi-search"></i>
            {{ $t('search-scooter') }}
          </router-link>
        </a>
        <a >
          <router-link to="/my-reservations" class="text-black-100">
            <i class="pi pi-book"></i>
            {{ $t('my-reservation') }}
          </router-link>
        </a>
        <a>
          <router-link to="/cart-shopping" class="text-black-100">
            <i class="pi pi-shopping-cart"></i>
            {{ $t('check-out') }}
          </router-link>
        </a>
      </p>
    </template>

    <template #end>
      <div class="menu-options">
        <div class="button-change">
          <pv-select-button v-model="value" :options="options" optionLabel="value" dataKey="value">
            <template #option="slotProps">
              <img :src="slotProps.option.value" alt="Imagen de opción" />
            </template>
            <template #value="slotProps">
              <img :src="slotProps.option.value" alt="Imagen de opción" />
            </template>
          </pv-select-button>
        </div>
        <div class="card justify-content-center">
          <pv-sidebar class="items-sidebar" v-model:visible="visible" :header="$t('access-user')">
            <a >
              <router-link to="/user-profile" class="text-black-100">
                <i class="pi pi-cog"></i>
                {{ $t('settings') }}
              </router-link>
            </a>
            <br><br>
            <a >
              <router-link to="/favorites-scooters" class="text-black-100">
              <i class="pi pi-heart"></i>
              {{ $t('favorite-scooters') }}
              </router-link>
            </a>
            <br><br>
            <a>
              <router-link to="/support-client" class="text-black-100">
              <i class="pi pi-envelope"></i>
              {{ $t('support-client') }}
              </router-link>
            </a>
            <br><br>
            <a>
              <router-link to="/about-us" class="text-black-100">
              <i class="pi pi-user"></i>
                {{ $t('about-us') }}
              </router-link>
            </a>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <span class="space"/>
            <a @click="handleLogout" class="text-black-100">
            <i class="pi pi-sign-out"></i>
              {{ $t('logout') }}
            </a>
            <span v-if="loading" class="text-red-500"></span>
          </pv-sidebar>
          <pv-button class="user-icon-button" icon="pi pi-user" @click="visible = true" />
        </div>

      </div>
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
  padding-right: 15px;
  text-decoration: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
}

.text-black-100 {
  text-decoration: none;
  cursor: pointer;
  gap: 20px;
  color: rgba(0, 0, 0, 0.7);
}

.user-icon-button:hover {
  background-color: rgba(255, 140, 0, 1);
}

.menu-options {
  display: flex;
  align-items: center;
  gap: 10px;
}

.button-change img{
  width: 25px;
  height: 25px;
}


.user-icon-button {
  background-color: rgba(50, 134, 70, 0.8);
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  padding: 10px 10px 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  box-shadow:0 3px 1px rgba(47, 133, 90, 0.3);
}

.card.justify-content-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
}

.space{
  display: flex;
  flex-grow: 1;
}

/* Existing CSS... */

/* Media query for tablets and devices with width up to 768px */
@media (max-width: 768px) {
  .container-toolbar {
    flex-direction: column;
  }

  .menu-options a {
    padding: 10px 0; /* Adjust padding as needed */
  }

  .menu-options {
    flex-direction: column;
  }

  .button-change img {
    width: 20px; /* Adjust size as needed */
    height: 20px; /* Adjust size as needed */
  }

  .user-icon-button {
    padding: 5px; /* Adjust padding as needed */
  }

  .card.justify-content-center {
    gap: 100px; /* Adjust gap as needed */
  }
}

/* Media query for mobile devices with width up to 480px */
@media (max-width: 480px) {
  .container-toolbar {
    flex-direction: column;
  }

  .menu-options a {
    padding: 5px 0; /* Adjust padding as needed */
  }

  .menu-options {
    flex-direction: column;
  }

  .button-change img {
    width: 15px; /* Adjust size as needed */
    height: 15px; /* Adjust size as needed */
  }

  .user-icon-button {
    padding: 3px; /* Adjust padding as needed */
  }

  .card.justify-content-center {
    gap: 50px; /* Adjust gap as needed */
  }
}

/* Existing CSS... */

</style>