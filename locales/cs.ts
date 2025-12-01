export default {
  title: 'Book App',
  book: {
    backToHome: 'Zpět na hlavní stránku',
    title: 'Moje knihy',
    readMore: 'Číst více',
  },
  bookCard: {
    readBooks: 'Přečtené knihy',
    more: 'Více knih',
    currentlyReading: 'Momentálně čtu',
    wantRead: 'Chci si přečíst',
  },
  bookDetail: {
    author: 'Autor: ',
    publishedDate: 'Rok vydání: ',
    publisher: 'Vydavatel: ',
    pageCount: 'Počet stran: ',
    description: 'Popis: ',
  },
  home: {
    backToHome: 'Zpět na hlavní stránku',
    title: 'Home',
  },
  navigation: {
    languageSwitcher: 'Přepni z <1>{{lng}}</1> do: ',
    headTitle: 'Knižní appka',
    books: 'Moje knihy',
    home: 'Domů',
  },
  common: {
    en: 'EN',
    cz: 'CZ',
  },
  error: {
    notFoundBook: 'Kniha nebyla nalezena',
    error: 'Nastala chyba při načítání dat',
  },
} as const;
