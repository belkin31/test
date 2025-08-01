import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/app'
import { i18n } from '@/app/provider/i18n'
import router from '@/app/provider/router'

const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
