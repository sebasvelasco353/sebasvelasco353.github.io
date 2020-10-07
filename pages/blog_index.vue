<template>
  <Container>
    <h1>Blog Posts</h1>
    <ul class="post_link-container">
      <li class="post_link" v-for="article in articles" :key="article.slug">
          <nuxt-link class="nav_link" :to="`blog/${article.slug}`" exact>
            <img
              :src="require(`~/assets/images/${article.img}`)"
              :alt="article.alt"
            />
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
            <p><b>By: </b>{{ article.author }}</p>
          </nuxt-link>
      </li>
    </ul>
  </Container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params)
      .only(['title', 'description', 'img', 'slug', 'createdAt', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()
    console.log(articles)
    return {
      articles
    }
  }
}
</script>

<style lang="scss" scoped>
.post_link-container{
  display: flex;
  flex-direction: row;
  list-style-type: none;
  .post_link{
    margin: 40px 0;
    a{
      color: black;
      text-align: left;
      text-decoration: none;
      h3{
        text-align: center;
      }
    }
  }
}
</style>
