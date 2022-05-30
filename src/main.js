import Vue from 'vue'
import App from './App.vue'
import PanjangBerat from "@/PanjangBerat";
import VueRouter from 'vue-router';
import GraphicList from "@/GraphicList";

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
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
