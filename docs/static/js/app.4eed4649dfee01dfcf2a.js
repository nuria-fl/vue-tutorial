webpackJsonp([0],[,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{resultHidden:!0}},methods:{showResult:function(){this.resultHidden=!1},hideResult:function(){this.resultHidden=!0}}}},,function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),r=a(o),s=t(37),i=a(s),l=t(19),c=a(l),u=t(20),v=a(u),d=t(22),p=a(d),_=t(23),m=a(_),f=t(24),h=a(f),b=t(25),g=a(b),y=t(26),x=a(y),q=t(18),E=a(q);r.default.use(i.default),n.default=new i.default({mode:"history",routes:[{path:"/",name:"Home",component:c.default},{path:"/step1",name:"Step1",component:v.default},{path:"/step2",name:"Step2",component:p.default},{path:"/step3",name:"Step3",component:m.default},{path:"/step4",name:"Step4",component:h.default},{path:"/step5",name:"Step5",component:g.default},{path:"/step6",name:"Step6",component:x.default},{path:"/extras",name:"Extras",component:E.default}],scrollBehavior:function(e,n,t){return t||{x:0,y:0}}})},function(e,n,t){t(17);var a=t(0)(t(5),t(35),null,null);e.exports=a.exports},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(21),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={name:"app",components:{AppMenu:o.default}}},function(e,n,t){"use strict"},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"Home"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"Init"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{items:[{title:"Inicializar el proyecto"},{title:"Crear un componente"},{title:"Comunicación con la api"},{title:"Filtrar por género"},{title:"Marcar película como favorita"},{title:"Vuex"}]}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={data:function(){return{bindingExample:"{{ nombreDeLaPropiedad }}"}},mixins:[o.default]}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={mixins:[o.default]}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={mixins:[o.default]}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={mixins:[o.default]}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a);n.default={mixins:[o.default]}},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=t(2),r=a(o),s=t(4),i=a(s),l=t(3),c=a(l);r.default.config.productionTip=!1,new r.default({el:"#app",router:c.default,template:"<App/>",components:{App:i.default}})},function(e,n){},function(e,n){},function(e,n,t){var a=t(0)(t(6),t(27),null,null);e.exports=a.exports},function(e,n,t){var a=t(0)(t(7),t(34),null,null);e.exports=a.exports},function(e,n,t){var a=t(0)(t(8),t(36),null,null);e.exports=a.exports},function(e,n,t){t(16);var a=t(0)(t(9),t(33),null,null);e.exports=a.exports},function(e,n,t){var a=t(0)(t(10),t(32),null,null);e.exports=a.exports},function(e,n,t){var a=t(0)(t(11),t(31),null,null);e.exports=a.exports},function(e,n,t){var a=t(0)(t(12),t(30),null,null);e.exports=a.exports},function(e,n,t){var a=t(0)(t(13),t(29),null,null);e.exports=a.exports},function(e,n,t){var a=t(0)(t(14),t(28),null,null);e.exports=a.exports},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Extras")]),e._v(" "),t("p",[e._v("El tutorial termina aquí, pero con lo que has aprendido puedes seguir mejorando la aplicación y practicar más conceptos. Algunas ideas:")]),e._v(" "),t("ul",[t("li",[e._v("Añade un botón para resetear el filtro de género")]),e._v(" "),t("li",[e._v("Añade la funcionalidad para desmarcar una película.")]),e._v(" "),t("li",[e._v("Explora la "),t("a",{attrs:{href:"https://www.themoviedb.org/documentation/api/discover",target:"_blank"}},[e._v("api de MovieDB")]),e._v(" y crea otras secciones: películas más valoradas, estrenos, filtros por año, director…")])]),e._v(" "),t("h2",[e._v("Recursos")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org"}},[e._v("Documentación oficial de Vue")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://router.vuejs.org"}},[e._v("Documentación oficial de Vue Router")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org/en/"}},[e._v("Documentación oficial de Vuex")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue"}},[e._v("Awesome Vue: Plugins, librerías, recursos, tutoriales…")])])])])}]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Vuex")]),e._v(" "),t("p"),e._v(" "),t("p",[e._v("¿Necesitas ayuda? "),t("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),e.showResult(n)}}},[e._v("Ver el código de este paso")])]),e._v(" "),t("div",{class:e.resultHidden?"hidden":""},[t("h3",[e._v("src/components/Home.vue")]),e._v(" "),t("pre",[e._v("\n\n    ")]),e._v(" "),t("h3",[e._v("src/components/Movie.vue")]),e._v(" "),t("pre",[e._v("\n    ")]),e._v(" "),t("button",{staticClass:"btn btn--default btn--sm",attrs:{type:"button"},on:{click:e.hideResult}},[e._v("Ocultar")]),e._v(" "),t("br"),e._v(" "),t("br")]),e._v(" "),t("router-link",{staticClass:"btn btn-lg btn-primary pull-right",attrs:{to:{name:"Extras"}}},[e._v("Fin")])],1)},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Marcar película como favorita")]),e._v(" "),e._m(0),e._v(" "),t("pre",[e._v('\n    <movie v-for="movie in filteredMovies" :movie="movie"><movie>\n  ')]),e._v(" "),e._m(1),e._v(" "),t("pre",[e._v('\n    <article class="movies__item">\n      <button class="movies__like">\n        <i class="fa fa-star"></i>\n      </button>\n      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">\n    </article>\n  ')]),e._v(" "),e._m(2),e._v(" "),t("pre",[e._v("\n    <i :class=\"movie.saved ? 'fa fa-check' : 'fa fa-star'\"></i>\n  ")]),e._v(" "),e._m(3),e._v(" "),t("pre",[e._v('\n    <span v-show="movie.saved">Guardada</span>\n  ')]),e._v(" "),t("p",[e._v("¿Necesitas ayuda? "),t("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),e.showResult(n)}}},[e._v("Ver el código de este paso")])]),e._v(" "),t("div",{class:e.resultHidden?"hidden":""},[t("h3",[e._v("src/components/Home.vue")]),e._v(" "),t("pre",[e._v("\n\n    ")]),e._v(" "),t("h3",[e._v("src/components/Movie.vue")]),e._v(" "),t("pre",[e._v("\n    ")]),e._v(" "),t("button",{staticClass:"btn btn--default btn--sm",attrs:{type:"button"},on:{click:e.hideResult}},[e._v("Ocultar")]),e._v(" "),t("br"),e._v(" "),t("br")]),e._v(" "),t("router-link",{staticClass:"btn btn-lg btn-primary pull-right",attrs:{to:{name:"Step6"}}},[e._v("Siguiente")])],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Vamos a añadir un botón para marcar una película como favorita. Primero de todo vamos a mover el detalle de la película en un componente propio para separar funcionalidades. Crea un nuevo componente "),t("code",[e._v("Movie.vue")]),e._v(" que reciba una propiedad "),t("code",[e._v("movie")]),e._v(" e impórtalo en el componente Home. Puedes iterar con "),t("code",[e._v("v-for")]),e._v(" sobre un componente de la misma forma que con un tag normal de html:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("\n    Copia el mismo template que tenías para el detalle de película en el componente Movie y añade un botón (yo he usado la librería "),t("a",{attrs:{href:"http://fontawesome.io/",target:"_blank"}},[e._v("Font Awesome")]),e._v(" para ponerle un iconito, pero hazlo a tu gusto). Nos quedará algo así:\n  ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Ahora crea un método "),t("code",[e._v("saveMovie")]),e._v(" en "),t("code",[e._v("@click")]),e._v(" del botón, que setee "),t("code",[e._v("movie.saved")]),e._v(" a "),t("code",[e._v("true")]),e._v(". Haz una condición en el template que muestre alguna marca de que la película se ha marcado correctamente. Usando font awesome, podemos cambiar la clase según una condición así:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("O puedes mostrar un tag con "),t("code",[e._v("v-show")]),e._v(":")])}]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Filtrar por género")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("pre",[e._v("\n    export default {\n      props: ['items', 'selected']\n    }\n  ")]),e._v(" "),e._m(3),e._v(" "),t("pre",[e._v("\n    import dropdown from './Dropdown'\n\n    export default {\n      data() {\n        movies: [],\n        genres: [],\n        selectedGenre: null\n      },\n      components: {\n        dropdown\n      },\n      // ...\n    }\n  ")]),e._v(" "),t("p",[e._v("Y pásale el array de géneros y la propiedad seleccionada:")]),e._v(" "),t("pre",[e._v('\n    <dropdown :items="genres" :selected="selectedGenre"><dropdown>\n  ')]),e._v(" "),e._m(4),e._v(" "),t("pre",[e._v('\n    <select :value="selected">\n      <option v-for="item in items" :value="item.id">\n        ...\n  ')]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),t("pre",[e._v('\n    <select @change="selectGenre($event)">\n  ')]),e._v(" "),e._m(7),e._v(" "),t("pre",[e._v("\n    selectGenre($event) {\n      this.$emit('update:selected', $event.target.value)\n    }\n  ")]),e._v(" "),e._m(8),e._v(" "),t("pre",[e._v('\n    <dropdown :items="genres" :selected.sync="selectedGenre"><dropdown>\n  ')]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),t("pre",[e._v("\n    computed: {\n      filteredMovies() {\n        if (this.selectedGenre) {\n          const genre = parseInt(this.selectedGenre)\n\n          return this.movies.filter( movie => {\n            return movie.genre_ids.indexOf(genre) !== -1\n          })\n        } else {\n          return this.movies\n        }\n      }\n    }\n  ")]),e._v(" "),e._m(11),e._v(" "),t("p",[e._v("¿Necesitas ayuda? "),t("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),e.showResult(n)}}},[e._v("Ver el código de este paso")])]),e._v(" "),t("div",{class:e.resultHidden?"hidden":""},[t("h3",[e._v("src/components/Home.vue")]),e._v(" "),t("pre",[e._v("\n    ")]),e._v(" "),t("button",{staticClass:"btn btn--default btn--sm",attrs:{type:"button"},on:{click:function(n){e.hideResult()}}},[e._v("Ocultar")]),e._v(" "),t("br"),e._v(" "),t("br")]),e._v(" "),t("router-link",{staticClass:"btn btn-lg btn-primary pull-right",attrs:{to:{name:"Step5"}}},[e._v("Siguiente")])],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Ahora que tenemos nuestra lista de componentes, vamos a añadir la función de filtrar por género. Fíjate en la información que tiene cada película (puedes mirar las propiedades de tus componentes fácilmente con la extensión "),t("a",{attrs:{href:"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en",target:"_blank"}},[e._v("Vue Devtools para Chrome")]),e._v("). Verás que cada película tiene un array de "),t("code",[e._v("genre_ids")]),e._v(" pero son ids numéricos, no es demasiado user-friendly... para poder trabajar con ellos vamos a tener que hacer otra llamada a la api para saber a qué corresponde cada id.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Crea una función "),t("code",[e._v("getGenres")]),e._v(" en el servicio Api que hemos creado en el paso anterior que haga un get a "),t("code",[e._v("/genre/movie/list")]),e._v(". En la función "),t("code",[e._v("getMovies")]),e._v(" devolvíamos "),t("code",[e._v("response.data.results")]),e._v(", pero ahora la respuesta de la api es algo distinta y tenemos que devolver "),t("code",[e._v("response.data.genres")]),e._v(". Utiliza esta función en el componente Home para guardar los géneros en las propiedades del componente, de la misma forma que hemos hecho con "),t("code",[e._v("movies")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Ahora que tenemos un array de géneros podemos crear nuestro selector. Como el selector va a tener un poco de lógica, vamos a crearlo en un componente a parte. Crea un nuevo componente "),t("code",[e._v("Dropdown.vue")]),e._v(" que reciba como propiedades el array de géneros, y la opción seleccionada. Podemos definir las propiedades que un componente espera recibir con "),t("code",[e._v("props")]),e._v(": ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Importa este componente en Home y crea una nueva propiedad que sea "),t("code",[e._v("selectedGenre")]),e._v(", por ahora seteada a "),t("code",[e._v("null")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Ahora que Dropdown ya recibe datos, haz un "),t("code",[e._v("<select>")]),e._v(" en el que cada option muestre el nombre del género y tenga como valor su id. Como valor del propio select, usa la propiedad "),t("code",[e._v("selected")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Cada vez que el usuario cambie de opción vamos a tener que comunicarle al componente Home que tiene que filtrar las películas por el género seleccionado. Para pasar información de un componente hijo a su componente padre usamos "),t("strong",[e._v("eventos")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Vamos a lanzar un evento en el evento change del select. Podemos ejecutar métodos sobre un elemento html usando "),t("code",[e._v("v-on:nombreDelEvento")]),e._v(" o, más corto, "),t("code",[e._v("@nombreDelEvento")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Crea un método "),t("code",[e._v("selectGenre($event)")]),e._v(" que emita un evento con el id del género seleccionado. ¿Como podemos saber el valor seleccionado? El parámetro "),t("code",[e._v("$event")]),e._v(" es un evento javascript normal, en el que tenemos información del elemento que lo ha lanzado. Haz un "),t("code",[e._v("console.log")]),e._v(" de $event. Verás que la información que necesitamos está en "),t("code",[e._v("target.value")]),e._v(". El método nos quedará así:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Ahora tenemos que hacer un pequeño cambio en el componente Home para que el valor de selected se actualice. Añadiendo "),t("code",[e._v(".sync")]),e._v(" a una propiedad podemos actualizarla automáticamente cada vez que se lance un evento "),t("code",[e._v("update:nombreDeLaPropiedad")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Con el Vue Devtools abierto, prueba a seleccionar distintos géneros y mira si se actualiza la propiedad "),t("code",[e._v("selectedGenre")]),e._v(" en el componente Home.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Ahora solo nos falta filtrar el array de películas por el género seleccionado. Esto lo podemos hacer con una "),t("strong",[e._v("propiedad computada")]),e._v(". Las propiedades computadas son funciones normales, con la ventaja de que se actualizan automáticamente cada vez que cambian las propiedades de las que dependen. Vamos a filtrar el array movies solo si tenemos un género seleccionado:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Por último, en el template cambia el v-for para que itere por la nueva propiedad computada "),t("code",[e._v("filteredMovies")]),e._v(". ¡Ya tenemos un filtro funcional!")])}]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Comunicación con la api")]),e._v(" "),t("p",[e._v("Ahora tenemos un componente que nos puede listar tantas películas como tengamos en el array, pero añadirlas a mano no apetece demasiado. Vamos a crear un servicio que haga una llamada a la api de MovieDB para rellenar el array dinámicamente.")]),e._v(" "),e._m(0),e._v(" "),t("pre",[e._v("\n    import axios from 'axios'\n  ")]),e._v(" "),e._m(1),e._v(" "),t("pre",[e._v("\n    export default {\n      getMovies() {\n        return axios.get(url)\n          .then((response) => {\n            return response.data.results\n          })\n          .catch((error) => {\n            // ...\n          });\n      }\n    }\n  ")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("¿Necesitas ayuda? "),t("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),e.showResult(n)}}},[e._v("Ver el código de este paso")])]),e._v(" "),t("div",{class:e.resultHidden?"hidden":""},[t("h3",[e._v("src/services/api.js")]),e._v(" "),t("pre",[e._v("\n      import axios from 'axios'\n\n      const host = 'https://api.themoviedb.org/3'\n      const apiKey = 'api_key=4bcacd5bcdf6d2ae0125c890eab6e4ae';\n\n      export default {\n        getMovies() {\n          return axios.get(`${host}/discover/movie?${apiKey}`)\n            .then(function (response) {\n              return response.data.results;\n            })\n            .catch(function (error) {\n              console.log(error);\n            });\n        }\n      }\n    ")]),e._v(" "),t("h3",[e._v("src/components/Home.vue")]),e._v(" "),t("pre",[e._v("\n    ")]),e._v(" "),t("button",{staticClass:"btn btn--default btn--sm",attrs:{type:"button"},on:{click:e.hideResult}},[e._v("Ocultar")]),e._v(" "),t("br"),e._v(" "),t("br")]),e._v(" "),t("router-link",{staticClass:"btn btn-lg btn-primary pull-right",attrs:{to:{name:"Step4"}}},[e._v("Siguiente")])],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Vamos a crear un nuevo fichero en "),t("code",[e._v("src/services/api.js")]),e._v(". Importaremos la librería Axios, que ya tendremos instalada al haber usado el starter.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Vamos a crear una función "),t("code",[e._v("getMovies")]),e._v(" que devuelva el resultado de la llamada a la api. Como es un proceso asíncrono, necesitamos usar una promesa. Pero como Axios ya es promise-based, solo tenemos que hacer algo así:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("La función axios.get recibe como parámetro la url a la que hacer la llamada, que es: "),t("code",[e._v("https://api.themoviedb.org/3/discover/movie?api_key=4bcacd5bcdf6d2ae0125c890eab6e4ae")]),e._v(" (Sugerencia: como probablemente vamos a tener que hacer mas requests a la misma api, es buena idea separar el host y la api key en variables que podamos reutilizar).")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Importa el servicio en el componente que has creado en el paso anterior y llama la función "),t("code",[e._v("getMovies")]),e._v(". Acuérdate que en un componente podemos crear hooks que se ejecutan en determinados momentos del ciclo de vida de un componente. En este caso nos interesa ir a buscar la información cuando se crea el componente, es decir, en el hook "),t("code",[e._v("created()")]),e._v(". Como nuestro servicio usa promises, en el "),t("code",[e._v("then")]),e._v(" podemos asignar la respuesta de la api a nuestro array "),t("code",[e._v("movies")])])}]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Crear un componente")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),t("pre",[e._v('\n    movie: {\n      "vote_average":7,\n      "title":"Wonder Woman",\n      "poster_path":"\\/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",\n      "overview":"An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",\n      "release_date":"2017-05-30"\n    }\n  ')]),e._v(" "),t("p",[e._v("Ahora crea un template para mostrar el título, la puntuación y el poster de la imagen. La api de MovieDB solo nos da el nombre del fichero del poster, nos faltará añadirle toda la ruta: https://image.tmdb.org/t/p/w500/")]),e._v(" "),t("p",[e._v("Acuérdate que los bindings se hacen "),t("code",[e._v(e._s(e.bindingExample))]),e._v(" para contenido dentro de etiquetas y con "),t("code",[e._v('v-bind="nombreDelaPropiedad"')]),e._v(" o "),t("code",[e._v(':="nombreDelaPropiedad"')]),e._v(" para atributos.")]),e._v(" "),t("p",[e._v("Una vez lo tengas, cambia la propiedad movie por un array que contenga dos objetos:")]),e._v(" "),t("pre",[e._v('\n    movies: [\n      {\n        "vote_average":7,\n        "title":"Wonder Woman",\n        "poster_path":"\\/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",\n        "overview":"An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",\n        "release_date":"2017-05-30"\n      },\n      {\n        "vote_average":8.1,\n        "title":"Interstellar",\n        "poster_path":"\\/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",\n        "overview":"Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",\n        "release_date":"2014-11-05"\n      }\n    ]\n  ')]),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("¿Necesitas ayuda? "),t("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),e.showResult(n)}}},[e._v("Ver el código de este paso")])]),e._v(" "),t("div",{class:e.resultHidden?"hidden":""},[t("h3",[e._v("src/components/Home.vue")]),e._v(" "),t("pre",[e._v("\n\n    ")])]),e._v(" "),t("router-link",{staticClass:"btn btn-lg btn-primary pull-right",attrs:{to:{name:"Step3"}}},[e._v("Siguiente")])],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("\n    Vamos a crear un nuevo componente Home.vue en "),t("code",[e._v("src/components")]),e._v(". Acuérdate de darle la estructura básica de un componente Vue. Dentro del fichero "),t("code",[e._v("src/routes/index.js")]),e._v(" sustituye el que viene por defecto por el que acabas de crear.\n  ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("\n    Crea una propiedad "),t("code",[e._v("movie")]),e._v(" en tu componente con este objeto:\n  ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Ahora utiliza el mismo template para pintar los dos objetos. Acuérdate que puedes iterar por arrays y objetos usando "),t("code",[e._v('v-for="movie in movies"')])])}]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"nav"},[t("h4",[e._v("Index")]),e._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:{name:"Home"}}},[e._v("\n        Inicio\n      ")])],1),e._v(" "),e._l(e.items,function(n,a){return t("li",[t("router-link",{attrs:{to:{name:"Step"+(a+1)}}},[e._v("\n        Paso "+e._s(a+1)+": "+e._s(n.title)+"\n      ")])],1)}),e._v(" "),t("li",[t("router-link",{attrs:{to:{name:"Extras"}}},[e._v("\n        Extras\n      ")])],1)],2)])},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{staticClass:"lead"},[e._v("En este tutorial vamos a hacer una introducción práctica al desarrollo de SPAs (single-page applications) con Vue.js.")]),e._v(" "),e._m(0),e._v(" "),t("p",{staticClass:"text-center"},[t("router-link",{staticClass:"btn btn-lg btn-primary",attrs:{to:{name:"Step1"}}},[e._v("Empezar")])],1)])},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"lead"},[e._v("Crearemos una aplicación sencilla que nos va a listar películas usando la api de "),t("a",{attrs:{href:"http://www.themoviedb.org/"}},[e._v("MovieDB")]),e._v(", con la posibilidad de marcarlas como favoritas, viendo conceptos propios de Vue y de SPA en general, como componentes, routing, estado de la aplicación, etc")])}]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("br"),e._v(" "),t("h1",[e._v("Construir una aplicación con Vue.js")]),e._v(" "),t("br"),e._v(" "),t("router-view"),e._v(" "),t("app-menu")],1)},staticRenderFns:[]}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Inicializar el proyecto")]),e._v(" "),e._m(0),e._v(" "),t("pre",[e._v("\n    npm install -g vue-cli\n  ")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("pre",[e._v("\n    vue init nuria-fl/webpack vue-movies\n  ")]),e._v("\n\n  Nos hará varias preguntas sobre como queremos configurar nuestro proyecto. Podemos usar los valores por defecto (apretando enter). Una vez terminado nos saldrá por pantalla los siguientes pasos a seguir:\n\n  "),t("pre",[e._v("\n    cd vue-movies\n    npm install\n    npm run dev\n  ")]),e._v(" "),t("router-link",{staticClass:"btn btn-lg btn-primary pull-right",attrs:{to:{name:"Step2"}}},[e._v("Siguiente")])],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("\n    Para empezar nuestro proyecto de forma rápida usaremos "),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[e._v("Vue CLI")]),e._v(". Es un módulo npm que instalaremos de modo global:\n  ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("small",[e._v("Si no funciona por error de permisos, prueba con "),t("code",[e._v("sudo npm install -g vue-cli")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Este módulo nos permite iniciar un proyecto a partir de una plantilla para ahorrarnos el proceso de setup. Hay varias "),t("a",{attrs:{href:"https://github.com/vuejs-templates/"}},[e._v("plantillas oficiales")]),e._v(", pero también puedes usar una propia. Para este proyecto usaremos una variación de la plantilla oficial de webpack, que también incluye Vuex, Axios y SASS. Para inicializar un proyecto lo hacemos ejecutando "),t("code",[e._v("vue init <nombre-plantilla> <nombre-proyecto>")])])}]}}],[15]);
//# sourceMappingURL=app.4eed4649dfee01dfcf2a.js.map