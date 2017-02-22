<template>
<div>
  <a href="#" v-on:click="clickMenu($event)" class="ico-sandwich fa-2x">
    <i class="fa fa-bars" aria-hidden="true"></i>
  </a>
  <nav class="nav-menu">
    <div class="nav-menu-overlay" v-on:click="closeMenu"></div>
    <div class="nav-menu-panel">
      <!-- <a href="#" class="nav-menu-item">section 1</a>
      <a href="#" class="nav-menu-item">section 2</a> -->
      <router-link to="/">Home</router-link>
      <router-link to="/programs">Programs</router-link>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'navmenu',
  data () {
    return {}
  },
  methods: {
    clickMenu: (evt) => {
      evt.preventDefault()
      document.body.classList.toggle('menu-opened')
    },
    closeMenu: () => {
      document.body.classList.remove('menu-opened')
    }
  }
}
// toggleMenu(evt) {
//         evt.preventDefault();
//         document.body.classList.toggle('menu-opened');
//     }
</script>

<style src="./index.css"></style>
