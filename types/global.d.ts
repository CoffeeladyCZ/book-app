export interface GoogleBooksAPIResponse {
  kind: string;
  totalItems: number;
  items?: Volume[];
}

export interface Volume {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: SearchInfo;
}

export interface VolumeInfo {
  title: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount?: number;
  printType: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary?: PanelizationSummary;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Pdf;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface Epub {
  isAvailable: boolean;
  acsTokenLink?: string;
}

export interface Pdf {
  isAvailable: boolean;
  acsTokenLink?: string;
}

export interface SearchInfo {
  textSnippet: string;
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
  id: number;
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
