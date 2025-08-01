import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
import type { ProductList, ProductModel } from '@/entities/product/types'

export const useProductStore = defineStore('products', () => {
  const state: Ref<ProductList> = ref([
    {
      id: 1,
      manufacturer: "Apple",
      "release-year": "2024",
      "screen-diagonal-inch": "6.7",
      "country-of-origin": "Китай",
      "storage-capacity": "256ГБ",
      "screen-refresh-rate": "120Гц",
      nfc: "Да",
      "esim-support": "Да",
      "wireless-charging-support": "Да",
      price: "$999",
      "product-name": "iPhone 16 Pro",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/6c803c013e88f5d3620525aab55d7268/9286da569d27aabbc02281390acc90a90d1e3a3ae90d90f58510810c9e6870b3.jpg"
    },
    {
      id: 2,
      manufacturer: "Samsung",
      "release-year": "2025",
      "screen-diagonal-inch": "6.8",
      "country-of-origin": "Южная Корея",
      "storage-capacity": "512ГБ",
      "screen-refresh-rate": "120Гц",
      nfc: "Да",
      "esim-support": "Да",
      "wireless-charging-support": "Да",
      price: "$1199",
      "product-name": "Galaxy S25 Ultra",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/c6dc7c825e07201f32ea8d935216ef88/2f23b95eec969a45ebe58b843b715fe30341aeb9f5dbb13ae1408c233a0e373e.jpg"
    },
    {
      id: 3,
      manufacturer: "Xiaomi",
      "release-year": "2024",
      "screen-diagonal-inch": "6.55",
      "country-of-origin": "Китай",
      "storage-capacity": "128ГБ",
      "screen-refresh-rate": "90Гц",
      nfc: "Да",
      "esim-support": "Нет",
      "wireless-charging-support": "Да",
      price: "$599",
      "product-name": "Xiaomi 14",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/d5176e58ea7f54d19e9f9abe422dbd8f/831a385f76f265293448bc5b858ab3d74053e6cf4ada47e0649b959d7bcb5567.jpg"
    },
    {
      id: 4,
      manufacturer: "Google",
      "release-year": "2024",
      "screen-diagonal-inch": "6.3",
      "country-of-origin": "Китай",
      "storage-capacity": "256ГБ",
      "screen-refresh-rate": "120Гц",
      nfc: "Да",
      "esim-support": "Да",
      "wireless-charging-support": "Да",
      price: "$899",
      "product-name": "Pixel 9",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/244fe5188cc140267f983b4a87726123/cdd14590648bd5242c6d0e3776eed0911fbfd8e9daaf85d1839fb726bebf3ca7.jpg"
    },
    {
      id: 5,
      manufacturer: "OnePlus",
      "release-year": "2025",
      "screen-diagonal-inch": "6.8",
      "country-of-origin": "Китай",
      "storage-capacity": "256ГБ",
      "screen-refresh-rate": "120Гц",
      nfc: "Да",
      "esim-support": "Да",
      "wireless-charging-support": "Да",
      price: "$849",
      "product-name": "OnePlus 13",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/9ec7f2f49e06273600330359dc1d0a29/dd92bb83199635dfad6f9da1a371184524a4eec06533aa8206c6703f548db872.jpg"
    },
    {
      id: 6,
      manufacturer: "Huawei",
      "release-year": "2024",
      "screen-diagonal-inch": "6.6",
      "country-of-origin": "Китай",
      "storage-capacity": "256ГБ",
      "screen-refresh-rate": "120Гц",
      nfc: "Да",
      "esim-support": "Нет",
      "wireless-charging-support": "Да",
      price: "$799",
      "product-name": "Pura 70",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/25ee8dd589ecde5d42da3de901b1042c/d8b8a41e7569e421aaf2f1d22faa1820175faac8e5ed673882c7fe5a361bb1cc.jpg"
    },
    {
      id: 7,
      manufacturer: "Sony",
      "release-year": "2024",
      "screen-diagonal-inch": "6.5",
      "country-of-origin": "Япония",
      "storage-capacity": "128ГБ",
      "screen-refresh-rate": "120Гц",
      nfc: "Да",
      "esim-support": "Да",
      "wireless-charging-support": "Да",
      price: "$949",
      "product-name": "Xperia 1 VI",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/333eecd060c72c316ee85f2f51e3d2be/2f8119f29e9b78791b6fc4144109c6d9bd2866dac66dbd57d628256dedcf8f40.jpg"
    },
    {
      id: 8,
      manufacturer: "Oppo",
      "release-year": "2025",
      "screen-diagonal-inch": "6.7",
      "country-of-origin": "Китай",
      "storage-capacity": "256ГБ",
      "screen-refresh-rate": "120Гц",
      nfc: "Да",
      "esim-support": "Нет",
      "wireless-charging-support": "Да",
      price: "$699",
      "product-name": "Find X8",
      "product-image": "https://c.dns-shop.ru/thumb/st4/fit/320/250/8131c6376ce0a4be698ed1db4ca41a76/308b92847a0c6b35bbece6f24e71d08ecd082c5ae4e5358a630f319d2dd1c77d.jpg"
    },
    {
      id: 9,
      manufacturer: "Vivo",
      "release-year": "2024",
      "screen-diagonal-inch": "6.44",
      "country-of-origin": "Китай",
      "storage-capacity": "128ГБ",
      "screen-refresh-rate": "90Гц",
      nfc: "Нет",
      "esim-support": "Нет",
      "wireless-charging-support": "Нет",
      price: "$499",
      "product-name": "Vivo V30",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/0eabb521e6348e5750daa21abd314648/861d86ebb4959d834f86c52d986ede22ca1310b6e514e0ef274e16a12c334f4a.jpg"
    },
    {
      id: 10,
      manufacturer: "Realme",
      "release-year": "2024",
      "screen-diagonal-inch": "6.7",
      "country-of-origin": "Китай",
      "storage-capacity": "128ГБ",
      "screen-refresh-rate": "120Гц",
      nfc: "Да",
      "esim-support": "Нет",
      "wireless-charging-support": "Да",
      price: "$549",
      "product-name": "Realme GT 6",
      "product-image": "https://c.dns-shop.ru/thumb/st1/fit/320/250/9e2e2428e4d576bd8f88ba6288f7ea19/4841a09df236851ebfcbba22a11dc12a1fee591ed2f905e9a41442e8c9fc80c3.jpg"
    }
  ]);

  const setProductList = (productsList: ProductList): void => {
    state.value = productsList;
  }

  // const fetchProductList = async (): Promise<void> => {
  //   const response = await fetch('https://fake-api.dev/products');
  //   const data = await response.json();
  //   state.value = data.map((item: any) => item.data);
  // }

  const getProductList = (): ProductList => {
    return state.value;
  }

  const getProductById = (id: number): ProductModel => {
    if (!state.value) {
      throw new Error('getProductById: state empty');
    }

    const product = state.value.find((item: ProductModel) => item.id === id);

    if (!product) {
      throw new Error(`getProductById: ${id} product not found`);
    }

    return product;
  }

  return {
    state,
    setProductList,
    getProductList,
    getProductById,
  }
})
