<template>
  <div id="app" class="container">
    <br>
    <h1>Construir una aplicación con Vue.js</h1>
    <br>
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from '@/components/Menu'

export default {
  name: 'app',
  components: {
    AppMenu
  }
}
</script>

<style media="screen">
  body {
    font-size: 1.7em;
  }
  pre {
    margin: 2em 0;
  }
</style>
