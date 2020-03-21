import VueRouter from "vue-router";
import Vue from "vue";
import routes from "./routes";

Vue.use(VueRouter.install);

const router = new VueRouter({
    routes
});

export default router;
