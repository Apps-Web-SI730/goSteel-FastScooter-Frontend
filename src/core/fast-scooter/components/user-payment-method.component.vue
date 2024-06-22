<script>
import {required, email, minLength} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'

export default {
  name: 'user-payment-method.component',
  components: { TheHeaderContent },

  data() {
    return {
      PaymentData: {
        name_of_user: '',
        num_card: '',
        name_card: '',
        email: '',
        exp_year: '',
        month_exp: '',
        cvv: '',
      },
    };
  },
  methods:{
    addPaymentMethod(){
      alert('Método de pago añadido exitosamente');
      setTimeout(() => {
        this.$router.push('/my-reservations');
      }, 2000);
    }
  },

  validations(){
    return {
      PaymentData: {
        name_of_user: {required},
        num_card: {required, minLength: minLength(16)},
        name_card: {required},
        email: {required, email},
        exp_year: {required, minLength: minLength(4)},
        month_exp: {required, minLength: minLength(2)},
        cvv: {required, minLength: minLength(3)},
      },
    };
  },

  setup() {
    const v$ = useVuelidate()
    return {v$}
  },

}
</script>

<template>
  <the-header-content></the-header-content>
  <div class="container">
    <form @submit.prevent="addPaymentMethod">
      <div class="row">
        <h1 class="title">Métodos de pago</h1>

        <div class="col">
          <div class="inputBox">
            <label for="name_of_user">Nombre completo</label>
            <input
              v-model="PaymentData.name"
              type="text"
              id="name_of_user"
              placeholder="Example Name: John Doe"
              required
            />
            <div v-if="v$.PaymentData.name_of_user.$error" class="error">Nombre Completo es requerido</div>
          </div>

          <div class="inputBox">
            <label for="card">Tarjetas que aceptamos</label>
            <img src="@/assets/images/payment-view/card_images.png" alt="Cards accepted for payment" />
          </div>

          <div class="inputBox">
            <label for="num_card">Número de tarjeta</label>
            <input
              v-model="PaymentData.num_card"
              type="text"
              id="num_card"
              placeholder="1111-2222-3333-4444"
              required
            />
          </div>

          <div class="inputBox">
            <label for="name_card">Nombre de su tarjeta</label>
            <input
              v-model="PaymentData.name_card"
              type="text"
              id="name_card"
              placeholder="Example card name"
              required
            />
          </div>

          <div class="inputBox">
            <label for="email">Correo electrónico</label>
            <input
              v-model="PaymentData.email"
              type="email"
              id="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <div class="flex">
            <div class="inputBox">
              <label for="exp_year">Año de exp</label>
              <input
                v-model="PaymentData.exp_year"
                type="text"
                id="exp_year"
                placeholder="2022"
                required
              />
            </div>
            <div class="inputBox">
              <label for="month_exp">Mes de exp</label>
              <input
                v-model="PaymentData.month_exp"
                type="text"
                id="month_exp"
                placeholder="05"
                required
              />
            </div>
          </div>

          <div class="inputBox" style="margin-top: 0">
            <label for="cvv">CVV</label>
            <input
              v-model="PaymentData.cvv"
              type="text"
              id="cvv"
              placeholder="1234"
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" class="submit-btn">Añadir Método de Pago</button>
    </form>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 100%;
  background-color: #30391f;
  font-family: 'Nunito', sans-serif;
}

.container form {
  max-width: 500px;
  max-height: fit-content;
  background: #f1ece7;
  border: 3px solid #30391f;
  border-radius: 20px;
  box-shadow: black 0 0 30px;
  padding: 30px;
}

.container form .row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.container form .row .col {
  flex: 1 1 50%;
}

.container form .row .col .inputBox {
  margin-bottom: 10px;
}

.container form .row .col .inputBox label {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
}

.container form .row .col .inputBox input {
  width: 100%;
  border: 1px solid dimgray;
  padding: 10px 10px;
  font-size: 15px;
}

.container form .row .col .inputBox input:focus {
  border: 1px solid #1F4406;
}

.container form .row .col .inputBox img {
  height: 25px;
  filter: drop-shadow(0 0 1px #000);
  transition: transform 0.2s ease-in-out;
}

.container form .row .col .inputBox img:hover {
  transform: scale(1.1);
}

.container form .row .col .inputBox img:active {
  transform: scale(0.9);
}

.container form .row .col .flex {
  display: flex;
  gap: 10px;
}

.container form .submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 17px;
  margin-top: 10px;
  background-color: #30391f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
}

.container form .submit-btn:hover {
  background-color: #1F4406;
}

.container form .submit-btn:active {
  background-color: #1F4406;
}

input::placeholder {
  font-style: italic;
  font-family: 'Nunito', sans-serif;
}

h1.title {
  font-size: 2rem;
  margin: 0;
}

</style>