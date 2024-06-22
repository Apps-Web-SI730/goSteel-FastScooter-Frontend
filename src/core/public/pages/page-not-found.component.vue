<script>

export default {
  name: 'page-not-found.component',
}
</script>

<template>
  <div class="notfound-container">
    <div class="full-width-container">
      <img src="@/assets/images/various/error.gif" alt="" class="full-width-image" />
    </div>

    <div class="after-fw">
      <h1>{{ $t('PageNotFound') }}</h1>

      <p>
        {{ $t('PageNotFoundMessage') }}
      </p>

      <a href="/home">
        <pv-button>{{ $t('PageNotFoundButton') }}</pv-button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.notfound-container {
  margin-bottom: 10rem;
}

.full-width-container{
  text-align: center;
}

.after-fw {
  text-align: center;
}
</style>