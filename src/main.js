import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Header from './components/header_footer/Header.vue'

const app = createApp(App)

app.use(createPinia())
app.component('app-header',Header)
app.mount('#app')

