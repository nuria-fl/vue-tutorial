<template>
  <div>

    <p class="lead">En este tutorial vamos a hacer una introducción práctica al desarrollo de SPAs (single-page applications) con Vue.js.</p>
    <p class="lead">Crearemos una aplicación sencilla que nos va a listar películas usando la api de <a href="http://www.themoviedb.org/">MovieDB</a>, con la posibilidad de marcarlas como favoritas, viendo conceptos propios de Vue y de SPA en general, como componentes, routing, estado de la aplicación, etc</p>

    <p class="text-center">
      <router-link :to="{name: 'Step1'}" class="btn btn-lg btn-primary">Empezar</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
