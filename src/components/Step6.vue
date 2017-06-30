<template>
  <div>
    <h2>Vuex</h2>
    <p>Ya tenemos una aplicación funcional, pero ahora tenemos todo el estado centralizado en el componente Home. Si nuestra app es pequeña esto no supone ningún problema, pero si queremos que crezca añadiendo nuevas secciones y funcionalidades, cada vez se nos va a hacer más complicado gestionar el estado desde un solo componente.</p>

    <p>Para solucionar este tipo de problemas existen librerías de <strong>state management</strong>. Vamos a usar la oficial que de Vue, <a href="https://vuex.vuejs.org/en/" target="_blank">Vuex</a>.</p>

    <p>Crea un archivo en <code>src/store/index.js</code> con esta estructura:</p>

    <pre>
      import Vue from 'vue';
      import Vuex from 'vuex';

      Vue.use(Vuex)

      const store = new Vuex.Store({
        state: {
        },
        getters: {
        },
        mutations: {
        },
        actions: {
        }
      })

      export default store;
    </pre>

    <p>Dentro de <code>state</code> vamos a guardar un array de movies y otro de genres. Como ves, <code>state</code> se corresponde con las propiedades de un componente que encontramos en <code>data</code>. Bien, ahora tenemos que rellenar estos arrays con la información de la api. A diferencia de los componentes, aquí no podemos cambiar el estado directamente haciendo <code>movies = newData</code>. Para cambiar el estado global tenemos que usar <strong>mutaciones</strong>. Vamos a crear una mutación <code>addMovie</code> que añada una película en el array. Las mutaciones reciben como primer parámetro el <code>state</code>, y como segundo la información que le pasemos nosotros.</p>

    <pre>
      addMovie (state, movie) {
        state.movies.push(movie)
      }
    </pre>

    <p>Ahora podemos añadir items en el array, pero aún tenemos que hacer la llamada a la api. Las mutaciones siempre son <strong>síncronas</strong>. Para realizar cambios en el estado que sean asíncronos, como una llamada a la api, tenemos que usar una <strong>acción</strong>, que a su vez realizará la mutación que acabamos de definir. Las acciones son similares a las mutaciones, como primer parámetro reciben todo el contexto del store (que podemos desestructurar en <code>{state, commit}</code>). Commit es la forma especial con la que tenemos que ejecutar una mutación: <code>commit('nombreDeLaMutacion', parametro)</code>. Vamos a pasar la llamada a la api de la Home a una acción (acuérdate de importar el servicio Api):</p>

    <pre>
      getMovies ({ state, commit }) {
        if(!state.movies.length) {
          api.getMovies()
            .then( data => {
              data.forEach(movie => commit('addMovie', movie))
            })
        }
      }
    </pre>

    <p>Ahora ya estamos listas para usar nuestro store en la aplicación. Primero, tenemos que añadirlo en el archivo <code>src/main.js</code>. Funciona de la misma manera que el router. Importa el store i añádelo en las propiedades de <code>new Vue</code>.</p>

    <p>Vamos a realizar algunos cambios al componente <code>Home</code> para que coja la información de nuestro store. Desde un componente podemos acceder a las propiedades del store usando <code>this.$store.state.nombreDeLaPropiedad</code>, pero es un poco engorroso. Vuex nos ofrece unos helpers para hacerlo más sencillo.</p>

    <pre>
      import { mapState } from Vuex

      export default {
        computed: {
          ...mapState([
            'movies'
          ]),
          //...
    </pre>

    <p>Quitamos el array de movies de <code>data</code> para que no entre en conflicto y ya podemos usar movies de la misma forma que si estuviera declarada como propiedad. En realidad lo está, lo único que hace el mapState es crear una propiedad computada que nos devuelve el array movies del store.</p>

    <p>En el hook <code>created</code>, cambiamos la llamada a la api por la acción del store. De la misma forma que tenemos el <code>mapState</code>, podemos hacer un <code>mapActions</code> dentro de methods:</p>

    <pre>
      import { mapState, mapActions } from 'vuex'

      export default {
        // ...
        methods: {
          ...mapActions([
            'getMovies'
          ]),
          // ...
        },
        created () {
          this.getMovies()
        }
      }
    </pre>

    <p>Ahora puedes hacer lo mismo con los géneros: crea un array en <code>state</code>, una mutación para añadir géneros a ese array, y una acción que haga la llamada a la api. Después, haz los cambios necesarios en el componente Home.</p>

    <p>Hay una última funcionalidad que tenemos que trasladar al store. En el componente Movie, tendremos que cambiar el método <code>saveMovie</code> por una mutación. Crea una mutación en el store que reciba como parámetro el id de la película. En el componente, de la misma forma que hacíamos <code>mapState</code> y <code>mapActions</code>, podemos hacer <code>mapMutations</code>.</p>

    <pre>
      import { mapMutations } from 'vuex'

      export default {
        props: ['movie'],
        methods: {
          ...mapMutations([
            'saveMovie'
          ])
        }
      }
    </pre>

    <p>
      Como la mutación solo recibe el id, lo primero que tenemos que hacer es encontrar esa película en el array de movies. Se puede hacer de muchas formas, por ejemplo, con <code>findIndex</code>
    </p>

    <pre>
      const movieIdx = state.movies.findIndex(movie => movie.id === movieId)
    </pre>

    <p>Ahora que tenemos el índice, podríamos hacer <code>state[movieIdx].saved = true</code>, pero como hemos visto antes, Vue no es capaz de reaccionar a nuevas propiedades de un objeto. Antes hemos usado <code>Vue.set</code>, otra solución fácil es reemplazar todo el objeto, así Vue crea una nueva referencia y se recalcula todo como esperamos:</p>

    <pre>
      const updatedMovie = Object.assign({}, state.movies[movieIdx], {saved: true})
    </pre>

    <p>Per si assignamos esto a <code>state[movieIdx] = updatedMovie</code>... ¡tampoco se da cuenta! Para que reaccione a cambios en un item del array, tendremos que hacer un <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice" target="_blank">splice</a></p>

    <pre>
      state.movies.splice(movieIdx, 1, updatedMovie)
    </pre>

    <p>¡Ahora ya sí! Tenemos todo el estado centralizado. Nuestra app está lista para crecer.</p>

    <p>¿Necesitas ayuda? <a href="https://gist.github.com/nuria-fl/493fda154acf06f9733821db5a6cda1a" target="_blank">Ver el código de este paso</a></p>

    <router-link :to="{name: 'Step7'}" class="btn btn-lg btn-primary pull-right">Siguiente</router-link>
  </div>
</template>

<script>
import resultMixin from '@/mixins/results'
export default {
  mixins: [ resultMixin ]
}
</script>
