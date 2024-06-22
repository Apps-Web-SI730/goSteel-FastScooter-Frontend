<script>
export default {
  name: 'the-footer-content'
}
</script>

<template>
  <div
    class="the-footer-content"
  >
    <div class="logobrand">&copy; 2024 FastScooter, Go Steel Corp.</div>

    <div class="contain">
      <div class="icons">
        <div class="politica">
          <a href="https://www.fastscooter.com" style="color: darkgray;padding:15px;">{{$t('terms-and-conditions')}}</a>
          <a href="https://www.fastscooter.com" style="color: darkgray;padding:15px;">{{$t('privacy-policy')}}</a>
          <a href="https://www.fastscooter.com" style="color: darkgray;padding:15px;">{{$t('helpcenter')}}</a>
          <a href="https://www.fastscooter.com" style="color: darkgray;padding:15px;">{{$t('download')}}</a>
          <a href="https://www.fastscooter.com" style="color: darkgray;padding:15px;">{{$t('about')}}</a>
          <a href="https://www.fastscooter.com" style="color: darkgray;padding:15px;">{{$t('cookies')}}</a>
        </div>
        <div class="redes">
          <a class="icon pi pi-tiktok" href="https://www.fastscooter.com" style="text-decoration: none;color: darkgray;padding:15px;"></a>
          <a class="icon pi pi-twitter" href="https://www.fastscooter.com" style="text-decoration: none;color: darkgray;padding:15px;"></a>
          <a class="icon pi pi-facebook" href="https://www.fastscooter.com" style="text-decoration: none;color: darkgray;padding:15px;"></a>
          <a class="icon pi pi-instagram" href="https://www.fastscooter.com" style="text-decoration: none;color: darkgray;padding:15px;"></a>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.t-option{
  font-size: 0.7rem;
}
.politica{
  display: flex;
  gap: 2px;
  font-size: 0.8rem;
  text-align: end;
}
.redes{
  display: flex;
  font-size: 0.8rem;
  text-align: end;
}

.logobrand{
  font-size: 0.8rem;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  color: darkgray;
}
.icons{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /**background-color: rgba(46,139, 87, 0.8);*/
  color: darkgray;
  font-size: 1.5rem;
  font-family: 'Nunito', sans-serif;
  bottom: 0;
  width: 100%;
  border: none;
  gap: 2px;

}
.icon{
  padding: 0;
  margin: 0;
}

.the-footer-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 20px;
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