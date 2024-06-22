<script>
import TheHeaderContent from '@/core/public/components/the-header-content.component.vue'
import TheFooterContent from '@/core/public/components/the-footer-content.component.vue'
import TheBackground from '@/assets/images/body/background-1.jpg'

export default {
  name: 'home-view.component',
  components: {
    TheFooterContent,
    TheHeaderContent,
  },
  data() {
    return {
      imgSrc: TheBackground,
    };
  },
  methods:{
    navigateToScooters(){
      this.$router.push('/search-scooter');

  }
}
};
</script>

<template>
  <the-header-content/>

  <div class="container" >
    <div class="row">
      <div class="col-md-12" :style="{ backgroundImage: `url(${imgSrc})` }">
        <div :style="{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover' }">
          <img class="img-back" :src="'src/assets/images/body/background-1.jpg'" alt="background" />
          <div class="p-text-all">
            <h1 class="text-center text-black">{{$t('welcome')}} <span class="text-green-400">FastScooter!</span></h1>
            <div class="p-text">{{$t('cta-1')}} <span style="color: orange">scooters</span> {{$t('cta-2')}} <span style="border-bottom: 4px double yellow ; display: inline;">{{$t('cta-3')}}</span> {{$t('cta-4')}} <span style="text-decoration: underline wavy mediumpurple;">{{$t('cta-5')}}</span> {{$t('cta-6')}}
              <span style=" color: indianred">{{$t('cta-7')}}</span> {{$t('cta-8')}}.
              <br><h3>{{$t('cta-9')}} <span class="text-yellow">{{$t('cta-10')}}</span> {{$t('cta-11')}} <span class="text-pink">glamour</span> {{$t('cta-13')}}</h3></div>
          </div>
        <pv-button class="button-cta" @click="navigateToScooters()">{{$t('cta')}}</pv-button>
      </div>
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
  border: none;
}
 .img-back {
   background-image: url('@/assets/images/body/background-1.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   width:100%;
   z-index: 1;
   position: absolute;
   border: none;
 }

h1{
  line-height: 50px;
  z-index: 3;
  position: absolute;
  top: 26%;
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
  top: 43%;
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

.button-cta{
  z-index: 3;
  position: absolute;
  top: 67%;
  left: 67%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background-color: rgba(50, 194, 70, 0.5);
  padding: 10px 20px 10px 20px;
  border-radius: 30px;
  margin: 10px 80px 10px 80px;
  text-align:center;
  cursor: pointer;
  transition: 0.5s;
  font-family: 'Nunito', sans-serif;
}

.button-cta:hover{
  background-color: rgba(255, 135, 5, 0.8);
  color: white;
  border-color: rgba(255, 135, 5, 0.8);
}

/* Existing CSS... */

/* Media query for tablets and devices with width up to 768px */
@media (max-width: 768px) {
  .container {
    padding: 20px; /* Adjust padding as needed */
  }
  .img-back{
    object-fit:cover;
  }

  h1 {
    font-size: 2.5rem; /* Adjust font size as needed */
    top: 30%; /* Adjust position as needed */
    left: 50%; /* Adjust position as needed */
  }

  .p-text {
    top: 50%; /* Adjust position as needed */
    left: 50%; /* Adjust position as needed */
    font-size: 1rem; /* Adjust font size as needed */
    padding: 50px 20px 20px 20px; /* Adjust padding as needed */
    margin: 10px 40px 10px 40px; /* Adjust margin as needed */
  }
}

/* Media query for mobile devices with width up to 480px */
@media (max-width: 480px) {
  .container {
    padding: 0; /* Adjust padding as needed */
    border: none;
  }

  .img-back{
    background-position: -10% center;
    background-size: cover;
    height: 100%;
    width: 257%;
    border: none;
  }
  h1 {
    font-size: 3rem; /* Adjust font size as needed */
    line-height: 25px;
    top: 63%; /* Adjust position as needed */
    left: 50%; /* Adjust position as needed */
  }

  .p-text {
    top: 86%; /* Adjust position as needed */
    left: 13%; /* Adjust position as needed */
    font-size: 1.3rem; /* Adjust font size as needed */
    padding: 30px 10px 10px 10px; /* Adjust padding as needed */
    margin: 1px 2px 1px 2px; /* Adjust margin as needed */
  }
}
</style>