import './style.css';
import 'ant-design-vue/dist/antd.css';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';

import App from './App.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory("/"),
  routes: [
    { path: "/", component: () => import("./components/home.vue") },
    {
      path: "/helloWorld",
      component: () => import("./components/HelloWorld.vue"),
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
