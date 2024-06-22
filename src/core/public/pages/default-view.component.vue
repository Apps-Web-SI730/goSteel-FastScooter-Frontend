<script>
import TheToolbarDefault from '@/core/public/components/the-toolbar-default.component.vue'
import TheBackground from '@/assets/images/body/background-1.jpg'
import TheFooterContent from '@/core/public/components/the-footer-content.component.vue'

export default {
  name: 'default-view',
  components: { TheFooterContent, TheToolbarDefault },
  data() {
    return {
      imgSrc: TheBackground,
    };
  },
  methods:{
    handleLogin() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/login');
      }, 500);
    },
    handleSingup() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/sign-up');
      }, 500);
    },
  }
}
</script>

<template>
  <the-toolbar-default/>
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
          <div class="form-default">
            <h2 class="h1-form">{{$t('join')}}</h2>
            <p>
              {{$t('join-content')}}
              <br><br>
              <pv-button class="button-sign" @click="handleSingup" style="font-family: 'Nunito', sans-serif; font-weight: bold;">{{$t('signup')}}</pv-button>
              <br>
              <span style="font-size: 0.8rem; line-height: 0.1rem; color:dimgray;">{{$t('join-content-2')}} <a href="https://www.fastscooter.com" style="color: dimgrey;">{{$t('terms-and-conditions')}}</a> {{$t('join-content-3')}} <a href="https://www.fastscooter.com" style="color: dimgrey;">{{$t('privacy-policy')}}</a>, {{$t('join-content-4')}} <a href="https://www.fastscooter.com" style="color: dimgrey;">{{$t('cookies')}}</a>.</span>
            </p>
            <p style="font-size:0.9rem;">
              {{$t('ready')}} <a @click="handleLogin" style="cursor: pointer;text-decoration:underline;font-size:0.9rem;color: orange;font-weight:bolder;">{{$t('login')}}</a>
            </p>
          </div>

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
  top: 30%;
  left: 35%;
  right: 40%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 10px rgba(0,0,0,1);
}
.p-text{
  z-index: 2;
  position: absolute;
  top: 45.5%;
  left: 17%;
  right: 43.5%;
  transform: translate(-6%, -40%);
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(0,0,0,1);
  color: white;
  background-color: rgba(0,0,0,0.5);
  padding:130px 40px 1px 40px;
  border-radius: 30px;
  margin: 10px 80px 10px 80px;
  text-align:center;
}

.form-default{
  background-color: white;
  z-index: 4;
  position: absolute;
  top: 26%;
  left: 53%;
  right: 18%;
  border-radius: 30px;
  margin:0 20px 0 20px;
  padding:0 40px 40px 40px;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align:center;
  border-color: dimgray;
  border-style: dashed;
}

.form-default span{
  line-height:1px;
}

.h1-form{
  font-size: 3rem;
  font-weight: bolder;
  margin:35px 20px 20px 20px;
  color: orange;
  text-shadow: 2px 2px 10px rgba(255,165,0,1);
  text-align: center;
}

.button-sign{
  padding: 10px 50px 10px 50px;
  border-radius: 30px;

}

.button-sign:hover{
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
    width: 100%;
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