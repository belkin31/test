import { defineComponent, ref } from 'vue'
import AngleSmallDown from '@/shared/ui/icons/AngleSmallDown.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: { AngleSmallDown },

  setup() {
    const { locale, availableLocales } = useI18n()

    const isOpen = ref(false)

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    const selectLocale = (newLocale: string) => {
      locale.value = newLocale
      isOpen.value = false
    }
    return { locale, availableLocales, isOpen, toggleMenu, selectLocale }
  },
})
