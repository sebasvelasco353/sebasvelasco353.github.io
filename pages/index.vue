<template>
  <div class="container">
    <kinesis-container class="parent">
      <kinesis-element type="depth" class="child" :strength="30">
        <h1 class="title">
          velas_code
        </h1>
        <p>Web developer && food enthusiast</p>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
export default {
  components: {
    KinesisContainer,
    KinesisElement
  }
}
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .parent {
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    .child{
      h1{
        font-size: 4vh;
      }
      p{
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
      }
    }
  }
  @media (max-width: 800px){
    .parent {
      height: 85vh !important;
    }
  }
</style>
