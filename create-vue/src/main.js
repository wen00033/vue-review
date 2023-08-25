import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import "bootstrap/dist/js/bootstrap.js";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import Product from "./views/Product.vue";
import Contact from "./views/Contact.vue";

const app = createApp(App);
app.use(MotionPlugin);
const routes = [
  { path: "/", component: Home },
  { path: "/product", component: Products },
  { path: "/contact", component: Contact },
  { path: "/product/:id", component: Product, props: true },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

app.use(router).mount("#app");
