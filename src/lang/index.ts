import Vue from 'vue'
import VueI18n from 'vue-i18n'

import elementEnLocal from 'element-ui/lib/locale/lang/en'
import elementThLocal from 'element-ui/lib/locale/lang/th'
import elementIdLocal from 'element-ui/lib/locale/lang/id'

import enLocale from './en'
import thLocale from './th'
import idLocale from './id'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocal
    },
    th: {
        ...thLocale,
        ...elementThLocal
    },
    id: {
        ...idLocale,
        ...elementIdLocal
    }
}

export const getLocal = () => {
    return 'en'
}

const i18n = new VueI18n({
    locale: getLocal(),
    messages
})

export default i18n
