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

export interface BuyLink {
  name: string;
  url: string;
}

export interface BookNYT {
  id: number;
  ageGroup: string;
  amazonProductUrl: string;
  articleChapterLink: string;
  author: string;
  bookImage: string;
  bookImageWidth: number;
  bookImageHeight: number;
  bookReviewLink: string;
  contributor: string;
  contributorNote: string;
  createdDate: string;
  description: string;
  firstChapterLink: string;
  price: string;
  primaryIsbn10: string;
  primaryIsbn13: string;
  bookUri: string;
  publisher: string;
  rank: number;
  rankLastWeek: number;
  sundayReviewLink: string;
  title: string;
  updatedDate: string;
  weeksOnList: number;
  buyLinks: BuyLink[];
}

export interface PopularBooksNYTResponse {
  listId: number;
  listName: string;
  listNameEncoded: string;
  displayName: string;
  updated: string;
  listImage: string | null;
  listImageWidth: number | null;
  listImageHeight: number | null;
  books: BookNYT[];
}
