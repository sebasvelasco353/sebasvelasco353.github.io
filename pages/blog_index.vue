<template>
  <Container>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article in articles" :key="article.slug">
          <nuxt-link class="nav_link" :to="`blog/${article.slug}`" exact>{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </Container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    console.log(articles)
    return {
      articles
    }
  }
}
</script>

<style>
</style>
