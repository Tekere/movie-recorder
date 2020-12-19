import Vue from "vue";
import Router from "vue-router";
import Default from "./views/Default.vue";
import Home from "./views/Home.vue";
import MovieDetail from "./views/MovieDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Default,
      props: true,
      children: [
        {
          path: "movie/:id",
          name: "movie-detail",
          component: MovieDetail,
          props: true,
        },
        {
          path: "*",
          component: Home,
        },
      ],
    },
    { path: "*", redirect: "/" },
  ],
});
