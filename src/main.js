import { createApp } from 'vue'
import './style.css';
import App from './App.vue'
import { createPinia } from 'pinia'
import { useUserStore } from './store'
import router from './router'

async function initializeApp() {
  const pinia = createPinia();
  const app = createApp(App);

  app.use(pinia);

  // Load and set the user
  const store = useUserStore();
  try {
    await store.getUser();
  } catch {}

  app.use(router);

  app.mount("#app");
}

initializeApp()
