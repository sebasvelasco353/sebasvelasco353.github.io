<template>
  <kinesis-container class="parent">
    <kinesis-element type="depth" :strength="20">
        <slot></slot>
    </kinesis-element>
  </kinesis-container>
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
<style scoped>
.parent {
  width: 100vw;
  height: 90vh;
  padding: 40vh 40vw;
}
.child {
  width: 100%;
  height: 100%;
}
</style>
