import './registerServiceWorker'

import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from './router'

library.add(faHome, faUser, faGithub)

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
