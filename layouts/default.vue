<template>
  <div id="application">
    <Navbar />
    <Nuxt class="application-content"/>
    <Footer />
  </div>
</template>

<style>
#application {
  @apply flex flex-col;
  @apply h-screen;
}
</style>
