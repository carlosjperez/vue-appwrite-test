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
            meta: {
                noAuth: true,
            },
        },
    ],
});

router.beforeEach(async (to, from, next) => {
  const store = useUserStore();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        try {
            await store.getUser();
            next();
        } catch (error) {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;
