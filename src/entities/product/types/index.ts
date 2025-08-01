export interface ProductModel {
  'id': number;
  'manufacturer': string;
  'release-year': string;
  'screen-diagonal-inch': string;
  'country-of-origin': string;
  'storage-capacity': string;
  'screen-refresh-rate': string;
  'nfc': boolean | string;
  'esim-support': boolean | string;
  'wireless-charging-support': boolean | string;
  'price': string;
  'product-name': string;
  'product-image': string;
}

export type ProductList = ProductModel[] | null;
