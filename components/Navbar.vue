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
            <li class="navbar__link" :class="{ active: currentPage === 'index' }"><span>Home</span></li>
            <li class="navbar__link" :class="{ active: currentPage === 'about' }"><span>About</span></li>
            <li class="navbar__link"><span>Work</span></li>
            <li class="navbar__link"><span>Blog</span></li>
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
            menuText: 'open' as Navbar['menuText'],
            currentPage: '' as Navbar['currentPage']
        };
    },
    methods: {
        changeMenuVisibility(): void {
            if (this.menuText === 'open') {
                this.menuText = 'close';
                gsap.to('nav', {
                    duration: 1,
                    ease: 'power2.out',
                    yPercent: 120
                });
                gsap.from('.navbar__link', {
                    duration: 1.5,
                    ease: 'power2.out',
                    xPercent: -50,
                    opacity: 0,
                    delay: 0.5,
                    stagger: 0.2,
                });
            } else {
                this.menuText = 'open';
                gsap.to('nav', {
                    duration: 1,
                    ease: 'power2.out',
                    yPercent: -120
                });
            }
        }
    },
    mounted(): void {
        console.log(this.$route.name);
        this.currentPage = String(this.$route.name);
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
nav {
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
.navbar__link {
    /* spacing */
    @apply my-3;
}
.navbar__link > span {
    /* font stuff */
    @apply text-6xl text-black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
}
.active > span{
    /* font stuff */
    @apply text-6xl text-white;
    -webkit-text-stroke-width: 0px;
}
</style>