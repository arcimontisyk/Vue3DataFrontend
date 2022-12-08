/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { createPinia } from "pinia";
import router from "./router";
import io from "socket.io-client";
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

app.use(createPinia());
app.use(router);
registerPlugins(app)

app.mount('#app')
