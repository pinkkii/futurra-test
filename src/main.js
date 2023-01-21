import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueRestrictedInputDirective } from 'vue-restricted-input'
import './styles/global.scss'

const app = createApp(App)

app.use(router)

app.directive('mask', VueRestrictedInputDirective)

app.mount('#app')
