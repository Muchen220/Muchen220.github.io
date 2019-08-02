<template>
  <div id="app">
      <header-nav></header-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from './components/Header-nav'

export default {
  name: 'App',
  components: {
    "header-nav":HeaderNav
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
