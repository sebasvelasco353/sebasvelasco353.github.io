<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
    @media (max-width: 1200px){
        .container {
            max-width: 1140px;
        }
    }
    @media (max-width: 992px){
        .container {
            max-width: 960px;
        }
    }
    @media (max-width: 801px){
        .container {
            max-width: 720px;
        }
    }
    @media (max-width: 800px){
        .container {
            max-width: 100%;
            min-height: 85vh !important;
        }
    }
    .container{
        width: 100%;
        display: flex;
        max-width: 80%;
        flex-direction: column;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        padding-top: 10vh;
        min-height: 95vh;
    }
</style>
