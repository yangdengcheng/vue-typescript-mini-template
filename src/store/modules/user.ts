import { VuexModule, Module, Mutation, getModule, Action } from 'vuex-module-decorators'
import store from '../../store'

export interface IUserState {}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {}

export const UserModule = getModule(User)
