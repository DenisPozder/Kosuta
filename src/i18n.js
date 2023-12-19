import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Serbian language imports
import restaurantHomeSerbian from './locales/restoranPocetna.json'
import restaurantHeaderSerbian from './locales/restoranHeader.json'
import restaurantAboutSerbian from './locales/oNama.json'
import restaurantGameroomSerbian from './locales/igraonica.json'
import restaurantMenuSerbian from './locales/restoranMeni.json'
import restaurantGallerySerbian from './locales/restoranGalerija.json'
import hallHomeSerbian from './locales/salePočetna.json'

// English language imports
import restaurantHomeEnglish from './locales/restaurantHome.json'
import restaurantHeaderEnglish from './locales/restaurantHeader.json'
import restaurantAboutEnglish from './locales/aboutUs.json'
import restaurantGameroomEnglish from './locales/playroom.json'
import restaurantMenuEnglish from './locales/restaurantMenu.json'
import restaurantGalleryEnglish from './locales/restaurantGallery.json'
import hallHomeEnglish from './locales/hallHome.json'

const storedLanguage = localStorage.getItem('i18nextLng') || 'sr';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            sr: {
                restaurantHome: restaurantHomeSerbian,
                restaurantHeader: restaurantHeaderSerbian,
                about: restaurantAboutSerbian,
                gameroom: restaurantGameroomSerbian,
                restaurantMenu: restaurantMenuSerbian,
                restaurantGallery: restaurantGallerySerbian,
                hallHome: hallHomeSerbian
            },
            en: {
                restaurantHome: restaurantHomeEnglish,
                restaurantHeader: restaurantHeaderEnglish,
                about: restaurantAboutEnglish,
                gameroom: restaurantGameroomEnglish,
                restaurantMenu: restaurantMenuEnglish,
                restaurantGallery: restaurantGalleryEnglish,
                hallHome: hallHomeEnglish
            }
        },
        lng: storedLanguage,
        fallbackLng: 'sr',
        detection: {
            order: ['localStorage', 'navigator']
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n