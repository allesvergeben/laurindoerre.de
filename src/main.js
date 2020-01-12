import Vue from 'vue'
import './plugins/components'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  icons: {
    iconfont: 'md'
  },
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
