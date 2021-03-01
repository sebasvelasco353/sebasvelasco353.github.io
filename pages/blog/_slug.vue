<template>
  <Container>
    <img
      :src="require(`~/assets/images/${article.img}`)"
      :alt="article.alt"
    >
    <nuxt-content :document="article" />
  </Container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    // fetch our article here
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<style lang="scss" scoped>
</style>
