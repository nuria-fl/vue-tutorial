<template>
  <div>
    <h2>Vuex</h2>
    <p>Ya tenemos una aplicación funcional, pero ahora tenemos todo el estado centralizado en el componente Home. Si nuestra app es pequeña esto no supone ningún problema, pero si queremos que crezca añadiendo nuevas secciones y funcionalidades, cada vez se nos va a hacer más complicado gestionar el estado desde un solo componente.</p>

    <p>Para solucionar este tipo de problemas existen librerías de <strong>state management</strong>. Vamos a usar la oficial que de Vue, <a href="https://vuex.vuejs.org/en/" target="_blank">Vuex</a>.</p>

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
