<template>
<header>
    <div class="navbar">
        <h1>velas<span>code_</span></h1>
        <div class="navbar__button" @click="changeMenuVisibility()">
            <span>{{ menuText }}</span>
        </div>
    </div>
    <nav class="navbar__links">
        <ul>
            <li class="navbar__link">Home</li>
            <li class="navbar__link">About me</li>
            <li class="navbar__link">Work</li>
            <li class="navbar__link">Blog</li>
        </ul>
    </nav>
</header>
</template>

<script lang="ts">
import Vue from 'vue';
import gsap from "gsap";
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
            if (this.menuText === 'open') {
                this.menuText = 'close';
                gsap.to('.navbar__links', {
                    duration: 1,
                    ease: 'power2.out',
                    yPercent: 120
                });
            } else {
                this.menuText = 'open';
                gsap.to('.navbar__links', {
                    duration: 1,
                    ease: 'power2.out',
                    yPercent: -120
                });
            }
        }
    },
    mounted(): void {
    }
})
</script>

<style lang="postcss">
body {
    @apply overflow-hidden;
}
</style>

<style lang="postcss" scoped>
.navbar {
    /* sizing */
    @apply w-full h-16 px-4;
    /* positioning */
    @apply absolute top-0 left-0 z-50;
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
.navbar__button {
}
.navbar__links {
    /* position */
    transform: translateY(-120%);
    @apply absolute top-0 left-0 z-40;
    /* Sizing */
    @apply w-full h-screen;
    /* Colors */
    @apply bg-black;
    /* display */
    @apply flex content-center justify-center items-center;
}
</style>