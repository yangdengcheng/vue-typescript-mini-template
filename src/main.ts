import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from '@/store'
import './plugins/element.ts'
import * as filters from '@/filters'
import i18n from '@/lang'
import SvgIcon from 'vue-svgicon'
import '@/styles/index.scss'
import '@/icons/components'
import '@/styles/element-variables.scss'

Vue.config.productionTip = false

// 设置svg的前缀以及默认大小
Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '1em',
    defaultHeight: '1em'
})

// 注册全局Filter
Object.keys(filters).forEach(key => {
    Vue.filter(key, (filters as {[ key: string ]: Function})[key])
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
