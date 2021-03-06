<template>
  <div>
    <h2>Escalando nuestra app</h2>
    <p>Ahora que tenemos todo el estado centralizado, podemos crear una nueva sección que muestre las películas que hemos guardado muy fácilmente.</p>

    <p>En <code>src/router/index.js</code>, crea una nueva ruta que apunte a un nuevo componente <code>MyMovies</code> que haremos a continuación. Ten en cuenta que tienes que importar el componente.</p>

    <pre>
      {
        path: '/my-movies',
        name: 'myMovies',
        component: MyMovies
      }
    </pre>

    <p>En <code>src/App.vue</code>, justo antes de <code>&lt;router-view>&lt;/router-view></code>, añade un menú con enlaces a Home y a MyMovies:</p>

    <pre>
      &lt;nav class="nav">
        &lt;router-link :to="{name: 'home'}">Home&lt;/router-link>
        &lt;router-link :to="{name: 'myMovies'}">My Movies&lt;/router-link>
      &lt;/nav>
    </pre>

    <p>Crea un nuevo componente <code>MyMovies.vue</code>. Importa el componente Movie y crea un v-for que itere sobre la propiedad <code>savedMovies</code>. Podríamos hacer un <code>mapState</code> de <code>movies</code> y crear una propiedad computada que filtre las películas por <code>saved</code> y sería un código perfectamente válido, pero vamos a aprender otro concepto, los <strong>getters</strong>.</p>

    <p>Vuelve al <code>src/store/index.js</code>. Crea una nueva función <code>savedMovies</code> dentro de getters que reciba como parámetro el <code>state</code>, y que devuelva el array de movies filtrado por <code>saved === true</code></p>

    <p>Ahora, de la misma forma que hacíamos el <code>mapState</code>, podemos hacer un <code>mapGetters</code> y añadir <code>savedMovies</code> en el componente MyMovies. Como ves, hacer el store ha sido un poco complicado pero nos hace la vida mucho más fácil después.</p>

    <p>¿Necesitas ayuda? <a href="https://gist.github.com/nuria-fl/cd6d74d77014df1b4776d3d029ec13cc" target="_blank">Ver el código de este paso</a></p>

    <br>
    <br>
    <p>El tutorial termina aquí, pero con lo que has aprendido puedes seguir mejorando la aplicación y practicar más conceptos. Algunas ideas:</p>

    <ul>
      <li>Añade un botón para resetear el filtro de género</li>
      <li>Añade la funcionalidad para desmarcar una película.</li>
      <li>Explora la <a href="https://www.themoviedb.org/documentation/api/discover" target="_blank">api de MovieDB</a> y crea otras secciones: películas más valoradas, estrenos, filtros por año, director…</li>
    </ul>




    <router-link :to="{name: 'Extras'}" class="btn btn-lg btn-primary pull-right">Ver recursos</router-link>
  </div>
</template>

<script>
import resultMixin from '@/mixins/results'
export default {
  mixins: [ resultMixin ]
}
</script>
