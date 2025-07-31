import { createI18n } from 'vue-i18n'

interface LocaleMessages {
  [locale: string]: Record<string, string | object>
}

function loadLocaleMessages(): LocaleMessages {
  const locales = import.meta.glob('./locales/*.json', { eager: true }) as Record<
    string,
    { default: Record<string, string | object> }
  >

  const messages: LocaleMessages = {}

  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\.json$/i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales[key].default
    }
  })

  return messages
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: loadLocaleMessages(),
})
