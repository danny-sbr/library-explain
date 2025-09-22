import './style/main.css'
import './style/normalize.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VConsole from 'vconsole'

import App from './App.vue'
import router from './router'

if (import.meta.env.MODE === 'development') {
  new VConsole()
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
