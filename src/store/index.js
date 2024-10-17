import { defineStore } from 'pinia';
import { account } from '../appwrite';

export const useUserStore = defineStore('user', {
  state: () => ({ user: null }),
  actions: {
    async getUser() {
      try {
        const user = await account.get();
        this.user = user;
      } catch {
        this.user = null;
      }
    },
  },
});
