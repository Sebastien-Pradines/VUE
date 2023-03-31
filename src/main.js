import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import store from "./store";

Vue.config.productionTip = false;

const opts = {
  icons: {
    iconfont: "mdi"
  }
};
Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(opts),
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
