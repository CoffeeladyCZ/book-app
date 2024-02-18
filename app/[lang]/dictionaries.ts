import 'server-only'

interface Dictionary {
  [key: string]: () => Promise<{}>;
}

const dictionaries: Dictionary = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nl: () => import('./dictionaries/cz.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()
