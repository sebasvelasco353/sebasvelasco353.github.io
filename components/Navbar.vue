<template>
  <nav class="flex flex-col justify-between px-10 py-6 mx-auto my-0 text-center sm:flex-row max-w-screen-lg">
    <span class="text-lg font-extrabold nav_logo">Velas_Code</span>
    <ul class="flex justify-between text-center">
      <li class="mx-4"><nuxt-link class="nav_link" to="/" exact>Home</nuxt-link></li>
      <li class="mx-4"><nuxt-link class="nav_link" to="/about" exact>About</nuxt-link></li>
      <li class="mx-4"><nuxt-link class="nav_link" to="/blog_index" exact>Blog</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav_link::after{
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background-color: black;
  transition: width .3s;
}
.nav_link:hover::after{
  width: 100%;
  transition: width;
  transition: width .3s;
}
</style>
