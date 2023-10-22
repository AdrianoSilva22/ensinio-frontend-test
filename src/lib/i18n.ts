import enTranslation from '@/locale/en.json'
import esTranslation from '@/locale/es.json'
import ptTranslation from '@/locale/pt.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


i18n.use(initReactI18next).init({
    resources: {
        pt: {...ptTranslation},

        en: {...enTranslation},

        es: {...esTranslation},
    },
    lng: 'pt',
})