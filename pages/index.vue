<template>
  <div class="container">
    <img src="~/assets/images/velascode_illustration.png" alt="velasCode_ illustration by Laura Velasco." />
    <p id="container__text" class="container__text">
      making the web look and feel nice
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="postcss" scoped>
.container {
  /* sizing */
  @apply flex-1 pt-16;
  /* positioning */
  @apply flex flex-col justify-center items-center content-center;
  /* text */
  @apply font-mono; 
}
img {
  /* filters */
  @apply filter grayscale-50 saturate-50;
}
</style>
