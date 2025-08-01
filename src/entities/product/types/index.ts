export interface ProductModel {
  id: number;
  manufacturer: string;
  'release-year': string;
  'screen-diagonal-inch': string;
  'country-of-origin': string;
  'storage-capacity': string;
  'screen-refresh-rate': string;
  nfc: string;
  'esim-support': string;
  'wireless-charging-support': string;
  price: string;
  'product-name': string;
  'product-image': string;
}

export type ProductList = ProductModel[] | null;
