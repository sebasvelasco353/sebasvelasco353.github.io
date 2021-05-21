<template>
    <nav class="navbar">
        <h1>velas<span>code_</span></h1>
    </nav> 
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    
})
</script>

<style lang="postcss" scoped>
.navbar {
    /* sizing */
    @apply w-full h-16;
    /* shadow */
    @apply shadow;
    /* Colors */
    @apply bg-black text-orange;
}
h1 {
    @apply font-bold;
}
h1 > span {
    @apply font-light;
}
</style>