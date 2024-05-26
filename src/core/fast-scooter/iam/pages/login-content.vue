<script >
import { LoginService } from '@/core/fast-scooter/iam/services/user-service.js'
import FakeToolbar from '@/core/fast-scooter/components/fake-toolbar.vue'

export default {
  name: 'login-content',
  components: { FakeToolbar },
  data() {
    return {
      email: "",
      password: "",
      remember: true,
      loginService: null,
      sessionSt:0
    };
  },
  created() {
    this.loginService = new LoginService();
    this.validateLocal();
  },
  methods: {
    checkEmail() {
      return this.email.includes('@')
    },
    login() {
      if (!this.checkEmail() || this.password.length < 5) {
        alert("Verify your email ")
      } else {
        console.log("testeadita")
        this.loginService.getAllUsers().then((users) => {
          console.log(users.data)
          let user = users.data.find(user => user.email === this.email && user.password === this.password);
          if (user) {
            sessionStorage.setItem('token', user.id);


            window.location.reload();
          } else {
            alert("Verify your  password")
          }
        })
      }
    },
    validateLocal() {
      this.sessionSt=sessionStorage.getItem('token');
      console.log("hola",this.sessionSt)
      return this.sessionSt !== null;

    }

  }
}
</script>


<template>
  <fake-toolbar/>
  <p v-if="validateLocal()"> holita de mar</p>

  <div class="justify-content-center flex justify-center align-items-center h-screen">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">

      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">{{ $t('login page-welcome') }}</div>
        <span class="text-600 font-medium line-height-3">{{ $t('login page-message') }}</span>
        <router-link to="/signup" class="font-medium no-underline ml-2 text-orange-500 cursor-pointer">
          {{ $t('loginpage-register') }}
        </router-link>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">{{ $t('loginpage-email') }}</label>
        <pv-input-text id="email1" type="text" class="w-full mb-3" v-model="email" />

        <label for="password1" class="block text-900 font-medium mb-2">{{ $t('loginpage-password') }}</label>
        <pv-input-text id="password1" type="password" class="w-full mb-3" v-model="password" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <pv-checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></pv-checkbox>
            <label for="rememberme1">{{ $t('loginpage-remember') }}</label>
          </div>
          <a href="#" class="font-medium no-underline ml-2 text-orange-500 text-right cursor-pointer">{{ $t('loginpage-forgot') }}</a>
        </div>

        <pv-button :label="$t('login')" icon="pi pi-user" class="w-full bg-orange-400 border-orange-200" @click="login"></pv-button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>