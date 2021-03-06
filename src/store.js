import { set, toggle } from '@/utils/vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null
  },
  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer')
  }
})
