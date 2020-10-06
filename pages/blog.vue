<template>
  <Container>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article in articles" :key="article.slug">
          <p>{{ article.title }}</p>
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
    return {
      articles
    }
  }
}
</script>

<style>
</style>
