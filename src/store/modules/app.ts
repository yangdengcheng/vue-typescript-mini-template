import { VuexModule, Mutation, Action, getModule, Module } from 'vuex-module-decorators'
import store from '../../store'
import { getLocal } from '@/lang'

export interface IAppState {
  language: string
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  public language = getLocal()

  @Mutation
  private SET_LANGUAGE(language: string) {
      this.language = language
  }
}

export const AppModule = getModule(App)
