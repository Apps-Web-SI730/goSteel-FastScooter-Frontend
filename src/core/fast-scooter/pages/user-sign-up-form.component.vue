<template>
  <the-toolbar-default></the-toolbar-default>
  <div class="cont">
    <div class="container">
      <div class="justify-content-center flex justify-center align-items-center p-1">
        <div class="surface-card p-6 shadow-2 w-full lg:w-4">
          <div class="text-center mb-5">
            <div class="text-900 text-3xl font-medium mb-3">{{ $t('sign-welcome') }}</div>
            <span class="text-600 font-medium line-height-3">{{ $t('ready') }}</span>
            <a class="font-medium no-underline ml-2 text-orange-500 cursor-pointer" href="/login">{{ $t('login') }}</a>
          </div>
          <div>
            <label for="name" class="block text-900 font-medium mb-2">{{ $t('username') }}</label>
            <pv-input-text id="name" type="text" class="w-full mb-3" v-model="name" />

            <label for="email" class="block text-900 font-medium mb-2">{{ $t('email') }}</label>
            <pv-input-text id="email" type="text" class="w-full mb-3" v-model="email" />

            <label for="password" class="block text-900 font-medium mb-2">{{ $t('password') }}</label>
            <pv-input-text id="password" type="password" class="w-full mb-3" v-model="password" />

            <br><br>
            <pv-button
              :label="$t('signup')"
              icon="pi pi-user"
              class="btn w-full"
              @click="create()"
            ></pv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserApiService } from '@/core/fast-scooter/services/user-api.service.js';
import TheToolbarDefault from '@/core/public/components/the-toolbar-default.component.vue';

export default {
  name: 'user-sign-up-form',
  components: { TheToolbarDefault },
  data() {
    return {
      name: '', // Cambié 'username' a 'name'
      email: '',
      password: '',
      userApiService: new UserApiService()
    };
  },
  methods: {
    async create() {
      if (!this.validateForm()) return;

      const user = {
        Name: this.name, // Asegúrate de usar 'Name' con mayúscula inicial
        Email: this.email,
        Password: this.password,
      };

      try {
        const response = await this.userApiService.create(user);
        if (response.status === 201) {
          console.log(response.data.id);
          sessionStorage.setItem("usuario", response.data.id);
          this.$router.push('/home');
        } else {
          alert('Error creating user');
        }
      } catch (error) {
        console.error('Error creating user:', error);
        alert('Error creating user');
      }
    },

    validateForm() {
      if (!this.name || !this.email || !this.password) {
        alert('Please fill in all fields');
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
.cont {
  padding: 10px;
  margin: 0;
  background-image: linear-gradient(90deg, darkslategray, darkseagreen);
  height: 88.8vh;
}
.surface-card {
  border-radius: 30px;
}
.btn {
  background-color: darkorange;
  border-color: orangered;
}
.btn:hover {
  background-color: rgba(250, 105, 0, 0.9);
  border-color: #ff4500;
}
</style>
