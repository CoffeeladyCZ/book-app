export const fallbackLng = 'en'
export const languages = [fallbackLng, 'cz']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lang = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}