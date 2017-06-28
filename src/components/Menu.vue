<template>
  <nav class="nav">
    <h4>Index</h4>
    <ul>
      <li>
        <router-link :to="{name: 'Home'}">
          Inicio
        </router-link>
      </li>
      <li v-for="(item, i) in items">
        <router-link :to="{name: `Step${i+1}`}">
          Paso {{i+1}}: {{ item.title }}
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Extras'}">
          Extras
        </router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Inicializar el proyecto'
        },
        {
          title: 'Crear un componente'
        },
        {
          title: 'Comunicación con la api'
        },
        {
          title: 'Filtrar por género'
        },
        {
          title: 'Marcar película como favorita'
        },
        {
          title: 'Vuex'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .nav {
    padding: 3em 0;
    clear: both;
    ul {
      padding-top: 1em;
      border-top: 1px solid #ddd;

    }
  }
</style>
