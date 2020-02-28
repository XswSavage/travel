import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/style/border.css'
import './assets/style/reset.css'
import './assets/style/iconfont.css'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
