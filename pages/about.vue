<template>
  <div class="container"> 
    <img src="~/assets/images/velascode_picture.png" alt="Sebastian Velasco." />
    <p>
      Hello I’m Sebastian Velasco, a Web developer from Cali, Colombia and based in that same city.
    </p>
    <p>
      <strong>velas</strong>code_ its my personal brand, created because i wanted to give back to the 
      dev community in the form of Blog posts, coding streams on twitch and different posts on instagram.
    </p>
    <p>
      I also enjoy motorcycles and food, its safe to say that along with creating things using code those 
      are my hobbies, fun fact: i used to play Rugby but had an accident and needed shoulder surgery.
    </p>
    <p>
      On the technical side of things, I’ve worked with vainilla Js, html and css but also using different 
      frameworks and libraries such as React, Vue and Nuxt.
    </p>
    <p>
      most of my experience has been developing components and functionalities for companies in the financial 
      and management sector, but i also do things that are more creative, like UI and UX experiments with animations and grids.
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
  /* overflow */
  @apply overflow-scroll overflow-x-hidden;
  /* sizing */
  @apply w-full px-4 py-24;
  /* shadow */
  @apply shadow;
  /* alignment */
  @apply flex flex-col content-center items-center justify-between;
}
img {
  /* spacing */
  @apply mb-4 w-full;
}
p {
  /* spacing */
  @apply mb-4;
}
</style>
