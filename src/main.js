import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const Modal = {
  install (Vue) {
    this.event = new Vue();

    Vue.prototype.$modal = {
      show (modal, params = {}) {
        Modal.event.$emit('show', modal, params);
      },
      $event: this.event
    }
  }
}

Vue.use(Modal);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
