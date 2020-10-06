<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
    @media (min-width: 1200px){
        .container {
            max-width: 1140px;
        }
    }
    @media (min-width: 992px){
        .container {
            max-width: 960px;
        }
    }
    @media (min-width: 768px){
        .container {
            max-width: 720px;
        }
    }
    @media (max-width: 767px){
        .container {
            max-width: 100%;
        }
    }
    .container{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        min-height: 95vh;
    }
</style>
