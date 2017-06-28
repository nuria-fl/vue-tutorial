<template>
  <div>
    <h2>Vuex</h2>
    <p></p>

    <p>¿Necesitas ayuda? <a href="#" @click.prevent="showResult">Ver el código de este paso</a></p>

    <div :class="resultHidden ? 'hidden' : ''">
      <h3>src/components/Home.vue</h3>
      <pre>

      </pre>

      <h3>src/components/Movie.vue</h3>
      <pre>
      </pre>

      <button type="button" @click="hideResult" class="btn btn--default btn--sm">Ocultar</button>
      <br>
      <br>
    </div>

    <router-link :to="{name: 'Extras'}" class="btn btn-lg btn-primary pull-right">Fin</router-link>
  </div>
</template>

<script>
import resultMixin from '@/mixins/results'
export default {
  mixins: [ resultMixin ]
}
</script>
