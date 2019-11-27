import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#616161',
        secondary: '#00600f',
        accent: '#388e3c',
        error: '#FF5252',
        info: '#2196F3',
        success: '#6abf69',
        warning: '#FFC107'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
