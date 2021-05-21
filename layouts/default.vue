<template>
  <div id="application">
    <Navbar />
    <Nuxt class="application-content"/>
    <Footer />
  </div>
</template>

<style lang="postcss" scoped>
#application {
  @apply flex flex-col;
  @apply h-screen;
}
</style>
