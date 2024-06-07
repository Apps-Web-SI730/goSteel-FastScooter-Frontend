<script>
export default {
  name: 'the-footer-content'
}
</script>

<template>
  <div
    class="the-footer-content"
  >
    <div class="logobrand">&copy; 2024 FastScooter, C.O. Go Steel</div>

    <div class="contain">
      <div class="icons">
        <div class="politica">
          {{$t('terms-and-conditions')}}
          <br>
          {{$t('privacy-policy')}}
        </div>
        <div class="contactanos">
          <span class="t-option">{{$t('contact-us')}}</span>
          +51XXXXXXX
          <br>
          goSteel@gmail.com
        </div>
        <div class="redes">
          <i class="icon pi pi-tiktok"></i>
          <i class="icon pi pi-twitter"></i>
          <i class="icon pi pi-facebook"></i>
          <i class="icon pi pi-instagram"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.t-option{
  font-size: 1rem;
  font-weight: bold;
}

.contactanos{
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.8rem;
  text-align: end;
}
.politica{
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.8rem;
  text-align: end;
}
.redes{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 0.8rem;
  text-align: end;
}

.logobrand{
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
}
.icons{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /**background-color: rgba(46,139, 87, 0.8);*/
  color: white;
  font-size: 1.5rem;
  font-family: 'Nunito', sans-serif;
  bottom: 0;
  width: 100%;
  border: none;
  gap: 2px;

}
.icon{
  padding: 4px 4px 4px 4px;
}

.the-footer-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(47, 79, 79, 0.8);
  /**background-color: rgba(46,139, 87, 0.8);*/
  color: white;
  font-size: 1.5rem;
  font-family: 'Nunito', sans-serif;
  bottom: 0;
  width: 100%;
  border: none;
  z-index:4;
  position:fixed;
}

</style>