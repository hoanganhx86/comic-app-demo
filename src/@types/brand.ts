import {Root} from './gql';

export interface Brand {
  id: string;
  name: string;
  image: Image;
}

export interface Image {
  url: string;
}

export type BrandData = Root<Brand>;
