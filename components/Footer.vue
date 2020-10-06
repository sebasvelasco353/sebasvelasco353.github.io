<template>
  <footer>
    <p>Made with &#128151; by <b>Velas_Code</b> {{ year }} </p>
    <ul class="nav_social">
        <li><a class="nav_link" href="https://www.instagram.com/velas_code">Instagram</a></li>
        <li><a class="nav_link" href="https://www.github.com/sebasvelasco353">Github</a></li>
        <li><a class="nav_link" href="https://www.youtube.com/channel/UC1H83UvGm0AznLAZwsYPoNA">Youtube</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
footer{
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    background-color: rgb(20, 30, 48);
    ul{
        display: flex;
        flex-direction: row;
        padding: 0;
        li{
            margin: 0 15px;
            list-style-type:none;
            a{
                color: white;
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
        background-color: white;
        transition: width .3s;
    }
    .nav_link:hover::after{
        width: 100%;
        transition: width;
        transition: width .3s;
    }
}
@media screen and (max-width: 800px) {
    footer{
        padding: 3vh 1vw;
        height: auto;
        flex-direction: column;
        text-align: center;
        height: 15vh;
        ul{
          display: flex;
          flex-direction: row;
          padding: 0;
          text-align: center;
          justify-content: center;
        }
    }
}
</style>
