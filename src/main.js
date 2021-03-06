import Vue from 'vue'
import 'bulma/bulma.sass';
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
 
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
