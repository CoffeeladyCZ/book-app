export interface BookItem extends GoogleBookItem {
  // Add any additional properties or methods specific to your application
  title: string;
  author: string;
  image: string;
}

export interface GoogleBookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    publishedDate: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    pageCount: number;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    language: string;
    previewLink: string;
    infoLink: string;
  };
}

export interface Book {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}

export interface BooksResponse {
  items: Book[];
}

export interface PopularBooksItem {
  ageGroup: string;
  author: string;
  contributor: string;
  contributorNote: string;
  description: string;
  bookImage: string;
  id: number
  price: number;
  primaryIsbn10: string;
  primaryIsbn13: string;
  publisher: string;
  rank: number;
  title: string;
  updatedDate: string;
}

export interface PopularBooksResponse {
  displayName: string;
  id: number;
  listId: number;
  listName: string;
  listNameEncoded: string;
  updated: string;
  books: PopularBooksItem[];
}
