import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Header from './components/header_footer/Header.vue'

const app = createApp(App)
// aşağıdaki custom directive için ilk argüman bizim directivimizi çağırırken kullanacağıımız isim. v-if ise bizimkisi v-awesome ikinci argüman ise object
app.directive('awesome', {
    beforeMount(el, binding, vnode) {
        if(binding.arg ==='blue'){
            el.style.color ='blue'
        }
        else {
            el.style.color = 'red'
        }
        el.innerHTML =binding.value;
        // el.innerHTML ='My directive awesome';
    }
})

app.use(createPinia())
app.component('app-header', Header)
app.mount('#app')

