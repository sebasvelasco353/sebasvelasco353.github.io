<template>
  <nav>
      <span class="nav_logo">Velas_Code</span>
      <ul>
          <li><nuxt-link class="nav_link" to="/">Home</nuxt-link></li>
          <li><nuxt-link class="nav_link" to="/about">About</nuxt-link></li>
      </ul>
      <ul class="nav_social">
          <li><a class="nav_link" href="https://www.instagram.com/velas_code">Instagram</a></li>
          <li><a class="nav_link" href="https://www.github.com/sebasvelasco353">Github</a></li>
          <li><a class="nav_link" href="https://www.youtube.com/channel/UC1H83UvGm0AznLAZwsYPoNA">Youtube</a></li>
      </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    nav{
        display: flex;
        flex-direction: row;
        font-size: 1.3rem;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        height: 10vh;
        .nav_logo{
            font-weight: bold;
            color: black;
        }
        a{
            text-decoration: none;
        }
        ul{
            display: flex;
            flex-direction: row;
            padding: 0;
            li{
                margin: 0 15px;
                list-style-type:none;
                a{
                    color: black;
                    text-decoration: none;
                    display: inline-block;
                }
            }
        }
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
        .nuxt-link-exact-active{
            font-weight: bold;
        }
    }

</style>
