import Vue from 'vue'
import App from './App.vue'
// import './plugins/ant-design-vue.js'
import router from './router'
import store from './store'
import { get, post } from './utils/http'
import { filterTime, filterStrTime } from './utils/filterTime.js'
import { zoomImg } from './utils/zoomImg.js'
import { setNum } from './utils/utils.js'
import { setErrorLog } from './utils/errorLog.js'
import ElementUI from 'element-ui'
import myAlert from './assets/js/myAlert.js'
import './assets/css/element-variables.scss'
import './assets/css/reset.css'
import { checkAuth } from './utils/auth.js'
import { validate } from './utils/validate'
import './assets/font/style.css'
import './assets/font/iconfont.css'
import BaiduMap from 'vue-baidu-map'
import moment from 'moment'
import adaptive from './directive/table_resize'
// ant-ui
import './assets/css/ant-ui.css'
import TreeSelect from 'ant-design-vue/lib/tree-select'

Vue.use(adaptive)
Vue.component(TreeSelect.name, TreeSelect)
// import 'babel-polyfill'
Vue.prototype.$checkAuth = checkAuth
Vue.prototype.$moment = moment
Vue.use(ElementUI)
// Vue.use(validate)
Vue.prototype.$msg = function (parms) {
    this.$message({
        message: parms.message,
        type: parms.type,
        offset: document.body.offsetHeight / 2
    })
}

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$myAlert = myAlert
Vue.prototype.$lookImg = zoomImg
Vue.prototype.$setNum = setNum
Vue.prototype.$validate = validate
Vue.use(BaiduMap, {
    ak: 'f7GpjqXB2NkRGlzqIqywWTbo'
})

Vue.config.productionTip = false

Vue.filter('filterTime', filterTime)
Vue.filter('filterStrTime', filterStrTime)
Vue.filter('filterCommon', function (id, list, value, label) {
    for (let element of list) {
        if (element[value || 'value'] - 0 === id - 0) {
            return element[label || 'label']
        }
    }
})
Vue.filter('filterCommonA', function (id, list, value, label) {
    for (let element of list) {
        if (element.value === id) {
            return element[label || 'label']
        }
    }
})

Vue.config.errorHandler = function (err, vm, info) {
    setErrorLog(1, err, vm.$route.fullPath, vm.$route.meta.title, new Date() - 0, info)
}
Vue.config.warnHandler = function (msg, vm, trace) {
    setErrorLog(1, ('[Vue warn]: ' + msg + trace), vm.$route.fullPath, vm.$route.meta.title, new Date() - 0)
}

const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

export default vm
