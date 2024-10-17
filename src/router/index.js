import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../views/Home.vue"),
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/login",
            component: () => import("../views/Login.vue"),
        },
    ],
});

router.beforeEach((to, from, next) => {
  const store = useUserStore();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !store.user) {
    next('/login');
  } else if (!requiresAuth && store.user) {
    next('/');
  } else {
    next();
  }
});

export default router;
