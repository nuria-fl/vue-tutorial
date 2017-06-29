<template>
  <div>
    <h2>Inicializar el proyecto</h2>
    <p>
      Para empezar nuestro proyecto de forma rápida usaremos <a href="https://github.com/vuejs/vue-cli" target="_blank">Vue CLI</a>. Es un módulo npm que instalaremos de modo global:
    </p>
    <pre>
      npm install -g vue-cli
    </pre>
    <p><small>Usuarios de Mac: normalmente la instalación de paquetes globales requiere sudo: <code>sudo npm install -g vue-cli</code></small></p>

    <p>Este módulo nos permite iniciar un proyecto a partir de una plantilla para ahorrarnos el proceso de setup. Hay varias <a href="https://github.com/vuejs-templates/" target="_blank">plantillas oficiales</a>, pero también puedes usar una propia. Para este proyecto usaremos una variación de la plantilla oficial de webpack, que también incluye Vuex, Axios y SASS. Para inicializar un proyecto lo hacemos ejecutando <code>vue init &lt;nombre-plantilla&gt; &lt;nombre-proyecto&gt;</code></p>

    <pre>
      vue init nuria-fl/webpack vue-movies
    </pre>

    Nos hará varias preguntas sobre como queremos configurar nuestro proyecto. Podemos usar los valores por defecto (apretando enter) para todo, menos para linter y testing, que no vamos a cubrir en este tutorial. Una vez terminado nos saldrá por pantalla los siguientes pasos a seguir:

    <pre>
      cd vue-movies
      npm install
      npm run dev
    </pre>

    <router-link :to="{name: 'Step2'}" class="btn btn-lg btn-primary pull-right">Siguiente</router-link>
  </div>
</template>

<script>
export default {
  name: 'Init'
}
</script>
