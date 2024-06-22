<template>
  <pv-card id="cards" class="h-auto max-w-14rem">
    <template #header> <img class="bg-cover bg-center h-14rem w-full border-round-top" :alt="name" :src="image" /> </template>

    <template #title> <p class="text-center">{{ name }}</p> </template>

    <template #subtitle> <p class="text-center">{{ role }}</p> </template>
  </pv-card>
</template>

<script>
export default {
  props: {
    name: String,
    role: String,
    image: String,
  },
};
</script>

<style scoped>
#cards{
  margin-top: 10px;
}
#cards:hover{
  transform: scale(1.1);
  transition: 0.5s;
}
</style>