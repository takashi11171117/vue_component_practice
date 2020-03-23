import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

console.log(process.env)
axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_API_URL

Vue.config.productionTip = false

const Modal = {
  install (Vue) {
    this.event = new Vue();

    Vue.prototype.$modal = {
      show (modal, params = {}) {
        Modal.event.$emit('show', modal, params);
      },
      hide (modal) {
        Modal.event.$emit('hide', modal);
      },
      $event: this.event
    }
  }
}

Vue.use(Modal);


store.dispatch('auth/me').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})