import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import type { AUTHSTATE } from '../types'

export const useAuthStore = defineStore('auth', () => {
  const state: Ref<AUTHSTATE> = ref({
    token: '',
  })

  const setToken = (token: string) => {
    state.value.token = token
  }

  const getToken = () => {
    return state.value.token
  }

  const isAuth = computed(() => {
    return Boolean(state.value.token?.length)
  })

  return {
    state,
    setToken,
    getToken,
    isAuth,
  }
})
