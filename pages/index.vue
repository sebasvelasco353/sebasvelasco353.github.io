<template>
  <div class="container">
    <div class="container__center">
      <h1>velas<span>code_</span></h1>
      <img src="~/assets/images/velascode_illustration.png" alt="velasCode_ illustration by Laura Velasco." />
    </div>
    <div class="container__marquee">
      <div class="marquee__element" ref="marquee__element">{{ copy }}</div>
      <div class="marquee__element">{{ copy }}</div>
      <div class="marquee__element">{{ copy }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import gsap from 'gsap';
import { IndexPage } from '~/types';

export default Vue.extend({
  name: 'index',
  data() {
    return {
      copy: 'MAKING THE WEB LOOK AND FEEL NICE' as IndexPage['copy']
    }
  },
  mounted():void {
    this.$nextTick(() => {
      let element:any = this.$refs.marquee__element; // TODO: find a better not so shady solution to this.
      let itemW = element.clientWidth;
      let allW = itemW * 3;
      gsap.to('.marquee__element',{
        duration: 10,      
        x: '-='+itemW,
        repeat: -1,
        ease: 'none',
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % allW) 
        },
      });
    });
  }
})
</script>

<style lang="postcss" scoped>
.container {
  /* sizing and overflow */
  @apply flex-1 pt-16 overflow-hidden;
  /* positioning */
  @apply flex flex-col justify-center items-center content-center;
  /* text */
  @apply font-mono; 
}
.container__center {
  /* positioning and alignment */
  @apply relative flex flex-col justify-center items-center content-center text-center;
  /* size */
  @apply m-0 p-0;
}
.container__center > h1 {
  /* positioning */
  @apply absolute top-2/4 left-2/4 z-10; 
  transform: translate(-50%, -50%);
  /* font stuff */
  @apply text-4xl font-bold;
}
.container__center > h1 > span {
  /* font stuff */
  @apply font-light;
}
img {
  /* position */
  @apply relative;
  /* size */
  @apply h-5/6;
}
.container__marquee {
  /* positioning */
  @apply z-10 left-0 bottom-0;
  /* sizing */
  @apply w-full whitespace-nowrap overflow-hidden;
  /* other */
  pointer-events: none;
}
.marquee__element {
  /* display */
  @apply inline-block;
  /* font */
  @apply text-xs text-black m-0 font-bold;
  /* other */
  vertical-align: bottom;
}
</style>
