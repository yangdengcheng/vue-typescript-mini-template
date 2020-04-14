import Vue, { ComponentOptions } from 'vue'
import Router from 'vue-router'

import Test from '@/views/Test.vue'

Vue.use(Router)

type Component = ComponentOptions<Vue>

export interface RouteConfig {
  path: string,
  name?: string,
  component?: Component,
  children?: RouteConfig[]
  meta?: any;
}

/*
  name:'router-name'
  meta: {
    title: 'title'               左侧导航栏的名称，写法见例子，国际化的话需要在src/lang/en(th).ts设置，并输入好相应的变量名
    icon: 'svg-name'             左侧导航栏的图标，将需要的icon创建在/src/icons/svg文件夹下，终端输入npm run svg生成指定svg组件
    hidden: true                 左侧导航栏是否显示(后续如果引入权限，通过此选项进行配置)
  }
*/

export const routes = [
    {
        path: '/',
        name: 'Test',
        meta: { hidden: false, icon: 'dashboard', title: 'nav.dashboard' },
        component: Test
    }
]

const createRouter = () => new Router({
    mode: 'hash',
    routes
})

const router = createRouter()

export default router
