import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#e8e8e8',
        secondary: '#00600f',
        accent: '#388e3c',
        error: '#FF5252',
        info: '#2196F3',
        success: '#6abf69',
        warning: '#FFC107'
      },
      dark: {
        primary: '#3c3c3c',
        secondary: '#00600f',
        accent: '#388e3c',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
