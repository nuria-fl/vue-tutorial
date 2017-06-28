<template>
  <div>
    <h2>Comunicación con la api</h2>
    <p>Ahora tenemos un componente que nos puede listar tantas películas como tengamos en el array, pero añadirlas a mano no apetece demasiado. Vamos a crear un servicio que haga una llamada a la api de MovieDB para rellenar el array dinámicamente.</p>

    <!-- <p>En primer lugar, deberás registrarte en <a href="https://www.themoviedb.org/account/signup?language=en" target="_blank">MovieDB</a> y conseguir una Api key. Una vez tengamos la cuenta verificada vamos a <a href="https://www.themoviedb.org/settings/api/new?type=developer" target="_blank">Settings</a> y rellenar un pequeño formulario.</p> -->

    <p>Vamos a crear un nuevo fichero en <code>src/services/api.js</code>. Importaremos la librería Axios, que ya tendremos instalada al haber usado el starter.</p>

    <pre>
      import axios from 'axios'
    </pre>

    <p>Vamos a crear una función <code>getMovies</code> que devuelva el resultado de la llamada a la api. Como es un proceso asíncrono, necesitamos usar una promesa. Pero como Axios ya es promise-based, solo tenemos que hacer algo así:</p>
    <pre>
      export default {
        getMovies() {
          return axios.get(url)
            .then((response) => {
              return response.data.results
            })
            .catch((error) => {
              // ...
            });
        }
      }
    </pre>
    <p>La función axios.get recibe como parámetro la url a la que hacer la llamada, que es: <code>https://api.themoviedb.org/3/discover/movie?api_key=4bcacd5bcdf6d2ae0125c890eab6e4ae</code> (Sugerencia: como probablemente vamos a tener que hacer mas requests a la misma api, es buena idea separar el host y la api key en variables que podamos reutilizar).</p>

    <p>Importa el servicio en el componente que has creado en el paso anterior y llama la función <code>getMovies</code>. Acuérdate que en un componente podemos crear hooks que se ejecutan en determinados momentos del ciclo de vida de un componente. En este caso nos interesa ir a buscar la información cuando se crea el componente, es decir, en el hook <code>created()</code>. Como nuestro servicio usa promises, en el <code>then</code> podemos asignar la respuesta de la api a nuestro array <code>movies</code></p>

    <p>¿Necesitas ayuda? <a href="#" @click.prevent="showResult">Ver el código de este paso</a></p>

    <div :class="resultHidden ? 'hidden' : ''">
      <h3>src/services/api.js</h3>
      <pre>
        import axios from 'axios'

        const host = 'https://api.themoviedb.org/3'
        const apiKey = 'api_key=4bcacd5bcdf6d2ae0125c890eab6e4ae';

        export default {
          getMovies() {
            return axios.get(`${host}/discover/movie?${apiKey}`)
              .then(function (response) {
                return response.data.results;
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
      </pre>

      <h3>src/components/Home.vue</h3>
      <pre>
      </pre>

      <button type="button" @click="hideResult" class="btn btn--default btn--sm">Ocultar</button>
      <br>
      <br>
    </div>

    <router-link :to="{name: 'Step4'}" class="btn btn-lg btn-primary pull-right">Siguiente</router-link>
  </div>
</template>

<script>
import resultMixin from '@/mixins/results'
export default {
  mixins: [ resultMixin ]
}
</script>
