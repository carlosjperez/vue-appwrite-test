import { createStore } from "vuex";
import { account } from "../appwrite";

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        async getUser({ commit }) {
            const user = await account.get();
            commit("setUser", user);
        },
    },
});
