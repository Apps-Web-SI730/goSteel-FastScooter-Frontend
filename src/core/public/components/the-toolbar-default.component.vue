<script>
export default {
  name: 'the-toolbar-default',
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
  },
  data(){
    return {
      loading: false,
      visible: false,
      value: { value: 'src/assets/images/languages/en.png', lang: 'en' },
      options: [
        { value: 'src/assets/images/languages/en.png', lang: 'en' },
        { value: 'src/assets/images/languages/espana.png', lang: 'es' },
      ],
    }
  },
  watch: {
    value(newVal) {
      this.$i18n.locale = newVal.lang;
    },
  },
}

</script>

<template>
    <pv-toolbar class="container-toolbar" >
      <template #start>
        <h1 @click="navigateToHome"><span class="text-green-600" >Fast</span><span class="text-white">Scooter</span></h1>
      </template>

      <template #end>
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
      </template>
    </pv-toolbar>
</template>

<style scoped>
.container-toolbar {
  background: linear-gradient(90deg, darkslategray, darkseagreen);
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

.menu-options {
  display: flex;
  align-items: center;
  gap: 10px;
}

.button-change img{
  width: 25px;
  height: 25px;
}

</style>