import Vue from 'vue'
import App from './App.vue';
import Vuex from 'vuex';
import PanjangBerat from "@/PanjangBerat";
import VueRouter from 'vue-router';
import GraphicList from "@/GraphicList";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);


new Vue({
  render: h => h(App),
  store: new Vuex.Store({
    state: {
      homepage: true,
      search: false,
      headerTitle: 'Graphics Engine'
    },
    mutations: {
      setHomepage(state, props) {
        state.homepage = props;
      },
      setSearch(state, props) {
        state.search = props;
      },
      setHeaderTitle(state, props) {
        state.headerTitle = props;
      },
    },
    actions: {},
    modules: {}
  }),
  // eslint-disable-next-line no-undef
  router: new VueRouter({
    routes: [
      {
        path: '/',
        component: GraphicList
      },
      {
        path: '/panjang-berat',
        component: PanjangBerat
      }
    ]
  })
}).$mount('#app')
