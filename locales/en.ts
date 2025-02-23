export default {
  title: 'Book App',
  book: {
    backToHome: 'Back to Home',
    title: 'Books',
    readMore: 'Read More',
  },
  bookCard: {
    readBooks: 'Read books',
    more: 'Show the whole shelf',
    currentlyReading: 'Currently reading',
    wantRead: 'Want to read',
  },
  bookDetail: {
    author: 'Author: ',
    publishedDate: 'Published date: ',
    publisher: 'Publisher: ',
    pageCount: 'Page count: ',
    description: 'Description: ',
  },
  home: {
    backToHome: 'Back to Home',
    title: 'Home',
  },
  navigation: {
    languageSwitcher: 'Switch from <1>{{lng}}</1> to: ',
    headTitle: 'Book app',
    books: 'My Bookshelves',
    home: 'Home',
  },
  common: {
    en: 'EN',
    cz: 'CZ',
  },
  error: {
    notFoundBook: 'Book not found',
    error: 'An error occurred while loading data',
  },
} as const;
