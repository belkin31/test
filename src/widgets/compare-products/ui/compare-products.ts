import { computed, defineComponent, ref } from 'vue'
import Popover from '@/shared/ui/popover/Popover.vue'
import SearchProducts from '@/entities/product/index.ts'
import { useProductStore } from '@/entities/product/model'
import type { ProductModel } from '@/entities/product/types';
import ChevronIconSrc from '@/shared/assets/icons/chevron.svg'
import CrossColoredIconSrc from '@/shared/assets/icons/cross-colored.svg';
import SuccessColoredIconSrc from '@/shared/assets/icons/success-colored.svg'
import DifferentArrowColoredIconSrc from '@/shared/assets/icons/different-arrow-colored.svg'

export default defineComponent({
  components: { SearchProducts, Popover },
  props: {
    minCompareColumn: {
      type: Number,
      default: 2,
    },
    maxCompareColumn: {
      type: Number,
      default: 6,
    }
  },
  setup() {
    const currentCategory = ref('Смартфоны');
    const productStore = useProductStore();
    const selectedProductIds = ref<(number | null)[]>([1, 3, 5]);
    const showDifferences = ref(false);
    const { getProductById } = productStore;

    const getSelectedProducts = computed(() => {
      const products: (ProductModel | null)[] = [];
      selectedProductIds.value.forEach((id): void => {
        if (id) {
          const product = getProductById(id);
          products.push(product || null);
        } else {
          products.push({
            'id': -1,
            'manufacturer': "-",
            "release-year": "-",
            "screen-diagonal-inch": "-",
            "country-of-origin": "-",
            "storage-capacity": "-",
            "screen-refresh-rate": "-",
            'nfc': '-',
            "esim-support": '-',
            "wireless-charging-support": '-',
            'price': "-",
            "product-name": "-",
            "product-image": ""
          } as ProductModel);
        }
      });
      return products;
    });

    const allProductParameters = computed((): (keyof ProductModel)[] => {
      const firstProduct = getSelectedProducts.value.find(product => product && product.id !== -1);
      if (!firstProduct) {
        return [];
      }
      const excludedKeys: (keyof ProductModel)[] = ['product-image', 'product-name', 'id'];
      return Object.keys(firstProduct)
        .filter(key => !excludedKeys.includes(key as keyof ProductModel)) as (keyof ProductModel)[];
    });

    const filteredProductParameters = computed((): (keyof ProductModel)[] => {
      if (!showDifferences.value) {
        return allProductParameters.value;
      }
      return allProductParameters.value.filter(param => {
        const values = getSelectedProducts.value
          .filter(product => product && product.id !== -1)
          .map(product => product![param]);
        return new Set(values).size > 1;
      });
    });

    const onClickCompareCounter = (count: number) => {
      if (selectedProductIds.value.length !== count) {
        if (count < selectedProductIds.value.length) {
          selectedProductIds.value = selectedProductIds.value.slice(0, count);
        } else {
          selectedProductIds.value = [
            ...selectedProductIds.value,
            ...Array(count - selectedProductIds.value.length).fill(null)
          ];
        }
      }
    };

    const setIdByIndex = (index: number, productId: number) => {
      if (selectedProductIds.value.includes(productId)) {
        alert('Этот продукт уже добавлен для сравнения!');
        return;
      }
      selectedProductIds.value = selectedProductIds.value.map((id, i) =>
        i === index ? productId : id
      );
    };

    return {
      getSelectedProducts,
      currentCategory,
      selectedProductIds,
      setIdByIndex,
      ChevronIconSrc,
      CrossColoredIconSrc,
      onClickCompareCounter,
      allProductParameters,
      filteredProductParameters,
      DifferentArrowColoredIconSrc,
      SuccessColoredIconSrc,
      showDifferences
    }
  }
})
