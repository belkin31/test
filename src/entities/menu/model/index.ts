import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export const useMenu = () => {
  const { t } = useI18n()
  const headerMenu = computed(() => [
    { label: t('HOME'), href: '/' },
    { label: t('WHITE_LABEL'), href: '/about' },
    { label: t('PRICING'), href: '/price' },
    { label: t('CONTACT'), href: '/contact' },
  ])

  return {
    headerMenu,
  }
}
