<template>
    <footer class="footer">
        <h1>Sebastian Velasco @ {{ year }}</h1>
    </footer>  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear()
        };
    }
})
</script>

<style lang="postcss" scoped>
.footer {
    /* sizing */
    @apply w-full h-14;
    /* Colors */
    @apply bg-black text-orange;
    /* alignment */
    @apply flex flex-row content-center items-center justify-center;
}
</style>