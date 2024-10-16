import { createRouter, createWebHistory } from "vue-router";
import { account } from "../appwrite";
import store from "../store";

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
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        try {
            await store.dispatch("getUser");
            next();
        } catch (error) {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;
