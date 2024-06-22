<script>
import HomeGetStarted from '@/core/public/components/home-get-started.component.vue'
import HomeScooters from '@/core/public/components/home-scooters.component.vue'
import HomeContact from '@/core/public/components/home-contact.component.vue'
import HomeHeroSection from '@/core/public/components/home-hero-section.component.vue'
import HomeTeam from '@/core/public/components/home-team.component.vue'
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'

export default {
  name: 'home-about-us.component',
  components: { TheHeaderContent, HomeTeam, HomeHeroSection, HomeContact, HomeScooters, HomeGetStarted }
}
</script>

<template>
  <the-header-content/>

  <div class="w-md justify-center mx-auto px-4">
    <home-hero-section/>
    <home-scooters />
    <home-team />
    <home-get-started />
    <home-contact />

  </div>
</template>

<style scoped>
.w-md {
  max-width: 80rem;
}
</style>