import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import vue3SeamlessScroll from "vue3-seamless-scroll";
const vuetify = createVuetify({
    components,
    directives
})

declare global{
    interface Window {
        ipc?: any;
    }
}
const app = createApp(App)

app.use(router)

app.use(vue3SeamlessScroll,(name:string) => {
    console.log(name)
});

app.use(vuetify)

app.mount('#app')
