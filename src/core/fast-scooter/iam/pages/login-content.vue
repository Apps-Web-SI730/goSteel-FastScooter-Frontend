<template>
  <the-toolbar-default></the-toolbar-default>
  <div class="cont">
    <div class="justify-content-center flex justify-center align-items-center">
      <div class="surface-card p-6 shadow-2 w-full lg:w-6">
        <div class="text-center mb-5">
          <div class="text-900 text-3xl font-medium mb-3">{{ $t('login-page-welcome') }}</div>
          <span class="text-600 font-medium line-height-3">{{ $t('ready-sign') }}</span>
          <router-link to="/sign-up" class="font-medium no-underline ml-2 text-orange-500 cursor-pointer">
            {{ $t('signup') }}
          </router-link>
        </div>
        <div>
          <label for="email1" class="block text-900 font-medium mb-2">{{ $t('email') }}</label>
          <pv-input-text id="email1" type="text" class="w-full mb-3" v-model="email" />
          <label for="password1" class="block text-900 font-medium mb-2">{{ $t('password') }}</label>
          <pv-input-text id="password1" type="password" class="w-full mb-3" v-model="password" />
          <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
              <pv-checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></pv-checkbox>
              <label for="rememberme1">{{ $t('remember-account') }}</label>
            </div>
          </div>
          <pv-button :label="$t('login')" icon="pi pi-user" class="btn w-full" @click="login"></pv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginService } from '@/core/fast-scooter/iam/services/user-service.js';
import TheToolbarDefault from '@/core/public/components/the-toolbar-default.component.vue';

export default {
  name: 'login-content',
  components: { TheToolbarDefault },
  data() {
    return {
      email: "",
      password: "",
      remember: true,
      loginService: null,
      sessionSt: 0,
      checked: false,
    };
  },
  created() {
    this.loginService = new LoginService();
    this.validateLocal();
  },
  methods: {
    checkEmail() {
      return this.email.includes('@');
    },
    async login() {
      if (!this.checkEmail() || !this.password) {
        alert("Introduce a valid email and password");
      } else {
        try {
          const response = await this.loginService.loginUser({ email: this.email, password: this.password });
          if (response.data && response.data.id) {
            sessionStorage.setItem('usuario', response.data.id);
            this.$router.push('/home');
          } else {
            alert("Invalid username or password");
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert("Verify your password");
        }
      }
    },
    validateLocal() {
      this.sessionSt = sessionStorage.getItem('usuario');
      return this.sessionSt !== null;
    }
  }
};
</script>

<style scoped>
.cont {
  padding: 100px;
  margin: 0;
  background-image: linear-gradient(90deg, darkslategray, darkseagreen);
  height: 88.8vh;
}
.surface-card {
  border-radius: 30px;
}
body .p-checkbox .p-checkbox-box.p-highlight {
  border-color: orange !important;
  background-color: orange !important;
}
body .p-checkbox .p-checkbox-box.p-highlight i {
  color: white !important;
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
