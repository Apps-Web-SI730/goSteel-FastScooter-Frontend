<script>
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'
import TheFooterContent from '@/core/public/components/the-footer-content.component.vue'


export default {
  name: 'home-view.component',
  components: {
    TheFooterContent,
    TheHeaderContent,
  }
}
</script>

<template>
  <the-header-content/>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <image class="img-back" :src="'src/assets/images/body/background-1.jpg'" alt="background" />
        <h1 class="text-center text-black">¡Bienvenido a <span class="text-green-400">FastScooter!</span></h1>
        <div class="p-text">Donde nuestros <span style="color: orange">scooters</span> son tus compañeros <span style="border-bottom: 4px double yellow ; display: inline;">perfectos</span> para un viaje <span style="text-decoration: underline wavy mediumpurple;">suave</span> y sin
          <span style=" color: indianred">estrés</span>.
          <br><h3>¡Vive la vida al <span class="text-yellow">máximo</span> y viaja con <span class="text-pink">glamour</span> con <span>FastScooter</span>!</h3></div>
        <pv-button></pv-button>
      </div>
    </div>
  </div>
  <the-footer-content></the-footer-content>
</template>

<style scoped>

.text-yellow{
  color: greenyellow;
  text-shadow: greenyellow 2px 2px 10px;
}
.text-pink{
  color:hotpink;
  text-shadow: hotpink 2px 2px 10px;
}

.container{
  font-family: 'Nunito', sans-serif;
}
 .img-back {
   background-image: url('@/assets/images/body/background-1.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   width:100%;
   z-index: 1;
 }

h1{
  line-height: 50px;
  z-index: 3;
  position: absolute;
  top: 37%;
  left: 72.4%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 10px rgba(0,0,0,1);
}
.p-text{
  z-index: 2;
  position: absolute;
  top: 54.5%;
  left: 50%;
  transform: translate(-6%, -40%);
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(0,0,0,1);
  color: white;
  background-color: rgba(0,0,0,0.5);
  padding:90px 40px 40px 40px;
  border-radius: 30px;
  margin: 10px 80px 10px 80px;
  text-align:center;
}


</style>