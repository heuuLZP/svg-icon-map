<template>
  <div id="app">
    <ul>
      <li>
        <svg-icon icon-class="love" />
        <span>love</span>
      </li>
      <li>
        <svg-icon icon-class="alipay" />
        <span>alipay</span>
      </li>
      <li>
        <svg-icon icon-class="wechat" />
        <span>wechat</span>
      </li>
    </ul>
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
}
ul, li {
  list-style: none;
}
li {
  float: left;
  width: 100px;
  height: 100px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
li span {
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}
</style>
