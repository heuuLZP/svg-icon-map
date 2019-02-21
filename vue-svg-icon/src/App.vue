<template>
  <div id="app">
    <svg-icon icon-class="love" />
  </div>
</template>

<script>
import SvgIcon from './components/SvgIcon.vue'

export default {
  name: 'app',
  components: {
    SvgIcon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
