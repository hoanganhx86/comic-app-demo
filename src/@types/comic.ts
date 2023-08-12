import {Root} from './gql';

export interface Comic {
  id: string;
  name: string;
  cover: ComicCover;
  comicNumber: string;
  startYear: number;
  storePrice: string;
  totalAvailable: number;
  likeCount: number;
  commentCount: number;
  description: string;
}

export interface ComicCover {
  image: ComicImage;
}

export interface ComicImage {
  id: string;
  url: string;
}

export type ComicData = Root<Comic>;
