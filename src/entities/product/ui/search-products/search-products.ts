import { computed, defineComponent, ref } from 'vue'
import { useProductStore } from '@/entities/product/model'
import type { ProductModel } from '@/entities/product/types';
export default defineComponent({
  components: {},

  setup() {
    const searchModel = ref<string | null>(null);
    const productStore = useProductStore();

    const onSearch = (e: InputEvent | null | undefined) => {
      const target = e?.target as HTMLInputElement | null;
      const value = target?.value;
      searchModel.value = value ? value.trim().toLowerCase() : null;
    };

    const filteredProducts = computed<ProductModel[]>(() => {
      const products = productStore.state;

      if (!products || !products.length) {
        return [];
      }

      if (!searchModel.value) {
        return products;
      }

      return products.filter((product: ProductModel) =>
        product?.['product-name'].toLowerCase().includes(searchModel.value!.toLowerCase())
      );
    });

    return {
      searchModel,
      filteredProducts,
      onSearch
    };
}});
