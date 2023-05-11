import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createVuetify } from 'vuetify';
const vuetify = createVuetify();

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.mount('#app')

createApp(App).use(vuetify).mount('#app');