import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import { CUSTOM_MOTION_DIRECTIVES } from './constants/motion'

const app = createApp(App)

app.use(MotionPlugin, {
  directives: CUSTOM_MOTION_DIRECTIVES
})

app.use(createPinia())
app.use(router)

app.mount('#app')
