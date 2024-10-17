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

router.beforeEach(async (to, from, next) => {
    const store = useUserStore();
    await store.getUser();

    console.log('user', store.user)
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (store.user) {
        next();
        return
      }

      next('/login');
    } else {
      if (store.user) {
        next('/');
        return;
      }

      next();
    }
});

export default router;
