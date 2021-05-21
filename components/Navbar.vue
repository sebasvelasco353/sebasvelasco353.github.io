<template>
    <nav class="navbar">
        <h1>velas<span>code_</span></h1>
        <div class="navbar__button" @click="changeMenuVisibility()">
            <span>{{ menuText }}</span>
        </div>
    </nav> 
</template>

<script lang="ts">
import Vue from 'vue';
import { Navbar } from '../types/navbarTypes';

export default Vue.extend({
    name: 'Navbar',
    data() {
        return {
            menuText: 'open' as Navbar['menuText']
        };
    },
    methods: {
        changeMenuVisibility(): void {
            this.menuText === 'open' ? this.menuText = 'close' : this.menuText = 'open';
        }
    }
})
</script>

<style lang="postcss" scoped>
.navbar {
    /* sizing */
    @apply w-full h-16 px-4;
    /* shadow */
    @apply shadow;
    /* Colors */
    @apply bg-black text-orange;
    /* alignment */
    @apply flex flex-row content-center items-center justify-between;
}
h1 {
    @apply font-bold;
}
h1 > span {
    @apply font-light;
}
.nav__button {
    /* sizing */
    @apply w-8 h-1;
    /* color */
    @apply bg-orange;
}
</style>