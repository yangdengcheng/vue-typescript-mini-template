import Vue from 'vue'
import Vuex from 'vuex'
import { IUserState } from '@/store/modules/user'
import { IAppState } from '@/store/modules/app'

Vue.use(Vuex)

export interface IRootState {
  user: IUserState, // 用户相关
  app: IAppState // 系统相关
}

export default new Vuex.Store<IRootState>({})
