<template>
<div id="app">
  <navmenu></navmenu>
  <!-- <home></home>
  <programs></programs> -->
  <router-view></router-view>
  <appfooter></appfooter>
  <!-- <router-view></router-view> -->
</div>
</template>

<script>

import navmenu from 'components/navmenu/index.vue'
import appfooter from 'components/app-footer/index.vue'
// import programs from 'components/programs/index.vue'
// import home from 'components/home/index.vue'

export default {
  name: 'app',
  components: {
    navmenu,
    // programs,
    // home,
    appfooter
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
<style src="./assets/font-awesome.min.css"></style>
