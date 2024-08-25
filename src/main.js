import { createApp } from 'vue'
import App from './App.vue'
import SlotCaptionContent from './components/SlotCaptionContent.vue'

const app = createApp(App)
app.component('captioned-content', SlotCaptionContent)
app.mount('#app')
