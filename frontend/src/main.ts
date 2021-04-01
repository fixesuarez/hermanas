import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import FontAwesomeIcon from './fontAwesome/FontAwesomeIcon.vue'

library.add(fas)

const webApp = createApp(App)

webApp.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.clickOutsideEvent = function(event: any) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
})

webApp.use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')


