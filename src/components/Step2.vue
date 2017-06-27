<template>
  <div>
    <h2>Crear un componente</h2>
    <p>
      Vamos a crear un nuevo componente Home.vue en <code>src/components</code>. Acuérdate de darle la estructura básica de un componente Vue. Dentro del fichero <code>src/routes/index.js</code> sustituye el que viene por defecto por el que acabas de crear.
    </p>
    <p>
      Crea una propiedad <code>movie</code> en tu componente con este objeto:
    </p>
    <pre>
      movie: {
        "vote_average":7,
        "title":"Wonder Woman",
        "poster_path":"\/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
        "overview":"An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
        "release_date":"2017-05-30"
      }
    </pre>

    <p>Ahora crea un template para mostrar el título, la puntuación y el poster de la imagen. La api de MovieDB solo nos da el nombre del fichero del poster, nos faltará añadirle toda la ruta: https://image.tmdb.org/t/p/w500/</p>
    <p>Acuérdate que los bindings se hacen <code>{{bindingExample}}</code> para contenido dentro de etiquetas y con <code>v-bind="nombreDelaPropiedad"</code> o <code>:="nombreDelaPropiedad"</code> para atributos.</p>
    <p>Una vez lo tengas, cambia la propiedad movie por un array que contenga dos objetos:</p>

    <pre>
      movies: [
        {
          "vote_average":7,
          "title":"Wonder Woman",
          "poster_path":"\/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
          "overview":"An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
          "release_date":"2017-05-30"
        },
        {
          "vote_average":8.1,
          "title":"Interstellar",
          "poster_path":"\/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
          "overview":"Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
          "release_date":"2014-11-05"
        }
      ]
    </pre>

    <p>Ahora utiliza el mismo template para pintar los dos objetos. Acuérdate que puedes iterar por arrays y objetos usando <code>v-for="movie in movies"</code></p>

    <p>¿Necesitas ayuda? <a href="#" @click.prevent="showResult">Ver el código de este paso</a></p>

    <div :class="resultHidden ? 'hidden' : ''">
      <h3>src/components/Home.vue</h3>

      <pre>
        
      </pre>
    </div>
    <router-link :to="{name: 'Step3'}" class="btn btn-lg btn-primary">Siguiente</router-link>
  </div>
</template>

<script>

import resultMixin from '@/mixins/results'
export default {
  data() {
    return {
      bindingExample: '{{ nombreDeLaPropiedad }}'
    }
  },
  mixins: [ resultMixin ]
}
</script>
