<!-- UserProfileButton.vue -->
<template>
  <PrimeButton :label="label" :class="class" @click="handleClick" />
</template>

<script>
import { defineComponent } from 'vue';
import PrimeButton from 'primevue/button';

export default defineComponent({
  name: 'UserProfileButton',
  components: {
    PrimeButton
  },
  props: {
    label: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
});
</script>

<style scoped>
/* Aquí puedes añadir estilos específicos para tu botón personalizado si lo deseas */
</style>
