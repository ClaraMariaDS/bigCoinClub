import { createApp } from 'vue'
import App from './App.vue'

import router from './components/helpers/router'
import i18n from './i18n'

const app = createApp(App).use(i18n)

app.use(router)

.mount('#app')