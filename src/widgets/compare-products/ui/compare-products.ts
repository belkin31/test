import { computed, defineComponent, ref } from 'vue'
import Popover from '@/shared/ui/popover/Popover.vue'
import SearchProducts from '@/entities/product/index.ts'
import { useProductStore } from '@/entities/product/model'
import type { ProductList, ProductModel } from '@/entities/product/types';
import ChevronIconSrc from '@/shared/assets/icons/chevron.svg'
export default defineComponent({
  components: {SearchProducts, Popover},

  setup() {
    const currentCategory = ref('Смартфоны');
    const productStore = useProductStore();
    const selectedProductIds = ref<number[]>([1, 3, 5]);
    const {getProductById} = productStore;

    const getSelectedProducts = computed(() => {
      const products: ProductList = [];
      selectedProductIds.value.forEach((id): void => {
        products.push(getProductById(id));
      });

      return products;
    });


    const allProductParameters = computed((): (keyof ProductModel)[] => {
      if (!getSelectedProducts.value || !getSelectedProducts.value.length) {
        return [];
      }
      const excludedKeys: (keyof ProductModel)[] = ['product-image', 'product-name'];
      return Object.keys(getSelectedProducts.value[0])
        .filter(key => !excludedKeys.includes(key as keyof ProductModel)) as (keyof ProductModel)[];
    });

    return {getSelectedProducts, currentCategory, ChevronIconSrc, allProductParameters}
  }
})
