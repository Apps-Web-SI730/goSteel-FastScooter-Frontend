<script>
import { ref, computed } from 'vue';

export default {
  name: 'home-contact',

  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const formSubmitted = ref(false);

    // Computed property that checks if any of the form fields are empty
    const formIncomplete = computed(() => {
      return !name.value || !email.value || !message.value;
    });

    function isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function submitForm() {
      if (formIncomplete.value) {
        console.log('Form incomplete!');
        return;
      } else if (!isValidEmail(email.value)) {
        console.log('Invalid email!');
        alert('Invalid email!');
        return;
      }

      console.log('Form submitted!');
      formSubmitted.value = true;
    }

    return {
      name,
      email,
      message,
      formIncomplete,
      formSubmitted,
      submitForm,
    };
  },
}
</script>

<template>
  <div class="container-form">
    <div class="container-input">
      <h2>{{$t('contact-us-title')}}</h2>

      <p>{{ $t('contact-us-sub-title') }}</p>

      <form class="m-3 flex-row" v-on:submit.prevent="submitForm" :class="{ 'form-complete': !formIncomplete }">
        <pv-input-text v-model="name" :placeholder="$t('name')" class="w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />

        <pv-input-text v-model="email" :placeholder="$t('email')" class="my-3 w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />

        <pv-textarea v-model="message" :placeholder="$t('message')" rows="5" class="mb-3 w-full" :class="formIncomplete ?'f-incomplete' : 'f-complete'" />

        <pv-button :label="$t('send')" type="submit" :class="formIncomplete ? 'bg-gradient-to-r from-red-500 to-red-700': 'bg-gradient-to-r from-green-500 to-blue-500 transition duration-500'" class="w-full"/>
      </form>
    </div>
  </div>

</template>

<style scoped>
input[type="email"],
input[type="text"],
textarea {
  border-radius: 5px;
  padding: 0.5rem;
  transition: border-color 0.5s;
}

pv-button:focus {
  box-shadow: 0 0 5px rgba(245, 245, 245, 0);
}

.form-complete .f-complete {
  color: #E16F58;
}

.container-form{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.text-center{
  text-align: center;
}
</style>