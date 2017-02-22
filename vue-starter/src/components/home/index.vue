<template>
<div class="view-home">
  <img src="../../assets/Logo_TV_2015.png" class="logo" alt="logo" />
  <img src="../../assets/home-banner.jpg" class="home-banner" />
  <button v-on:click="fetchJson" class="btn btn-primary">FETCH SOME HTTP REQUEST</button>
  <div class="httpInfo" v-show="isJsonLoaded">
      <strong>Status:</strong> {{httpStatus}}<br />
      <strong>Origin:</strong> {{httpOrigin}}<br />
      <strong>URL:</strong> {{httpUrl}}<br />
  </div>
  <section class="banners">
      <div class="banner--box"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span>made with love</div>
      <div class="banner--box"><span class="glyphicon glyphicon-music" aria-hidden="true"></span>made with music</div>
      <div class="banner--box"><span class="glyphicon glyphicon-fire" aria-hidden="true"></span>made with fire</div>
    <!-- <BannerItem />
    <BannerItem />
    <BannerItem /> -->
  </section>
</div>
</template>

<script>

import axios from 'axios'

// console.log('>>>', axios)

export default {
  name: 'home-view',
  data () {
    return {
      httpStatus: '--',
      httpOrigin: '--',
      httpUrl: '--',
      isJsonLoaded: false
    }
  },
  methods: {
    fetchJson: function () {
      this.isJsonLoaded = true
      axios.get('https://httpbin.org/get')
       .then((response) => {
         console.log(response)
         this.httpStatus = response.status
         this.httpOrigin = response.data.origin
         this.httpUrl = response.data.url
       })
       .catch((error) => {
         console.log(error)
       })
    }
  }
}
</script>

<style src="./index.css"></style>
