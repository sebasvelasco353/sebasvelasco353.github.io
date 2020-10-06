<template>
  <nav>
      <span class="nav_logo">Velas_Code</span>
      <ul>
          <li><nuxt-link class="nav_link" to="/">Home</nuxt-link></li>
          <li><nuxt-link class="nav_link" to="/about">About</nuxt-link></li>
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
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        font-size: 1.3rem;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        height: 10vh;
        z-index: 100000;
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
    @media screen and (max-width: 800px) {
        nav{
            padding: 3vh 1vw;
            height: auto;
            flex-direction: column;
        }
    }
</style>
