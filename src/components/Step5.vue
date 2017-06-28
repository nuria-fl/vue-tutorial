<template>
  <div>
    <h2>Marcar película como favorita</h2>
    <p>Vamos a añadir un botón para marcar una película como favorita. Primero de todo vamos a mover el detalle de la película en un componente propio para separar funcionalidades. Crea un nuevo componente <code>Movie.vue</code> que reciba una propiedad <code>movie</code> e impórtalo en el componente Home. Puedes iterar con <code>v-for</code> sobre un componente de la misma forma que con un tag normal de html:</p>

    <pre>
      &lt;movie v-for="movie in filteredMovies" :movie="movie"&gt;&lt;movie&gt;
    </pre>

    <p>
      Copia el mismo template que tenías para el detalle de película en el componente Movie y añade un botón (yo he usado la librería <a href="http://fontawesome.io/" target="_blank">Font Awesome</a> para ponerle un iconito, pero hazlo a tu gusto). Nos quedará algo así:
    </p>

    <pre>
      &lt;article class="movies__item">
        &lt;button class="movies__like">
          &lt;i class="fa fa-star">&lt;/i>
        &lt;/button>
        &lt;img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
      &lt;/article>
    </pre>

    <p>Ahora crea un método <code>saveMovie</code> en <code>@click</code> del botón, que setee <code>movie.saved</code> a <code>true</code>. Haz una condición en el template que muestre alguna marca de que la película se ha marcado correctamente. Usando font awesome, podemos cambiar la clase según una condición así:</p>

    <pre>
      &lt;i :class="movie.saved ? 'fa fa-check' : 'fa fa-star'">&lt;/i>
    </pre>

    <p>O puedes mostrar un tag con <code>v-show</code>:</p>

    <pre>
      &lt;span v-show="movie.saved">Guardada&lt;/span>
    </pre>


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

    <router-link :to="{name: 'Step6'}" class="btn btn-lg btn-primary pull-right">Siguiente</router-link>
  </div>
</template>

<script>
import resultMixin from '@/mixins/results'
export default {
  mixins: [ resultMixin ]
}
</script>
