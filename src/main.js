import Vue from "vue";
import { Table, Input, Button, Field} from "buefy";
import router from "./router/router";
import store from "./store/index";
import App from "./App";
import "buefy/dist/buefy.css";

Vue.use(Table);
Vue.use(Input);
Vue.use(Button);
Vue.use(Field);


Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router,
    store
}).$mount("#app");
