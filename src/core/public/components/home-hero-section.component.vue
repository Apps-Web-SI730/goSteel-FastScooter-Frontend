<script>
export default {
  name: 'home-hero-section',

  data() {
    return {
      images: [
        "src/assets/images/about-us/logo-brand.jpeg",
        "src/assets/images/about-us/4a77404c-ab95-4d98-9fb3-6b86e1f7f4f1.jpeg",
        "src/assets/images/about-us/OIG4.jpeg",
      ],
      currentImageIndex: 0,
    };
  },

  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },

  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },

  mounted() {
    setInterval(() => {
      this.nextImage();
    }, 1000);
  },
}
</script>

<template>
  <div class="about-component">
    <div class="first-part">
      <div>
        <h1 class="font-bolder text-900"><span class="text-green-500">Fast</span>Scooter</h1>
        <p>{{ $t('home-about-content') }}</p>
        <!--        <div class="buttons"></div>-->
      </div>
    </div>

    <div class="second-part">
      <div class="carousel">
        <img :src="currentImage" alt="Imagen del carrusel" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-component {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 40% 60%;
  font-family: 'Nunito', sans-serif;
}

.first-part {
  display: flex;
  align-items: center;
  padding: 0 20px 0 60px;
}

.first-part div {
  margin-right: 50px;
  padding: 40px;
  border-radius: 30px;
  border: dashed 3px darkslategrey;
}

.first-part h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.buttons button {
  margin-top: 10px;
}

.second-part {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /*background-color: red;*/
}

.carousel {
  position: relative;
  max-width: 100%;
}

.carousel img {
  width: 500px;
  height:450px;
  background-color: transparent;
}

/* .next-button {
 position: absolute;
 top: 50%;
 right: 0;
 border: none;
 background-color: transparent;
 transform: translateY(-50%);
 cursor: pointer;
}

.i-container {
 font-size: 30px;
} */
</style>