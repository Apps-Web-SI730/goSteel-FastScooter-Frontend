<script>
export default {
  name: 'the-toolbar-default'
}
</script>

<template>
  <pv-toolbar class="container-toolbar" >
    <template #start>
      <h1 @click="navigateToHome"><span class="text-green-600" >Fast</span><span>Scooter</span></h1>
    </template>

    <template #center>
      <p class="menu-options">
        <a>
          <router-link to="/about-us" class="text-black-100">
            <i class="pi pi-user"></i>
            {{ $t('about-us') }}
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
            <a @click="handleLogout" class="text-black-100">
              <i class="pi pi-sign-out"></i>
              {{ $t('logout') }}
            </a>
            <span v-if="loading" class="text-red-500"></span>
          <pv-button class="user-icon-button" icon="pi pi-user" @click="visible = true" />
        </div>

      </div>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>