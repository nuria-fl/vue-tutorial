<template>
  <div>
    <h2>Filtrar por género</h2>
    <p>Ahora que tenemos nuestra lista de componentes, vamos a añadir la función de filtrar por género. Fíjate en la información que tiene cada película (puedes mirar las propiedades de tus componentes fácilmente con la extensión <a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en" target="_blank">Vue Devtools para Chrome</a>). Verás que cada película tiene un array de <code>genre_ids</code> pero son ids numéricos, no es demasiado user-friendly... para poder trabajar con ellos vamos a tener que hacer otra llamada a la api para saber a qué corresponde cada id.</p>

    <p>Crea una función <code>getGenres</code> en el servicio Api que hemos creado en el paso anterior que haga un get a <code>/genre/movie/list</code>. En la función <code>getMovies</code> devolvíamos <code>response.data.results</code>, pero ahora la respuesta de la api es algo distinta y tenemos que devolver <code>response.data.genres</code>. Utiliza esta función en el componente Home para guardar los géneros en las propiedades del componente, de la misma forma que hemos hecho con <code>movies</code>.</p>

    <p>Ahora que tenemos un array de géneros podemos crear nuestro selector. Como el selector va a tener un poco de lógica, vamos a crearlo en un componente a parte. Crea un nuevo componente <code>Dropdown.vue</code> que reciba como propiedades el array de géneros, y la opción seleccionada. Podemos definir las propiedades que un componente espera recibir con <code>props</code>: </p>

    <pre>
      export default {
        props: ['items', 'selected']
      }
    </pre>

    <p>Importa este componente en Home y crea una nueva propiedad que sea <code>selectedGenre</code>, por ahora seteada a <code>null</code></p>

    <pre>
      import dropdown from './Dropdown'

      export default {
        data() {
          movies: [],
          genres: [],
          selectedGenre: null
        },
        components: {
          dropdown
        },
        // ...
      }
    </pre>

    <p>Y pásale el array de géneros y la propiedad seleccionada:</p>

    <pre>
      &lt;dropdown :items="genres" :selected="selectedGenre"&gt;&lt;/dropdown&gt;
    </pre>

    <p>Ahora que Dropdown ya recibe datos, haz un <code>&lt;select&gt;</code> en el que cada option muestre el nombre del género y tenga como valor su id. Como valor del propio select, usa la propiedad <code>selected</code>.</p>

    <pre>
      &lt;select :value="selected">
        &lt;option v-for="item in items" :value="item.id">
          ...
    </pre>

    <p>Cada vez que el usuario cambie de opción vamos a tener que comunicarle al componente Home que tiene que filtrar las películas por el género seleccionado. Para pasar información de un componente hijo a su componente padre usamos <strong>eventos</strong>.</p>

    <p>Vamos a lanzar un evento en el evento change del select. Podemos ejecutar métodos sobre un elemento html usando <code>v-on:nombreDelEvento</code> o, más corto, <code>@nombreDelEvento</code>.</p>

    <pre>
      &lt;select @change="selectGenre($event)" :value="item.id">
    </pre>

    <p>Crea un método <code>selectGenre($event)</code> que emita un evento con el id del género seleccionado. ¿Como podemos saber el valor seleccionado? El parámetro <code>$event</code> es un evento javascript normal, en el que tenemos información del elemento que lo ha lanzado. Haz un <code>console.log</code> de $event. Verás que la información que necesitamos está en <code>target.value</code>. El método nos quedará así:</p>

    <pre>
      selectGenre($event) {
        this.$emit('update:selected', $event.target.value)
      }
    </pre>

    <p>Ahora tenemos que hacer un pequeño cambio en el componente Home para que el valor de selected se actualice. Añadiendo <code>.sync</code> a una propiedad podemos actualizarla automáticamente cada vez que se lance un evento <code>update:nombreDeLaPropiedad</code></p>

    <pre>
      &lt;dropdown :items="genres" :selected.sync="selectedGenre"&gt;&lt;dropdown&gt;
    </pre>

    <p>Con el Vue Devtools abierto, prueba a seleccionar distintos géneros y mira si se actualiza la propiedad <code>selectedGenre</code> en el componente Home.</p>

    <p>Ahora solo nos falta filtrar el array de películas por el género seleccionado. Esto lo podemos hacer con una <strong>propiedad computada</strong>. Las propiedades computadas son funciones normales, con la ventaja de que se actualizan automáticamente cada vez que cambian las propiedades de las que dependen. Vamos a filtrar el array movies solo si tenemos un género seleccionado:</p>

    <pre>
      computed: {
        filteredMovies() {
          if (this.selectedGenre) {
            const genre = parseInt(this.selectedGenre)

            return this.movies.filter( movie => {
              return movie.genre_ids.indexOf(genre) !== -1
            })
          } else {
            return this.movies
          }
        }
      }
    </pre>

    <p>Por último, en el template cambia el v-for para que itere por la nueva propiedad computada <code>filteredMovies</code>. ¡Ya tenemos un filtro funcional!</p>

    <p>¿Necesitas ayuda? <a href="#" @click.prevent="showResult">Ver el código de este paso</a></p>

    <div :class="resultHidden ? 'hidden' : ''">
      <h3>src/components/Dropdown.vue</h3>
      <pre>
        &lt;template>
          &lt;div>
            Filter by genre:
            &lt;select @change="selectGenre" :value="selected">
              &lt;option v-for="item in items" :value="item.id">
                {{item.name}}
              &lt;/option>
            &lt;/select>
          &lt;/div>
        &lt;/template>

        &lt;script>
        export default {
          props: ['items', 'selected'],
          methods: {
            selectGenre($event) {
              this.$emit('update:selected', $event.target.value)
            }
          }
        }
        &lt;/script>
      </pre>

      <h3>src/components/Home.vue</h3>
      <pre>
        &lt;template>
          &lt;div>
            &lt;dropdown :items="genres" :selected.sync="selectedGenre">&lt;/dropdown>

            &lt;article v-for="movie in filteredMovies">
              &lt;img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
              &lt;h4>{{ movie.title }}&lt;/h4>
              &lt;p>{{movie.vote_average}}&lt;/p>
            &lt;/article>
          &lt;/div>
        &lt;/template>

        &lt;script>
        import api from '@/services/api'
        import dropdown from './Dropdown'

        export default {
          data () {
            return {
              movies: [],
              genres: [],
              selectedGenre: null
            }
          },
          components: {
            dropdown
          },
          created() {
            api.getMovies().then(data => {
              this.movies = data
            })
            api.getGenres().then(data => {
              this.genres = data
            })
          },
          computed: {
            filteredMovies() {
              if (this.selectedGenre) {
                const genre = parseInt(this.selectedGenre)

                return this.movies.filter( movie => {
                  return movie.genre_ids.indexOf(genre) !== -1
                })
              } else {
                return this.movies
              }
            }
          }
        }
        &lt;/script>
      </pre>

      <h3>src/services/api.js</h3>
      <pre>
        import axios from 'axios'

        const host = 'https://api.themoviedb.org/3'
        const apiKey = 'api_key=400b1e890742cab1385d0728152a050f';

        export default {
          getMovies() {
            return axios.get(`${host}/discover/movie?${apiKey}`)
              .then(function (response) {
                return response.data.results;
              })
              .catch(function (error) {
                console.log(error);
              });
          },
          getGenres() {
            return axios.get(`${host}/genre/movie/list?${apiKey}`)
              .then(function (response) {
                return response.data.genres;
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
      </pre>

      <button type="button" @click="hideResult()" class="btn btn--default btn--sm">Ocultar</button>
      <br>
      <br>
    </div>

    <router-link :to="{name: 'Step5'}" class="btn btn-lg btn-primary pull-right">Siguiente</router-link>
  </div>
</template>

<script>
import resultMixin from '@/mixins/results'
export default {
  mixins: [ resultMixin ]
}
</script>
