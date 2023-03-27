import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'

const app = createApp(App)

for (const name in ElIcons){
	app.component(name, ElIcons[name])
}

app.use(router).use(ElementPlus).mount('#app')