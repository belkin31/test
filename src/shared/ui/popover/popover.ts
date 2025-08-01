import { defineComponent, ref } from 'vue'
import SearchProducts from '@/entities/product/index.ts'
export default defineComponent({
  components: {SearchProducts},

  setup() {
    const isOpen = ref<boolean>(false);
    const toggle = (): void => {
      isOpen.value = !isOpen.value;
    };
    return {isOpen, toggle}
  },
})
