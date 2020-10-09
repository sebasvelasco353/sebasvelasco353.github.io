<template>
  <Container class="blog">
    <section>
      <h1>Blog Posts</h1>
    </section>
    <aside>
      <ul class="post_link-container">
        <li class="post_link" v-for="article in articles" :key="article.slug">
          <nuxt-link class="nav_link" :to="`blog/${article.slug}`" exact>
            <div class="post_img">
              <img
                :src="require(`~/assets/images/${article.img}`)"
                :alt="article.alt"
              />
            </div>
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
            <p><b>By: </b>{{ article.author }}</p>
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </Container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params)
      .only(['title', 'description', 'img', 'slug', 'createdAt', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles
    }
  },
  data(){
    
  }
}
</script>

<style lang="scss" scoped>
.blog{
  display: flex;
  flex-direction: row !important;
  section{
    flex: 4;
  }
  aside{
    flex: 1;
    .post_link-container{
      display: flex;
      flex-direction: row;
      list-style-type: none;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0;
      .post_link{
        margin: 20px 0px;
        box-sizing: border-box;
        width: 20vw;
        padding: 20px;
        h3{
          margin: 10px 0;
        }
        p{
          margin: 10px 0;
        }
        a{
          color: black;
          text-align: left;
          text-decoration: none;
          .post_img{
            width: 100%;
            height: 200px;
            overflow: hidden;
            img{
              width: 100%;
            }
          }
          h3{
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
